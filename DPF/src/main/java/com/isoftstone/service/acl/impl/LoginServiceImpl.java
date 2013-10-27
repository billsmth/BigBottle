package com.isoftstone.service.acl.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isoftstone.model.acl.Menu;
import com.isoftstone.service.acl.LoginService;
import com.isoftstone.service.acl.MenuService;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private MenuService menuService;

    public MenuService getMenuService() {
        return menuService;
    }

    public void setMenuService(MenuService menuService) {
        this.menuService = menuService;
    }

    @Override
    public List<Menu> listAllMenu() {
        return menuService.findMenu();
    }

    @Override
    public List<Menu> getLinkMenuByRole(String roleId) {
        List<Menu> linkMenu = menuService.findMenuByRoleId(roleId);
        return linkMenu;
    }
}
