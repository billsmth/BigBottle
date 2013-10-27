package com.isoftstone.service.ktxx;

import java.util.List;

import com.isoftstone.model.ktxx.Ktxx;

public interface KtxxService {

    public List<Ktxx> findAll(Ktxx ktxx);
    
    public List<Ktxx> getKtxx(String id);
    
    public void delete(String id);
    
    public void insert(Ktxx ktxx);
    
    public void update(Ktxx ktxx);
    
    public void scapprove(Ktxx ktxx);
}
