package com.isoftstone.model.ktxx;

import java.math.BigDecimal;

public class ResearchOutlay {
    private String id;
    private String issueId;
    private String orgId;
    private String task;
    private String checkTarget;
    private BigDecimal outlay;
    private Integer sortNo;
    private String orgName;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }
    
    public String getIssueId() {
        return issueId;
    }

    public void setIssueId(String issueId) {
        this.issueId = issueId == null ? null : issueId.trim();
    }

    public String getOrgId() {
        return orgId;
    }

    public void setOrgId(String orgId) {
        this.orgId = orgId == null ? null : orgId.trim();
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task == null ? null : task.trim();
    }

    public String getCheckTarget() {
        return checkTarget;
    }

    public void setCheckTarget(String checkTarget) {
        this.checkTarget = checkTarget == null ? null : checkTarget.trim();
    }

    public BigDecimal getOutlay() {
        return outlay;
    }

    public void setOutlay(BigDecimal outlay) {
        this.outlay = outlay;
    }

    public Integer getSortNo() {
        return sortNo;
    }

    public void setSortNo(Integer sortNo) {
        this.sortNo = sortNo;
    }

	public String getOrgName() {
		return orgName;
	}

	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}
    
}