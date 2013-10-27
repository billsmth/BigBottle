package com.isoftstone.controller.acl;

import java.util.List;
import java.util.UUID;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.isoftstone.model.acl.User;
import com.isoftstone.service.acl.UserService;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/listall")
    @ResponseBody
    public List<User> findAll() {
        List<User> user = userService.listAll();
        return user;
    }
    
    @RequestMapping("/del")
    @ResponseBody
    public String del(String id) {
        userService.delete(id);
        return "{'success':true}";
    }

    @RequestMapping("/edit")
    @ResponseBody
    public String edit(User user) {

        
        if (StringUtils.isBlank(user.getId())) {
            user.setId(UUID.randomUUID().toString());
            userService.insert(user, user.getRoleId());
        } else {
            userService.update(user, user.getRoleId());
        }
        return "{'success':true}";
    }
}
