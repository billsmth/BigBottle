package com.isoftstone.service.ktxx;

import java.util.List;

import com.isoftstone.model.ktxx.Ktsq;

public interface KtsqService {

    public List<Ktsq> findAll(Ktsq ktsq, String flag, String currOrgId, String peopleId, String roleId);
    
    public void delete(String id);
    
    public void insert(Ktsq ktsq, String initBudget);
    
    public void update(Ktsq ktsq);
}
