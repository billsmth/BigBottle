package com.isoftstone.service.ktxx.impl;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.ktxx.IssueMeetingLinkDao;
import com.isoftstone.model.ktxx.IssueMeetingLink;
import com.isoftstone.service.ktxx.IssueMeetingLinkService;
@Transactional
@Service
public class IssueMeetingLinkServiceImpl implements IssueMeetingLinkService {
	
	@Autowired
	private IssueMeetingLinkDao dao;
	
	public IssueMeetingLinkDao getDao() {
		return dao;
	}

	public void setDao(IssueMeetingLinkDao dao) {
		this.dao = dao;
	}

	@Override
	public void insert(IssueMeetingLink issueMeetingLink) {
		issueMeetingLink.setId(UUID.randomUUID().toString());
		dao.insert(issueMeetingLink);
	}
}
