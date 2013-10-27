package com.isoftstone.controller.acl;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.isoftstone.model.acl.Menu;
import com.isoftstone.model.acl.User;
import com.isoftstone.service.acl.LoginService;
import com.isoftstone.service.acl.UserService;

@Controller
public class LoginController {
    
    private final String P_NODE_STR = "{\"id\":%s, \"text\":%s, \"cls\":\"forum-ct\", \"leaf\":false, \"children\":[";
    private final String C_NODE_STR = "{\"id\":%s, \"text\":%s, \"cls\":\"forum-ct\", \"leaf\":true, \"qtitle\":%s},";

    @Autowired
    private LoginService loginService;
    @Autowired
    private UserService userService;

    public LoginService getLoginService() {
        return loginService;
    }

    public void setLoginService(LoginService loginService) {
        this.loginService = loginService;
    }

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/login")
    public ModelAndView login(HttpServletRequest request,String userId,String password) {

        if(userId == null||userId.trim().length()==0){
        	//request.getSession().setAttribute("text","用户未填写！" );
        	return new ModelAndView("redirect:index.jsp");
        }
       /* if(password == null||password.trim().length()==0){
        	request.getSession().setAttribute("userIds",userId );
        	request.getSession().setAttribute("text","密码未填写！" );
        	return new ModelAndView("redirect:index.jsp");
        }*/
        
        ModelAndView mv = new ModelAndView();
        User user = userService.findUserById(userId);
        if (user == null || (!user.getPassword().equals(password))) {
        //if (user == null) {
        	request.getSession().setAttribute("userIds",userId );
            request.getSession().setAttribute("text","用户未指定或密码错误！" );
            mv.setViewName("redirect:index.jsp");
        } else {
            request.getSession().setAttribute("user", user);
            mv.setViewName("home");
        }
        return mv;
    }
    
    @RequestMapping(value="/findmenu",produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String findMenu(HttpServletRequest request) {
        User user = (User)request.getSession().getAttribute("user");
        List<Menu> linkMenu = loginService.getLinkMenuByRole(user.getRoleId());
        
        String parentNo = null;
        StringBuffer buff = new StringBuffer("[");
        for (Menu menu : linkMenu) {
            if(parentNo == null) {
                // 第一次进来初始化parentNo
                parentNo = menu.getId();
            } else if(!parentNo.equals(menu.getParentNo())) {
                // 非第一次进来，开始一组新的父节点
                parentNo = menu.getId();
                // 减掉最后一个","
                buff.delete(buff.length() - 1, buff.length());
                buff.append("]},");
            }
            buff.append(this.createNoteStr(menu));
        }
        // 减掉最后一个","
        buff.delete(buff.length() - 1, buff.length());
        buff.append("]}]");

        return buff.toString();
    }
    
    private String createNoteStr(Menu menu) {
        String ret = "";
        if(StringUtils.isBlank(menu.getParentNo())) {
            ret = String.format(
                    P_NODE_STR,
                    "\"" + menu.getId() + "\"",
                    "\"" + menu.getMenuName() + "\""
                    );
        } else {
            ret = String.format(
                    C_NODE_STR,
                    "\"" + menu.getId() + "\"",
                    "\"" + menu.getMenuName() + "\"",
                    "\"" + menu.getMenuUrl() + "\""
                    );
        }
        
        return ret;
    }
}
