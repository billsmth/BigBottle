package com.isoftstone.model.ktxx;

import java.io.Serializable;
/**
 * 课题和人员关联关系类
 * @author WM
 * 下午12:35:59
 */
public class IssuePeopleLink implements Serializable {

	private static final long serialVersionUID = -930182364592281289L;
	private String id;
	private String issueId;
	private String peopleId;
	private int sortNo;
	/**
	 * 课题中职务及分配任务
	 */
	private String jobTask;
	/**累计为本课题工作的时间**/
	private int workload;
	
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
	public String getJobTask() {
		return jobTask;
	}
	public void setJobTask(String jobTask) {
		this.jobTask = jobTask;
	}
	public int getWorkload() {
		return workload;
	}
	public void setWorkload(int workload) {
		this.workload = workload;
	}
	
}
