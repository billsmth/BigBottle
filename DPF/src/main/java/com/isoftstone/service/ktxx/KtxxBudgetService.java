package com.isoftstone.service.ktxx;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.ktxx.BudgetItem;

public interface KtxxBudgetService {

	public List<BudgetItem> listAll(Map<String, String> paramMap);

	public void delete(String id);

	public void insert(BudgetItem budget);
	
	public List<BudgetItem> selectBudgetByKT(String issueID);
	
	public String selectKtxxBudgetByKt(String issueId);

}
