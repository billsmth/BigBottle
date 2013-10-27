package com.isoftstone.service.acl.impl;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isoftstone.dao.acl.MenuDao;
import com.isoftstone.model.acl.Menu;
import com.isoftstone.service.acl.MenuService;

@Service
public class MenuServiceImpl implements MenuService {

    @Autowired
    private MenuDao menuDao;

    public MenuDao getMenuDao() {
        return menuDao;
    }

    public void setMenuDao(MenuDao menuDao) {
        this.menuDao = menuDao;
    }

    @Override
    public List<Menu> findMenu() {
        return menuDao.findMenu();
    }

    @Override
    public List<Menu> findMenuByRoleId(String roleId) {
        return menuDao.findMenuByRoleId(roleId);
    }

    @Override
    public List<String> findMenuIdByRoleId(String roleId) {
        return menuDao.findMenuIdByRoleId(roleId);
    }
    
    @Override
    public void saveMenu(String ids, String roleId) {

        //先删掉已有的菜单
        menuDao.deleteMenuByRoleId(roleId);
        
        if(StringUtils.isNotBlank(ids)) {
            // 先固定死。传过来的都是叶子级，生成父级菜单(只适用二级有序ID)
            
            Set<String> parentSet = new HashSet<String>();
            String[] idArr = ids.split(",");
            Map<String, String> params = new HashMap<String, String>();

            // 保存叶子节点的菜单
            for(String id : idArr) {
                parentSet.add(id.substring(0, 2) + "00");
                params.put("id", UUID.randomUUID().toString());
                params.put("roleId", roleId);
                params.put("menuId", id);
                // 先存一部份。虽然这种方式比拼成一个insert要慢不少
                // 但数据少，不成问题
                menuDao.insertMenuByRoleId(params);
            }
            
            // 保存父节点的菜单
            for(String id : parentSet) {
                params.put("id", UUID.randomUUID().toString());
                params.put("roleId", roleId);
                params.put("menuId", id);
                // 先存一部份。虽然这种方式比拼成一个insert要慢不少
                // 但数据少，不成问题
                menuDao.insertMenuByRoleId(params);
            }
        }
    }

}
