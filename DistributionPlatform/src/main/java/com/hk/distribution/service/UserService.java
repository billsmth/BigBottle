package com.hk.distribution.service;

import java.util.List;
import java.util.Map;

import com.hk.distribution.model.User;

public interface UserService {

    public List<User> getUserList();
    
    public List<User> getUserList2(Map<String,String> map);
    
    public User getUser(User User);
    
    public User getLoginUser(User User);
    
    public User getMaxID();

    public void saveUser(User kucun);

    public void updateUser(User kucun);

    public void deleteUserByID(List<String> user_id);
}
