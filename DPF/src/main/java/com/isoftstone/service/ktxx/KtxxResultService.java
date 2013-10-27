package com.isoftstone.service.ktxx;

import java.util.List;

import com.isoftstone.model.ktxx.KtxxResult;

/**
 * 课题预期成果Service
 * @author WM
 * 下午10:07:38
 */
public interface KtxxResultService {

	public List<KtxxResult> findAll(KtxxResult ktxxResult);
    
    public void delete(String id);
    
    public void deleteByKT(String issueId);
    
    public void insert(KtxxResult ktxxResult);
    
    public void update(KtxxResult ktxxResult);
}
