package com.isoftstone.model.cddw;

import java.util.Date;

public class Cddw {
	
    private String idorg;
    private String companyName;
    private String orgNo;
    private Integer belongAreaProvince;
    private Integer belongAreaCity;
    private Integer belongAreaDistrict;
    private String address;
    private String companyProp;
    private String bankName;
    private String bankAccount;
    private String legalMsg;
    private Date createDate;
    private Integer createUser;
    private Date modifyDate;
    private Integer modifyUser;
    private String softDel;
    
    private Integer softNo;

    public String getIdorg() {
        return idorg;
    }

    public void setIdorg(String idorg) {
        this.idorg = idorg == null ? null : idorg.trim();
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName == null ? null : companyName.trim();
    }

    public String getOrgNo() {
        return orgNo;
    }

    public void setOrgNo(String orgNo) {
        this.orgNo = orgNo == null ? null : orgNo.trim();
    }

    public Integer getBelongAreaProvince() {
        return belongAreaProvince;
    }

    public void setBelongAreaProvince(Integer belongAreaProvince) {
        this.belongAreaProvince = belongAreaProvince;
    }

    public Integer getBelongAreaCity() {
        return belongAreaCity;
    }

    public void setBelongAreaCity(Integer belongAreaCity) {
        this.belongAreaCity = belongAreaCity;
    }

    public Integer getBelongAreaDistrict() {
        return belongAreaDistrict;
    }

    public void setBelongAreaDistrict(Integer belongAreaDistrict) {
        this.belongAreaDistrict = belongAreaDistrict;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getCompanyProp() {
        return companyProp;
    }

    public void setCompanyProp(String companyProp) {
        this.companyProp = companyProp == null ? null : companyProp.trim();
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName == null ? null : bankName.trim();
    }

    public String getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount == null ? null : bankAccount.trim();
    }

    public String getLegalMsg() {
        return legalMsg;
    }

    public void setLegalMsg(String legalMsg) {
        this.legalMsg = legalMsg == null ? null : legalMsg.trim();
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Integer getCreateUser() {
        return createUser;
    }

    public void setCreateUser(Integer createUser) {
        this.createUser = createUser;
    }

    public Date getModifyDate() {
        return modifyDate;
    }

    public void setModifyDate(Date modifyDate) {
        this.modifyDate = modifyDate;
    }

    public Integer getModifyUser() {
        return modifyUser;
    }

    public void setModifyUser(Integer modifyUser) {
        this.modifyUser = modifyUser;
    }

    public String getSoftDel() {
        return softDel;
    }

    public void setSoftDel(String softDel) {
        this.softDel = softDel == null ? null : softDel.trim();
    }
    
    public Integer getSoftNo() {
		return softNo;
	}

	public void setSoftNo(Integer softNo) {
		this.softNo = softNo;
	}
    
}