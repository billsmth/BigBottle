package com.isoftstone.model.ktxx;

import java.io.Serializable;
/**
 * 课题信息 与 年度任务及指标 Link
 * @author WM
 * 下午11:51:07
 */
public class KtxxTaskTarget implements Serializable {

	private static final long serialVersionUID = 8512052806709709154L;
	
	private String id;
	private String issueId;//课题主键
	private String yearPlan;//年度
	private String quraterPlan;//季度
	private int sortNo;//序号
	private String task;//任务
	private String kpi;//指标
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
	public String getYearPlan() {
		return yearPlan;
	}
	public void setYearPlan(String yearPlan) {
		this.yearPlan = yearPlan;
	}
	public String getQuraterPlan() {
		return quraterPlan;
	}
	public void setQuraterPlan(String quraterPlan) {
		this.quraterPlan = quraterPlan;
	}
	
	public int getSortNo() {
		return sortNo;
	}
	public void setSortNo(int sortNo) {
		this.sortNo = sortNo;
	}
	public String getTask() {
		return task;
	}
	public void setTask(String task) {
		this.task = task;
	}
	public String getKpi() {
		return kpi;
	}
	public void setKpi(String kpi) {
		this.kpi = kpi;
	}
	
	
}
