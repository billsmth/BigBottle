package com.isoftstone.service.acl;

import java.util.List;

import com.isoftstone.model.acl.Menu;

public interface MenuService {

    public List<Menu> findMenu();

    public List<Menu> findMenuByRoleId(String roleId);

    public List<String> findMenuIdByRoleId(String roleId);

    public void saveMenu(String ids, String roleId);
}
