package com.isoftstone.dao.ktxx;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.ktxx.Ktxx;

public interface KtxxDao {

    public List<Ktxx> listAll(Map<String, String> paramMap);
    
    public void delete(String id);
    
    public void update(Ktxx ktxx);
    
    public void insert(Ktxx ktxx);
    
    public void scapprove(Ktxx ktxx);
    
    public List<Ktxx> getKtxx(String id);
    
}
