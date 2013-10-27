package com.isoftstone.model.opinion;


public class IssueSpecialistLink {
	private String id;
	private String issueId;
	private String specialistId;
	private String status;
	
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
	public String getSpecialistId() {
		return specialistId;
	}
	public void setSpecialistId(String specialistId) {
		this.specialistId = specialistId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
