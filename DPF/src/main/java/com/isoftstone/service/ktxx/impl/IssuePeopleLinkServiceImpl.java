package com.isoftstone.service.ktxx.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.ktxx.IssuePeopleLinkDao;
import com.isoftstone.model.ktxx.IssuePeopleLink;
import com.isoftstone.service.ktxx.IssuePeopleLinkService;
@Transactional
@Service
public class IssuePeopleLinkServiceImpl implements IssuePeopleLinkService {
	
	@Autowired
	private IssuePeopleLinkDao dao;
	
	public IssuePeopleLinkDao getDao() {
		return dao;
	}

	public void setDao(IssuePeopleLinkDao dao) {
		this.dao = dao;
	}

	@Override
	public List<IssuePeopleLink> findAllByIssueId(String issueId) {
		return dao.findAllByIssueId(issueId);
	}

	@Override
	public List<IssuePeopleLink> findAllByPeopleId(String peopleId) {
		return dao.findAllByPeopleId(peopleId);
	}

	@Override
	public void deleteByPeopleId(String issueId, String peopleId) {
		dao.deleteByPeopleId(issueId, peopleId);
	}

	@Override
	public void insert(IssuePeopleLink issuePeopleLink) {
		dao.insert(issuePeopleLink);
	}

}
