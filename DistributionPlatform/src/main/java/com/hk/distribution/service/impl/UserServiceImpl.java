package com.hk.distribution.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hk.distribution.dao.UserDao;
import com.hk.distribution.model.SaleMgt;
import com.hk.distribution.model.User;
import com.hk.distribution.service.UserService;

@Transactional
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public List<User> getUserList() {
        return userDao.getUserList();
    }
    
    @Override
    public List<User> getUserList2(Map<String,String> map) {
        return userDao.getUserList2(map);
    }
    
    @Override
    public User getUser(User user) {
        List<User> list=userDao.getUser(user);
        if(list.size()>0){
        	user=list.get(0);
    	}else{
    		user=null;
    	}
        return user;
    }
    
    @Override
    public User getLoginUser(User user) {
        List<User> list=userDao.getLoginUser(user);
        if(list.size()>0){
        	user=list.get(0);
    	}else{
    		user=null;
    	}
        return user;
    }
    
    @Override
    public User getMaxID(){
    	return userDao.getMaxID().get(0);
    }

    @Override
    public void saveUser(User user) {
        userDao.saveUser(user);
    }

    @Override
    public void updateUser(User user) {
        userDao.updateUser(user);
    }
    

    @Override
    public void deleteUserByID(List<String> user_id) {
        userDao.deleteUserByID(user_id);
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
}
