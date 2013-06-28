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
    	if ("1".equals(editType)){
    		u.setUserName(Tools.getReqPram(request, "userName2"));
    		u=userService.getUser(u);
    		if(u!=null){
    			return "{'msg':'1'}";
    		}
    		u=new User();
    		u.setUserID(userService.getMaxID().getUserID()+1);
    	} else if ("2".equals(editType)) {
    		u.setUserName(Tools.getReqPram(request, "userName2"));
    		u=userService.getUser(u);
    		if(u!=null){
    			return "{'msg':'1'}";
    		}
    		u.setUserID(Integer.parseInt(Tools.getReqPram(request, "userID2")));
    	}
    	
    	
    	u.setUserGroup(Tools.getReqPram(request, "userGroup2"));
    	u.setUserPwd(Tools.getReqPram(request, "userPwd2"));
    	u.setStatus(Tools.getReqPram(request, "status2"));
    	u.setNote(Tools.getReqPram(request, "note2"));
    	
    	if ("1".equals(editType)) {

    		userService.saveUser(u);
        } else if ("2".equals(editType)) {

        	userService.updateUser(u);
        }
    	
    	return "{'success':true}";
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
    	
        List<User> list = userService.getUserList2(parmMap);
        return list;
    }
}