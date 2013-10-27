package com.isoftstone.service.acl.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isoftstone.dao.acl.RoleDao;
import com.isoftstone.model.acl.Role;
import com.isoftstone.service.acl.RoleService;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleDao roleDao;

    public RoleDao getRoleDao() {
        return roleDao;
    }

    public void setRoleDao(RoleDao roleDao) {
        this.roleDao = roleDao;
    }

    @Override
    public List<Role> listAll() {
        return roleDao.listAll();
    }

    @Override
    public void delete(String id) {
        roleDao.delete(id);
    }

    @Override
    public void update(Role role) {
        roleDao.update(role);
    }

    @Override
    public void insert(Role role) {
        roleDao.insert(role);
    }

}
