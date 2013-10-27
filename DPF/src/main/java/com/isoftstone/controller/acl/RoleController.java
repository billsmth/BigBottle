package com.isoftstone.controller.acl;

import java.util.List;
import java.util.UUID;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.isoftstone.model.acl.Role;
import com.isoftstone.service.acl.RoleService;

@Controller
@RequestMapping("/role")
public class RoleController {

    @Autowired
    private RoleService roleService;

    public RoleService getRoleService() {
        return roleService;
    }

    public void setRoleService(RoleService roleService) {
        this.roleService = roleService;
    }
    
    @RequestMapping("/listall")
    @ResponseBody
    public List<Role> findAll() {
        return roleService.listAll();
    }
    
    @RequestMapping("/del")
    @ResponseBody
    public String del(String id) {
        roleService.delete(id);
        return "{'success':true}";
    }

    @RequestMapping("/edit")
    @ResponseBody
    public String edit(Role role) {

        if (StringUtils.isBlank(role.getId())) {
            role.setId(UUID.randomUUID().toString());
            roleService.insert(role);
        } else {
            roleService.update(role);
        }
        return "{'success':true}";
    }
}
