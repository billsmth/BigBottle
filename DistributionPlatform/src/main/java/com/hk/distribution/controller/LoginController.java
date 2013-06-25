package com.hk.distribution.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hk.distribution.model.User;

@Controller
@RequestMapping("/login")
public class LoginController {
	
	static List<User> userList=new ArrayList<User>();
    
	static {
		User user=new User("su","123","2");
		userList.add(user);
		user=new User("mei","123","3");
		userList.add(user);
		user=new User("liang","123","1");
		userList.add(user);
		
	}
	@RequestMapping("/doLogin")
	@ResponseBody
    public String doLogin(HttpServletRequest request) {
		User u;
		String msg="";
    	String userName=request.getParameter("username");
    	String userPwd=request.getParameter("userpwd");
    	int i=0;
    	for(;i<userList.size();i++){
    		u=userList.get(i);
    		if(u.getUserName().equals(userName)&&u.getUserPwd().equals(userPwd)){
    			request.getSession().setAttribute("User", u);
    			request.getSession().setAttribute("Group", u.getGroup());
    			msg="{success:true,msg:'1'}";
    			break;
    		}
    	}
    	if(i>=userList.size()){
    		msg="{success:true,msg:'2'}";
    	}
    	return msg;
    }
    
}
