package com.isoftstone.model.ktxx;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONObject;

public class BudgetItem implements Serializable {

	private static final long serialVersionUID = 1L;

	private String id;

	private String issueID;

	private String budgetID;

	private String budgetName;

	private float investmentCenGov = 0;

	private float investmentLocGov = 0;

	private float investmentEnterprise = 0;

	private float investmentBank = 0;

	private float investmentOther = 0;

	private float investmentSum = 0;

	private String parentID;

	private int nextSiblingIndex = 0;

	private List<BudgetItem> children;

	public BudgetItem(String budgetName) {
		this.budgetName = budgetName;
	}

	public BudgetItem() {
	}

	public String getId() {
		return id;
	}

	public String getBudgetID() {
		return budgetID;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getIssueID() {
		return issueID;
	}

	public void setIssueID(String issueID) {
		this.issueID = issueID;
	}

	public void setBudgetID(String budgetID) {
		this.budgetID = budgetID;
	}

	public boolean isLeaf() {
		return (this.children != null && children.size() > 0) ? false : true;
	}

	public String getBudgetName() {
		return budgetName;
	}

	public float getInvestmentCenGov() {
		return investmentCenGov;
	}

	public float getInvestmentLocGov() {
		return investmentLocGov;
	}

	public float getInvestmentEnterprise() {
		return investmentEnterprise;
	}

	public float getInvestmentBank() {
		return investmentBank;
	}

	public float getInvestmentOther() {
		return investmentOther;
	}

	public float getInvestmentSum() {
		investmentSum = investmentCenGov + investmentLocGov + investmentEnterprise + investmentBank + investmentOther;
		return investmentSum;
	}

	public void setBudgetName(String budgetName) {
		this.budgetName = budgetName;
	}

	public void setInvestmentCenGov(float investmentCenGov) {
		this.investmentCenGov = investmentCenGov;
	}

	public void setInvestmentLocGov(float investmentLocGov) {
		this.investmentLocGov = investmentLocGov;
	}

	public void setInvestmentEnterprise(float investmentEnterprise) {
		this.investmentEnterprise = investmentEnterprise;
	}

	public void setInvestmentBank(float investmentBank) {
		this.investmentBank = investmentBank;
	}

	public void setInvestmentOther(float investmentOther) {
		this.investmentOther = investmentOther;
	}

	public List<BudgetItem> getChildren() {
		return (children != null && children.size() > 0) ? children : null;
	}

	public BudgetItem addChildren(BudgetItem child) {
		if (this.children == null) {
			this.children = new ArrayList<BudgetItem>();
		}
		this.children.add(child);
		return this;
	}

	public String getParentID() {
		return parentID;
	}

	public void setParentID(String parentID) {
		this.parentID = parentID;
	}

	public BudgetItem getNextChild() {
		if (this.getChildren() != null && nextSiblingIndex < this.getChildren().size()) {
			return this.getChildren().get(nextSiblingIndex++);
		} else {
			return null;
		}
	}

	@Override
	public String toString() {
		StringBuffer buf = new StringBuffer();
		buf.append("科目:" + budgetName + "-> 中央财政：" + this.investmentCenGov + " 地方财政：" + investmentLocGov + " 企业："
				+ investmentEnterprise + " 银行：" + investmentBank + " 总计： " + investmentSum);
		return buf.toString();
	}

	public String toJson() {
		StringBuffer buf = new StringBuffer();
		buf.append("{");
		buf.append("\"text\" :" + "\".\"" + ",");
		buf.append("\"children\" :" + "[");
		buf.append(JSONObject.fromObject(this).toString());
		buf.append("]");
		buf.append("}");
		return buf.toString();
	}
}
