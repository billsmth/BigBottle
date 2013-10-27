package com.isoftstone.model.meeting;

import java.util.Date;

public class MeetingSummary {
    private String idms;

    private String idMeeting;

    private String summaryUrl;

    private String idPeople;

    private String createUser;

    private Date createDate;

    private String modifyUser;

    private Date modifyDate;

    private String softDel;

    private String summary;

    public String getIdms() {
        return idms;
    }

    public void setIdms(String idms) {
        this.idms = idms == null ? null : idms.trim();
    }

    public String getIdMeeting() {
        return idMeeting;
    }

    public void setIdMeeting(String idMeeting) {
        this.idMeeting = idMeeting == null ? null : idMeeting.trim();
    }

    public String getSummaryUrl() {
        return summaryUrl;
    }

    public void setSummaryUrl(String summaryUrl) {
        this.summaryUrl = summaryUrl == null ? null : summaryUrl.trim();
    }

    public String getIdPeople() {
        return idPeople;
    }

    public void setIdPeople(String idPeople) {
        this.idPeople = idPeople == null ? null : idPeople.trim();
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser == null ? null : createUser.trim();
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getModifyUser() {
        return modifyUser;
    }

    public void setModifyUser(String modifyUser) {
        this.modifyUser = modifyUser == null ? null : modifyUser.trim();
    }

    public Date getModifyDate() {
        return modifyDate;
    }

    public void setModifyDate(Date modifyDate) {
        this.modifyDate = modifyDate;
    }

    public String getSoftDel() {
        return softDel;
    }

    public void setSoftDel(String softDel) {
        this.softDel = softDel == null ? null : softDel.trim();
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary == null ? null : summary.trim();
    }
}