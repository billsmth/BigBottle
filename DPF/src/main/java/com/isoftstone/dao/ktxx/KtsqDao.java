package com.isoftstone.dao.ktxx;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.ktxx.Ktsq;

public interface KtsqDao {

    public List<Ktsq> listAll(Map<String, String> paramMap);
    
    public void delete(String id);
    
    public void update(Ktsq ktsq);
    
    public void insert(Ktsq ktsq);
}
