package com.hk.distribution.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hk.distribution.model.User;
import com.hk.distribution.service.UserService;

@Controller
@RequestMapping("/login")
public class LoginController {
	@Autowired
    private UserService userService;
	static List<User> userList=new ArrayList<User>();
    
	@RequestMapping("/doLogin")
	@ResponseBody
    public String doLogin(HttpServletRequest request) {
		
		User u=new User(request.getParameter("username"),request.getParameter("userpwd"));
		String msg="";
    	u=userService.getLoginUser(u);
		if(u!=null){
			request.getSession().setAttribute("User", u);
			request.getSession().setAttribute("Group", u.getUserGroup());
			msg="{success:true,msg:'1'}";
		}else{
    		msg="{success:true,msg:'2'}";
    	}
    	return msg;
    }
    
}
