package com.isoftstone.model.meeting;

import java.io.File;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.web.multipart.commons.CommonsMultipartFile;

public class Meeting {
    private String idmeeting;

    private String title;

    private Date beginTime;

    private Date endTime;

    private String address;

    private String compere;

    private String contact;

    private String contactTel;

    private String contactEmail;

    private String agend;

    private String meetingRequest;

    private String mainContentUrl;
    
    private String status;

    private String createUser;

    private Date createDate;

    private String modifyUser;

    private Date modifyDate;

    private String softDel;

    private String mainContent;
    
    private String beginTimeStr;
    
    private String endTimeStr;
    
    private String beginTimeStr2;
    
    private String endTimeStr2;
    
    private String mainPeople;
    
    private String maybePeople;
    
    private List<MeetingPeopleLink> mainPeopleArr;
    
    private List<MeetingPeopleLink> maybePeopleArr;
    
    private CommonsMultipartFile filetest;
    
	public String getIdmeeting() {
        return idmeeting;
    }

    public void setIdmeeting(String idmeeting) {
        this.idmeeting = idmeeting == null ? null : idmeeting.trim();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public Date getBeginTime() {
        return beginTime;
    }

    public void setBeginTime(Date beginTime) {
        this.beginTime = beginTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getCompere() {
        return compere;
    }

    public void setCompere(String compere) {
        this.compere = compere == null ? null : compere.trim();
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact == null ? null : contact.trim();
    }

    public String getContactTel() {
        return contactTel;
    }

    public void setContactTel(String contactTel) {
        this.contactTel = contactTel == null ? null : contactTel.trim();
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail == null ? null : contactEmail.trim();
    }

    public String getAgend() {
        return agend;
    }

    public void setAgend(String agend) {
        this.agend = agend == null ? null : agend.trim();
    }

    public String getMeetingRequest() {
        return meetingRequest;
    }

    public void setMeetingRequest(String meetingRequest) {
        this.meetingRequest = meetingRequest == null ? null : meetingRequest.trim();
    }

    public String getMainContentUrl() {
        return mainContentUrl;
    }

    public void setMainContentUrl(String mainContentUrl) {
        this.mainContentUrl = mainContentUrl == null ? null : mainContentUrl.trim();
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
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

    public String getMainContent() {
        return mainContent;
    }

    public void setMainContent(String mainContent) {
        this.mainContent = mainContent == null ? null : mainContent.trim();
    }

	public String getBeginTimeStr() {
		return beginTimeStr;
	}

	public void setBeginTimeStr(String beginTimeStr) {
		this.beginTimeStr = beginTimeStr;
	}

	public String getEndTimeStr() {
		return endTimeStr;
	}

	public void setEndTimeStr(String endTimeStr) {
		this.endTimeStr = endTimeStr;
	}

	public String getBeginTimeStr2() {
		return beginTimeStr2;
	}

	public void setBeginTimeStr2(String beginTimeStr2) {
		this.beginTimeStr2 = beginTimeStr2;
	}

	public String getEndTimeStr2() {
		return endTimeStr2;
	}

	public void setEndTimeStr2(String endTimeStr2) {
		this.endTimeStr2 = endTimeStr2;
	}

	public String getMainPeople() {
		return mainPeople;
	}

	public void setMainPeople(String mainPeople) {
		this.mainPeople = mainPeople;
	}

	public String getMaybePeople() {
		return maybePeople;
	}

	public void setMaybePeople(String maybePeople) {
		this.maybePeople = maybePeople;
	}

	public List<MeetingPeopleLink> getMainPeopleArr() {
		return mainPeopleArr;
	}

	public void setMainPeopleArr(List<MeetingPeopleLink> mainPeopleArr) {
		this.mainPeopleArr = mainPeopleArr;
	}

	public List<MeetingPeopleLink> getMaybePeopleArr() {
		return maybePeopleArr;
	}

	public void setMaybePeopleArr(List<MeetingPeopleLink> maybePeopleArr) {
		this.maybePeopleArr = maybePeopleArr;
	}

	public CommonsMultipartFile getFiletest() {
		return filetest;
	}

	public void setFiletest(CommonsMultipartFile filetest) {
		this.filetest = filetest;
	}

}