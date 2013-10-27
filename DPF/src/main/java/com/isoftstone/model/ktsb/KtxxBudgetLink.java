/**
 * 
 */
package com.isoftstone.model.ktsb;

import java.io.Serializable;

/**课题与经费预算的Link
 * @author WM
 * 下午12:13:24
 */
public class KtxxBudgetLink implements Serializable {

	private static final long serialVersionUID = 311512858521923512L;
	
	private String id;
	private String issueId;
	private String budget;
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
	public String getBudget() {
		return budget;
	}
	public void setBudget(String budget) {
		this.budget = budget;
	}
	
	
}
