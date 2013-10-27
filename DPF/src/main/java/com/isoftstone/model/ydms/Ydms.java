package com.isoftstone.model.ydms;

import java.util.List;

public class Ydms {
	private String id;
    private String project_name;
	private String topic_name;
	private String belong_valley;
	private String issue_no;
	private String issue_name;
	private String secret_level;
	private String request_company;
	private String issue_category;
	private String start_year_month;
	private String end_year_month;
	private String result;
	private String introduce;
	private String necessity_analysis;
	private String objective;
	private String tech_solution;
	private String basis_info;
	private String member_info;
	private String org_manage;
	private String other_remark;
	private String director;
	private String close_date;
	private String analysis;
	private String request_company_name;
	
	
	private List<YdmsPeople> personXZ;
	private List<YdmsPeople> personJS;
	private List<YdmsDw> dwOrg;
	private List<Ywzb> task;
	private List<Sfgc> project;
	private List<IssuePeople> basis;
	private List<Plan> planList;
	private List<TaskSZ> yjrwsz;
	private List<Outlay> outlayFP;
	private List<Lay> lay;
	private List<Result> resultList;
	private Object budget;
	
	
	
	public String getRequest_company_name() {
		return request_company_name;
	}
	public void setRequest_company_name(String request_company_name) {
		this.request_company_name = request_company_name;
	}
	public String getAnalysis() {
		return analysis;
	}
	public void setAnalysis(String analysis) {
		this.analysis = analysis;
	}
	public Object getBudget() {
		return budget;
	}
	public void setBudget(Object budget) {
		this.budget = budget;
	}
	public List<Result> getResultList() {
		return resultList;
	}
	public void setResultList(List<Result> resultList) {
		this.resultList = resultList;
	}
	public List<Lay> getLay() {
		return lay;
	}
	public void setLay(List<Lay> lay) {
		this.lay = lay;
	}
	public String getClose_date() {
		return close_date;
	}
	public void setClose_date(String close_date) {
		this.close_date = close_date;
	}
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	public List<Outlay> getOutlayFP() {
		return outlayFP;
	}
	public void setOutlayFP(List<Outlay> outlayFP) {
		this.outlayFP = outlayFP;
	}
	public List<TaskSZ> getYjrwsz() {
		return yjrwsz;
	}
	public void setYjrwsz(List<TaskSZ> yjrwsz) {
		this.yjrwsz = yjrwsz;
	}
	public String getOrg_manage() {
		return org_manage;
	}
	public void setOrg_manage(String org_manage) {
		this.org_manage = org_manage;
	}
	public String getOther_remark() {
		return other_remark;
	}
	public void setOther_remark(String other_remark) {
		this.other_remark = other_remark;
	}
	public List<Plan> getPlanList() {
		return planList;
	}
	public void setPlanList(List<Plan> planList) {
		this.planList = planList;
	}
	public List<IssuePeople> getBasis() {
		return basis;
	}
	public void setBasis(List<IssuePeople> basis) {
		this.basis = basis;
	}
	public String getBasis_info() {
		return basis_info;
	}
	public void setBasis_info(String basis_info) {
		this.basis_info = basis_info;
	}
	public String getMember_info() {
		return member_info;
	}
	public void setMember_info(String member_info) {
		this.member_info = member_info;
	}
	public String getTech_solution() {
		return tech_solution;
	}
	public void setTech_solution(String tech_solution) {
		this.tech_solution = tech_solution;
	}
	public List<Ywzb> getTask() {
		return task;
	}
	public void setTask(List<Ywzb> task) {
		this.task = task;
	}
	public List<Sfgc> getProject() {
		return project;
	}
	public void setProject(List<Sfgc> project) {
		this.project = project;
	}
	public String getNecessity_analysis() {
		return necessity_analysis;
	}
	public void setNecessity_analysis(String necessity_analysis) {
		this.necessity_analysis = necessity_analysis;
	}
	public String getObjective() {
		return objective;
	}
	public void setObjective(String objective) {
		this.objective = objective;
	}
	public List<YdmsDw> getDwOrg() {
		return dwOrg;
	}
	public void setDwOrg(List<YdmsDw> dwOrg) {
		this.dwOrg = dwOrg;
	}
	public List<YdmsPeople> getPersonXZ() {
		return personXZ;
	}
	public void setPersonXZ(List<YdmsPeople> personXZ) {
		this.personXZ = personXZ;
	}
	public List<YdmsPeople> getPersonJS() {
		return personJS;
	}
	public void setPersonJS(List<YdmsPeople> personJS) {
		this.personJS = personJS;
	}
	public String getSecret_level() {
		return secret_level;
	}
	public void setSecret_level(String secret_level) {
		this.secret_level = secret_level;
	}
	public String getIssue_category() {
		return issue_category;
	}
	public void setIssue_category(String issue_category) {
		this.issue_category = issue_category;
	}
	public String getProject_name() {
		return project_name;
	}
	public void setProject_name(String project_name) {
		this.project_name = project_name;
	}
	public String getTopic_name() {
		return topic_name;
	}
	public void setTopic_name(String topic_name) {
		this.topic_name = topic_name;
	}
	public String getIssue_no() {
		return issue_no;
	}
	public void setIssue_no(String issue_no) {
		this.issue_no = issue_no;
	}
	public String getIssue_name() {
		return issue_name;
	}
	public void setIssue_name(String issue_name) {
		this.issue_name = issue_name;
	}
	public String getBelong_valley() {
		return belong_valley;
	}
	public void setBelong_valley(String belong_valley) {
		this.belong_valley = belong_valley;
	}
	public String getRequest_company() {
		return request_company;
	}
	public void setRequest_company(String request_company) {
		this.request_company = request_company;
	}
	public String getStart_year_month() {
		return start_year_month;
	}
	public void setStart_year_month(String start_year_month) {
		this.start_year_month = start_year_month;
	}
	public String getEnd_year_month() {
		return end_year_month;
	}
	public void setEnd_year_month(String end_year_month) {
		this.end_year_month = end_year_month;
	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getIntroduce() {
		return introduce;
	}
	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
}
