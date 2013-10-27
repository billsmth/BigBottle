package com.isoftstone.dao.acl;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.acl.Menu;

public interface MenuDao {

    public List<Menu> findMenu();

    public List<Menu> findMenuByRoleId(String roleId);
    
    public List<String> findMenuIdByRoleId(String roleId);
    
    public void deleteMenuByRoleId(String roleId);
    
    public void insertMenuByRoleId(Map<String, String> params);
}
