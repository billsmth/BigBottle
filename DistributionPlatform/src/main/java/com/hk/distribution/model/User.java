package com.hk.distribution.model;

public class User {
	String userName;
	String userPwd;
	String group;
	
	public User(){}
	public User(String userName, String userPwd){
		this.userName=userName;
		this.userPwd=userPwd;
		this.group="3";
	}
	
	public User(String userName, String userPwd, String group){
		this(userName, userPwd);
		this.group=group;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserPwd() {
		return userPwd;
	}
	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}
	public String getGroup() {
		return group;
	}
	public void setGroup(String group) {
		this.group = group;
	}
	
}
