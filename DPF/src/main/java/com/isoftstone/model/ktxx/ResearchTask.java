package com.isoftstone.model.ktxx;

import java.math.BigDecimal;
/**研究任务设置**/
public class ResearchTask {
    private String id;

    private String issueId;

    private String taskName;

    private String researchContent;

    private String checkTarget;

    private String assumeOrgId;

    private String joinOrgId;

    private BigDecimal outlay;

    private Integer sortNo;
    
    private String assumeOrgName;

    private String joinOrgName;

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

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName == null ? null : taskName.trim();
    }

    public String getResearchContent() {
        return researchContent;
    }

    public void setResearchContent(String researchContent) {
        this.researchContent = researchContent == null ? null : researchContent.trim();
    }

    public String getCheckTarget() {
        return checkTarget;
    }

    public void setCheckTarget(String checkTarget) {
        this.checkTarget = checkTarget == null ? null : checkTarget.trim();
    }

    public String getAssumeOrgId() {
        return assumeOrgId;
    }

    public void setAssumeOrgId(String assumeOrgId) {
        this.assumeOrgId = assumeOrgId == null ? null : assumeOrgId.trim();
    }

    public String getJoinOrgId() {
        return joinOrgId;
    }

    public void setJoinOrgId(String joinOrgId) {
        this.joinOrgId = joinOrgId == null ? null : joinOrgId.trim();
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

	public String getAssumeOrgName() {
		return assumeOrgName;
	}

	public void setAssumeOrgName(String assumeOrgName) {
		this.assumeOrgName = assumeOrgName;
	}

	public String getJoinOrgName() {
		return joinOrgName;
	}

	public void setJoinOrgName(String joinOrgName) {
		this.joinOrgName = joinOrgName;
	}
}