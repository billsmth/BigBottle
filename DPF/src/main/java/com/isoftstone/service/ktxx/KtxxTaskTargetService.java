package com.isoftstone.service.ktxx;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.ktxx.KtxxTaskTarget;

public interface KtxxTaskTargetService {

	public List<KtxxTaskTarget> listAll(Map<String,String> paramMap);
	
	public List<KtxxTaskTarget> selectByTaskTargetByKT(String issueId);
	
	public void delete(String id);
	
	public void insert(KtxxTaskTarget ktxxTaskTarget);
}
