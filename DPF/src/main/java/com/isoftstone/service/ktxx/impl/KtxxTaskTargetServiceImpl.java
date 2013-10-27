package com.isoftstone.service.ktxx.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.ktxx.KtxxTaskTargetDao;
import com.isoftstone.model.ktxx.KtxxTaskTarget;
import com.isoftstone.service.ktxx.KtxxTaskTargetService;

@Transactional
@Service
public class KtxxTaskTargetServiceImpl implements KtxxTaskTargetService{

	@Autowired
	private KtxxTaskTargetDao dao;
	
	@Override
	public List<KtxxTaskTarget> listAll(Map<String, String> paramMap) {
		return dao.listAll(paramMap);
	}

	@Override
	public List<KtxxTaskTarget> selectByTaskTargetByKT(String issueId) {
		return dao.selectByTaskTargetByKT(issueId);
	}

	@Override
	public void delete(String id) {
		dao.delete(id);
	}

	@Override
	public void insert(KtxxTaskTarget ktxxTaskTarget) {
		dao.insert(ktxxTaskTarget);
	}

}
