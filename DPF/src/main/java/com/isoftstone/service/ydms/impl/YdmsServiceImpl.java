package com.isoftstone.service.ydms.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.ydms.YdmsDao;
import com.isoftstone.model.ydms.Ydms;
import com.isoftstone.service.ydms.YdmsService;
@Transactional
@Service
public class YdmsServiceImpl implements YdmsService {
	
	@Autowired
	private YdmsDao ydmsDao;

	public YdmsDao getYdmsDao() {
		return ydmsDao;
	}
	public void setYdmsDao(YdmsDao ydmsDao) {
		this.ydmsDao = ydmsDao;
	}


	@Override
	public Ydms queryYdms(String ydms) {
		// TODO Auto-generated method stub
		return ydmsDao.queryYdms(ydms);
	}

}
