package com.hk.distribution.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hk.distribution.common.tools.Tools;
import com.hk.distribution.model.User;
import com.hk.distribution.service.UserService;


@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
    private UserService userService;
    @RequestMapping("/usermgt")
    public ModelAndView listTest() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("user/user");
        return mav;
    }
    
    @RequestMapping("/saveuser")
    @ResponseBody
    public String saveUser(HttpServletRequest request, String editType) {
    	User u=new User();
    	u.setUserName(Tools.getReqPram(request, "userName"));
		u=userService.getUser(u);
    	if ("1".equals(editType)){
    		
    		if(u!=null){
    			return "{success:true,msg:'1'}";
    		}
    		u=new User();
    		u.setUserName(Tools.getReqPram(request, "userName"));
    		u.setUserID(userService.getMaxID().getUserID()+1);
    	} else if ("2".equals(editType)) {
    		if(u==null){
    			u=new User();
    			u.setUserName(Tools.getReqPram(request, "userName"));
    			u.setUserID(Integer.parseInt(Tools.getReqPram(request, "userID")));
    		}if(u!=null&&u.getUserID().intValue()==Integer.parseInt(Tools.getReqPram(request, "userID"))){
    		}else if(u!=null&&u.getUserID().intValue()!=Integer.parseInt(Tools.getReqPram(request, "userID"))){
    			return "{success:true,msg:'2'}";
    		}
    	}
    	
    	
    	u.setUserGroup(Tools.getReqPram(request, "userGroup"));
    	u.setUserPwd(Tools.getReqPram(request, "userPwd"));
    	u.setStatus(Tools.getReqPram(request, "status"));
    	u.setNote(Tools.getReqPram(request, "note"));
    	
    	if ("1".equals(editType)) {

    		userService.saveUser(u);
        } else if ("2".equals(editType)) {

        	userService.updateUser(u);
        	return "{success:true,msg:'4'}";//"{'msg':'4'}";
        }
    	
    	return "{success:true,msg:'0'}";
    }
    
    @RequestMapping("/changepwd")
    @ResponseBody
    public String changePWD(HttpServletRequest request) {
    	User user=(User)request.getSession().getAttribute("User");
    	user = userService.getUser(user);
    	if(user.getUserPwd().equals(request.getParameter("oldpwd"))){
    		user.setUserPwd(Tools.getReqPram(request, "newpwd"));
    		userService.updateUser(user);
    		request.getSession().setAttribute("User",user);
    		return "{success:true,msg:'0'}";
    	}else{
    		return "{success:false,msg:'1'}";
    	}
    }
    
    @RequestMapping("/delete")
    @ResponseBody
    public String deleteTest(String address) {
        
        String[] rets = address.split(",");
        
        return "{'success':true}";
    }

    @RequestMapping("/json/list")
    @ResponseBody
    public List<User> getUserListByJson(HttpServletRequest request) {
    	Map<String, String> parmMap=new HashMap<String,String>();
    	Tools.addParam(request,parmMap,"userID");
    	Tools.addParam(request,parmMap,"userName");
    	Tools.addParam(request,parmMap,"userGroup");
    	Tools.addParam(request,parmMap,"status");
    	Tools.addParam(request,parmMap,"note");
        List<User> list = userService.getUserList2(parmMap);
        return list;
    }
}