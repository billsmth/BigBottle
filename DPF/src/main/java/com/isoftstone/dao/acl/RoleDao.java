package com.isoftstone.dao.acl;

import java.util.List;

import com.isoftstone.model.acl.Role;

public interface RoleDao {

    public List<Role> listAll();

    public void delete(String id);

    public void update(Role role);

    public void insert(Role role);
}
