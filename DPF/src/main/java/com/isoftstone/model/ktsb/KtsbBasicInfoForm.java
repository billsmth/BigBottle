package com.isoftstone.model.ktsb;

import java.io.Serializable;
import java.util.Date;

public class KtsbBasicInfoForm  implements Serializable{
	
	private static final long serialVersionUID = 1649161262148864705L;
	//Total attribute 12
	private String ktsb_issueNo;
	private String ktsb_issueName;
	private String ktsb_issueType;
	private String ktsb_projectName;
	private String ktsb_requestCompanyName;
	private String ktsb_secretLevel;
	private String ktsb_topicName;
	private String ktsb_belongValley;
	private String ktsb_issueIntro;
	private String ktsb_startYearMonth;
	private String ktsb_endYearMonth;
	private String[] achievement;
	public String getKtsb_issueNo() {
		return ktsb_issueNo;
	}
	public void setKtsb_issueNo(String ktsb_issueNo) {
		this.ktsb_issueNo = ktsb_issueNo;
	}
	public String getKtsb_issueName() {
		return ktsb_issueName;
	}
	public void setKtsb_issueName(String ktsb_issueName) {
		this.ktsb_issueName = ktsb_issueName;
	}
	public String getKtsb_issueType() {
		return ktsb_issueType;
	}
	public void setKtsb_issueType(String ktsb_issueType) {
		this.ktsb_issueType = ktsb_issueType;
	}
	public String getKtsb_projectName() {
		return ktsb_projectName;
	}
	public void setKtsb_projectName(String ktsb_projectName) {
		this.ktsb_projectName = ktsb_projectName;
	}
	public String getKtsb_requestCompanyName() {
		return ktsb_requestCompanyName;
	}
	public void setKtsb_requestCompanyName(String ktsb_requestCompanyName) {
		this.ktsb_requestCompanyName = ktsb_requestCompanyName;
	}
	public String getKtsb_secretLevel() {
		return ktsb_secretLevel;
	}
	public void setKtsb_secretLevel(String ktsb_secretLevel) {
		this.ktsb_secretLevel = ktsb_secretLevel;
	}
	public String getKtsb_topicName() {
		return ktsb_topicName;
	}
	public void setKtsb_topicName(String ktsb_topicName) {
		this.ktsb_topicName = ktsb_topicName;
	}
	public String getKtsb_belongValley() {
		return ktsb_belongValley;
	}
	public void setKtsb_belongValley(String ktsb_belongValley) {
		this.ktsb_belongValley = ktsb_belongValley;
	}
	public String getKtsb_issueIntro() {
		return ktsb_issueIntro;
	}
	public void setKtsb_issueIntro(String ktsb_issueIntro) {
		this.ktsb_issueIntro = ktsb_issueIntro;
	}
	public String getKtsb_startYearMonth() {
		return ktsb_startYearMonth;
	}
	public void setKtsb_startYearMonth(String ktsb_startYearMonth) {
		this.ktsb_startYearMonth = ktsb_startYearMonth;
	}
	public String getKtsb_endYearMonth() {
		return ktsb_endYearMonth;
	}
	public void setKtsb_endYearMonth(String ktsb_endYearMonth) {
		this.ktsb_endYearMonth = ktsb_endYearMonth;
	}
	public String[] getAchievement() {
		return achievement;
	}
	public void setAchievement(String[] achievement) {
		this.achievement = achievement;
	}
	
	
	
}
