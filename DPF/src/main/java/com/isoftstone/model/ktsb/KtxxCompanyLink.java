/**
 * 
 */
package com.isoftstone.model.ktsb;

import java.io.Serializable;

/**课题信息 与 支持单位 Link
 * @author WM
 * 下午11:47:01
 */
public class KtxxCompanyLink implements Serializable {

	private static final long serialVersionUID = 8591573884048017886L;
	
	private String id;
	private String issueId;
	private String companyId;
	private int sortNo;
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
	public String getCompanyId() {
		return companyId;
	}
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}
	public int getSortNo() {
		return sortNo;
	}
	public void setSortNo(int sortNo) {
		this.sortNo = sortNo;
	}
	
	
}
