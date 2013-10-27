package com.isoftstone.service.acl;

import java.util.List;

import com.isoftstone.model.acl.Menu;

public interface LoginService {

    public List<Menu> listAllMenu();
    
    public List<Menu> getLinkMenuByRole(String roleId);
}
