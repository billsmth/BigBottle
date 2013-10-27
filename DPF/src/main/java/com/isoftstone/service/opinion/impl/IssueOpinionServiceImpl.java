package com.isoftstone.service.opinion.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.opinion.IssueOpinionDao;
import com.isoftstone.model.opinion.IssueOpinion;
import com.isoftstone.service.opinion.IssueOpinionService;

@Transactional
@Service
public class IssueOpinionServiceImpl implements IssueOpinionService{

    @Autowired
    private IssueOpinionDao dao;

    public IssueOpinionDao getDao() {
        return dao;
    }

    public void setDao(IssueOpinionDao dao) {
        this.dao = dao;
    }

    @Override
    public List<IssueOpinion> findAll(String issueId){
        return dao.listAll(issueId);
    }
    
    @Override
    public List<IssueOpinion> findZJOpinionHistory(String issueId, String peopleId){
    	IssueOpinion io=new IssueOpinion();
    	io.setIssueId(issueId);
    	io.setPeopleId(peopleId);
        return dao.findZJOpinion(io);
    }

    @Override
    public List<IssueOpinion> selectTempIssueOpinion(IssueOpinion io){
    	return dao.selectTempIssueOpinion(io);
    }
    
    @Override
    public List<IssueOpinion> selectHistoryIssueOpinion(String id){
    	return dao.selectHistoryIssueOpinion(id);
    }
    
    @Override
    public void delete(String id) {
        dao.delete(id);
    }

    @Override
    public void insert(IssueOpinion opinion) {
        dao.insert(opinion);
    }

    @Override
    public void update(IssueOpinion opinion) {
        dao.update(opinion);
    }
    
    @Override
    public List<IssueOpinion> selectNewestIssueOpinion(IssueOpinion io){
    	return dao.selectNewestIssueOpinion(io);
    }

	@Override
	public List<IssueOpinion> findIssueOpinionForReplayByIssueId(String issueId)throws Exception {
		return dao.findIssueOpinionForReplayByIssueId(issueId);
	}

	@Override
	public IssueOpinion findIssueOpinionById(String id) throws Exception{
		return dao.selectByPrimaryKey(id);
	}
}
