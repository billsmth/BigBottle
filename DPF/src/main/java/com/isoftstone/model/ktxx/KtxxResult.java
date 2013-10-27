package com.isoftstone.model.ktxx;

import java.io.Serializable;
/**
 * 课题预期成果
 * @author WM
 * 下午10:01:42
 */
public class KtxxResult implements Serializable {

	private static final long serialVersionUID = -1227199037961323423L;
	
	private String id;
	private String issueId;
	private String result;
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
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	
	
}
