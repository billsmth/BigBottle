/**
 * 
 */
package com.isoftstone.model.ktsb;

import java.io.Serializable;

/** 课题信息 与 行政责任人  link
 * @author WM
 * 下午11:36:22
 */
public class KtxxDirectorLink implements Serializable {
	
	private static final long serialVersionUID = -3760046484573805292L;
	
	private String id;
	private String issueId;
	private String peopleId;
	private int sortNo;
	
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
	public String getPeopleId() {
		return peopleId;
	}
	public void setPeopleId(String peopleId) {
		this.peopleId = peopleId;
	}
	public int getSortNo() {
		return sortNo;
	}
	public void setSortNo(int sortNo) {
		this.sortNo = sortNo;
	}
	
	
}
