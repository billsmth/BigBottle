package com.isoftstone.model.ktxx;

import java.io.Serializable;

/**
 * 课题授权实体，关于课题的后继实体可以继承此类
 * 
 * @author wangzp5
 * 
 */
public class Ktsq implements Serializable {

    private static final long serialVersionUID = 7783837444003499591L;

    private String id;
    private String projectName;
    private String topicName;
    private String belongValley;
    private String issueName;
    private String issueNo;
    private String issueCategory;
    private String requestCompany;
    private String requestCompanyNo;
    private String requestCompanyName;
    private String director;
    private String directorNo;
    private String directorName;
    private String fillDate;
    private String secretLevel;
    private String startYearMonth;
    private String endYearMonth;
    private String status;
    private String lastStatus;

    private String createTime;
    private String createBy;
    private String createByName;
    private String createOrg;
    private String modifyTime;
    private String modifyBy;
    private String modifyByName;

    // 以下三个都是查询条件，没地方写了，先放在这
    private String flag;
    private String currUserId;
    private String currOrgId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    public String getBelongValley() {
        return belongValley;
    }

    public void setBelongValley(String belongValley) {
        this.belongValley = belongValley;
    }

    public String getIssueName() {
        return issueName;
    }

    public void setIssueName(String issueName) {
        this.issueName = issueName;
    }

    public String getIssueNo() {
        return issueNo;
    }

    public void setIssueNo(String issueNo) {
        this.issueNo = issueNo;
    }

    public String getIssueCategory() {
		return issueCategory;
	}

	public void setIssueCategory(String issueCategory) {
		this.issueCategory = issueCategory;
	}

	public String getRequestCompany() {
        return requestCompany;
    }

    public void setRequestCompany(String requestCompany) {
        this.requestCompany = requestCompany;
    }

    public String getRequestCompanyNo() {
        return requestCompanyNo;
    }

    public void setRequestCompanyNo(String requestCompanyNo) {
        this.requestCompanyNo = requestCompanyNo;
    }

    public String getRequestCompanyName() {
        return requestCompanyName;
    }

    public void setRequestCompanyName(String requestCompanyName) {
        this.requestCompanyName = requestCompanyName;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getDirectorNo() {
        return directorNo;
    }

    public void setDirectorNo(String directorNo) {
        this.directorNo = directorNo;
    }

    public String getDirectorName() {
        return directorName;
    }

    public void setDirectorName(String directorName) {
        this.directorName = directorName;
    }

    public String getFillDate() {
        return fillDate;
    }

    public void setFillDate(String fillDate) {
        this.fillDate = fillDate;
    }

    public String getSecretLevel() {
        return secretLevel;
    }

    public void setSecretLevel(String secretLevel) {
        this.secretLevel = secretLevel;
    }

    public String getStartYearMonth() {
        return startYearMonth;
    }

    public void setStartYearMonth(String startYearMonth) {
        this.startYearMonth = startYearMonth;
    }

    public String getEndYearMonth() {
        return endYearMonth;
    }

    public void setEndYearMonth(String endYearMonth) {
        this.endYearMonth = endYearMonth;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getLastStatus() {
        return lastStatus;
    }

    public void setLastStatus(String lastStatus) {
        this.lastStatus = lastStatus;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getCreateBy() {
        return createBy;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy;
    }

    public String getCreateByName() {
        return createByName;
    }

    public void setCreateByName(String createByName) {
        this.createByName = createByName;
    }

    public String getCreateOrg() {
        return createOrg;
    }

    public void setCreateOrg(String createOrg) {
        this.createOrg = createOrg;
    }

    public String getModifyTime() {
        return modifyTime;
    }

    public void setModifyTime(String modifyTime) {
        this.modifyTime = modifyTime;
    }

    public String getModifyBy() {
        return modifyBy;
    }

    public void setModifyBy(String modifyBy) {
        this.modifyBy = modifyBy;
    }

    public String getModifyByName() {
        return modifyByName;
    }

    public void setModifyByName(String modifyByName) {
        this.modifyByName = modifyByName;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public String getCurrUserId() {
        return currUserId;
    }

    public void setCurrUserId(String currUserId) {
        this.currUserId = currUserId;
    }

    public String getCurrOrgId() {
        return currOrgId;
    }

    public void setCurrOrgId(String currOrgId) {
        this.currOrgId = currOrgId;
    }

}
