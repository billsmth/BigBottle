package com.isoftstone.model.ktxx;

import java.io.Serializable;
/**
 * 课题和人员关联关系类
 * @author WM
 * 下午12:35:59
 */
public class IssueMeetingLink implements Serializable {

	private static final long serialVersionUID = -930182364592241289L;
	
	private String id;
	private String issueId;
	private String meetingId;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getIssueId() {
		return issueId;
	}
	public void setIssueId(String issueId) {
		this.issueId = issueId;
	}
	public String getMeetingId() {
		return meetingId;
	}
	public void setMeetingId(String meetingId) {
		this.meetingId = meetingId;
	}
}
