package com.isoftstone.dao.ktxx;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.ktxx.BudgetItem;

public interface KtxxBudgetDao {

    public List<BudgetItem> listAll(Map<String, String> paramMap);
    
    public void delete(String id);
    
//    public void update(Ktxx ktxx);
    
    public void insert(BudgetItem budget);
    
    public List<BudgetItem> selectBudgetByKT(String issueID);
    
//    public void scapprove(Ktxx ktxx);
}
