package com.isoftstone.model.ktxx;

import java.math.BigDecimal;
import java.util.Date;
/**
 * 目前承担其他课题情况
 * @author WM
 * 下午9:46:14
 */
public class IssuePlan {
    private String id;

    private String issueId;

    private String leaderName;

    private String issueName;

    private BigDecimal outlay;

    private Date startDate;

    private Date endDate;

    private String belongPlan;

    private Integer sortNo;
    
    private String startDateStr;
    
    private String endDateStr;

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

    public String getLeaderName() {
        return leaderName;
    }

    public void setLeaderName(String leaderName) {
        this.leaderName = leaderName == null ? null : leaderName.trim();
    }

    public String getIssueName() {
        return issueName;
    }

    public void setIssueName(String issueName) {
        this.issueName = issueName == null ? null : issueName.trim();
    }

    public BigDecimal getOutlay() {
        return outlay;
    }

    public void setOutlay(BigDecimal outlay) {
        this.outlay = outlay;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getBelongPlan() {
        return belongPlan;
    }

    public void setBelongPlan(String belongPlan) {
        this.belongPlan = belongPlan == null ? null : belongPlan.trim();
    }

    public Integer getSortNo() {
        return sortNo;
    }

    public void setSortNo(Integer sortNo) {
        this.sortNo = sortNo;
    }

	public String getStartDateStr() {
		return startDateStr;
	}

	public void setStartDateStr(String startDateStr) {
		this.startDateStr = startDateStr;
	}

	public String getEndDateStr() {
		return endDateStr;
	}

	public void setEndDateStr(String endDateStr) {
		this.endDateStr = endDateStr;
	}
}