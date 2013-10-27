package com.isoftstone.service.ktxx.impl;

import java.util.List;
import java.util.Map;
import java.util.Stack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.ktxx.KtsbIssueLinkPublicDao;
import com.isoftstone.dao.ktxx.KtxxBudgetDao;
import com.isoftstone.model.ktxx.BudgetItem;
import com.isoftstone.service.ktxx.KtxxBudgetService;

@Transactional
@Service
public class KtxxBudgetServiceImpl implements KtxxBudgetService {

	@Autowired
	private KtxxBudgetDao dao;
	@Autowired
	private KtsbIssueLinkPublicDao linkPublicDao;
	
	private Stack<BudgetItem> stack = new Stack<BudgetItem>();

	@Override
	public List<BudgetItem> listAll(Map<String, String> paramMap) {
		return this.dao.listAll(paramMap);
	}

	@Override
	public void delete(String id) {
		this.dao.delete(id);
	}

	@Override
	public void insert(BudgetItem budget) {
		this.dao.insert(budget);
	}

	@Override
	public List<BudgetItem> selectBudgetByKT(String issueID) {

		List<BudgetItem> itemList = this.dao.selectBudgetByKT(issueID);
		this.buildTree(itemList, 0);
		this.iterateTree(itemList.get(0));
		return itemList;
	}

	private void buildTree(List<BudgetItem> items, int pointer) {
		BudgetItem root = items.get(pointer);
		for (int i = 1; i < items.size(); i++) {
			if (root.getBudgetID().equals(items.get(i).getParentID())) {
				root.addChildren(items.get(i));
			}
		}
		if (pointer < items.size() - 1) {
			buildTree(items, ++pointer);
		}
	}

	public void iterateTree(BudgetItem node) {
		BudgetItem currentNode = node;
		System.out.println(currentNode);
		while (true) {
			while (currentNode != null && !currentNode.isLeaf()) {
				stack.addElement(currentNode);
				currentNode = currentNode.getNextChild();
				if (currentNode == null) {
					if (!stack.isEmpty()) {
						stack.pop();
					}
					if (!stack.isEmpty()) {
						currentNode = stack.pop();
					}
				}
			}
			if (!stack.isEmpty()) {
				if (currentNode != null) {
					stack.addElement(currentNode);
					calculateSum(stack, 0);
					currentNode = stack.pop();
				}
			}
			if (currentNode == null) {
				break;
			}
		}

	}

	@Override
	public String selectKtxxBudgetByKt(String issueId) {
		return linkPublicDao.selectKtxxBudgetByKt(issueId);
	}

	private void calculateSum(Stack<BudgetItem> stack, int pointer) {
		if (!stack.isEmpty() && pointer < stack.size()) {
			BudgetItem child = stack.pop();
			for (int i = 0; i < stack.size(); i++) {
				BudgetItem parent = stack.get(i);
				parent.setInvestmentCenGov(parent.getInvestmentCenGov() + child.getInvestmentCenGov());
				parent.setInvestmentLocGov(parent.getInvestmentLocGov() + child.getInvestmentLocGov());
				parent.setInvestmentEnterprise(parent.getInvestmentEnterprise() + child.getInvestmentEnterprise());
				parent.setInvestmentBank(parent.getInvestmentBank() + child.getInvestmentBank());
				parent.setInvestmentOther(parent.getInvestmentOther() + child.getInvestmentOther());
			}
		}
	}
}
