package com.hk.distribution.model;

public class User {
	private Integer userID;
	private String userName;
	private String userPwd;
	private String userGroup;
	private String status;
	private String note;
	
	public User(){}
	
	public User(String userName, String userPwd){
		this.userName=userName;
		this.userPwd=userPwd;
		this.userGroup="3";
	}
	
	public User(Integer userID, String userName, String userPwd){
		this.userID=userID;
		this.userName=userName;
		this.userPwd=userPwd;
		this.userGroup="3";
	}
	
	public User(Integer userID, String userName, String userPwd, String userGroup){
		this(userID, userName, userPwd);
		this.userGroup=userGroup;
	}

	public Integer getUserID() {
		return userID;
	}

	public void setUserID(Integer userID) {
		this.userID = userID;
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

	public String getUserGroup() {
		return userGroup;
	}

	public void setUserGroup(String userGroup) {
		this.userGroup = userGroup;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
}
