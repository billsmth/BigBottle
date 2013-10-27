package com.isoftstone.service.acl.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isoftstone.dao.acl.UserDao;
import com.isoftstone.model.acl.User;
import com.isoftstone.service.acl.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    public UserDao getUserDao() {
        return userDao;
    }

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public List<User> listAll() {
        return userDao.listAll();
    }

    @Override
    public void delete(String id) {
        userDao.delete(id);

        userDao.deleteRoleLink(id);
    }

    @Override
    public void update(User user, String roleId) {
        userDao.update(user);

        Map<String, String> paramMap = new HashMap<String, String>();
        paramMap.put("userId", user.getId());
        paramMap.put("roleId", roleId);
        paramMap.put("peopleId", user.getPeopleId());
        paramMap.put("orgId", user.getOrgId());

        userDao.updateRoleLink(paramMap);
    }

    @Override
    public void insert(User user, String roleId) {
        userDao.insert(user);

        Map<String, String> paramMap = new HashMap<String, String>();
        paramMap.put("id", UUID.randomUUID().toString());
        paramMap.put("userId", user.getId());
        paramMap.put("roleId", roleId);
        paramMap.put("peopleId", user.getPeopleId());
        paramMap.put("orgId", user.getOrgId());

        userDao.insertRoleLink(paramMap);
    }

    @Override
    public User findUserById(String userId) {
        List<User> list = userDao.findUserById(userId);
        if (list != null && list.size() > 0) {
            return list.get(0);
        }

        return null;
    }

}
