package com.isoftstone.service.acl;

import java.util.List;

import com.isoftstone.model.acl.User;

public interface UserService {

    public List<User> listAll();

    public void delete(String id);

    public void update(User user, String roleId);

    public void insert(User user, String roleId);

    public User findUserById(String userId);
}
