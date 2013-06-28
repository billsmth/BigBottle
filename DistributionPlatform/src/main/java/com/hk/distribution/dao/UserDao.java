package com.hk.distribution.dao;

import java.util.List;
import java.util.Map;

import com.hk.distribution.model.User;

public interface UserDao {

	public List<User> getUserList();
	
	public List<User> getUserList2(Map<String,String> map);
	
	public List<User> getMaxID();

	public List<User> getUser(User User);
	
	public List<User> getLoginUser(User User);

	public void saveUser(User user);

	public void updateUser(User user);
	
	public void deleteUserByID(List<String> user_id);
}
