package com.isoftstone.dao.acl;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.acl.User;

public interface UserDao {

    public List<User> listAll();

    public void delete(String id);

    public void update(User user);

    public void insert(User user);

    public void insertRoleLink(Map<String, String> paramMap);
    
    public void updateRoleLink(Map<String, String> paramMap);
    
    public void deleteRoleLink(String userId);
    
    public List<User> findUserById(String id);
}
