/**
 * 
 */
package com.isoftstone.model.ktsb;

import java.io.Serializable;

/**
 * 课题 与 技术责任人link
 * @author WM
 * 下午11:41:40
 */
public class KtxxTechmemberLink implements Serializable {

	private static final long serialVersionUID = 3549924152954519580L;
	
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
