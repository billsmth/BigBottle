package com.isoftstone.model.ktxx;

import java.io.Serializable;
/**
 * 课题信息 与 示范工程及配套条件 Link
 * @author WM
 * 上午12:59:05
 */
public class KtxxSfgc implements Serializable{

	private static final long serialVersionUID = 6293447701979084488L;
	
	private String id;
	private String issueId;
	private String mainProject;
	private String supportCondition;
	private int sortNo;
	private String localOrg;
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
	public String getMainProject() {
		return mainProject;
	}
	public void setMainProject(String mainProject) {
		this.mainProject = mainProject;
	}
	public String getSupportCondition() {
		return supportCondition;
	}
	public void setSupportCondition(String supportCondition) {
		this.supportCondition = supportCondition;
	}
	
	public int getSortNo() {
		return sortNo;
	}
	public void setSortNo(int sortNo) {
		this.sortNo = sortNo;
	}
	public String getLocalOrg() {
		return localOrg;
	}
	public void setLocalOrg(String localOrg) {
		this.localOrg = localOrg;
	}
	
	
	

}
