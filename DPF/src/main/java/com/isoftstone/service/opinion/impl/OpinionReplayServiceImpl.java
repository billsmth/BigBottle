package com.isoftstone.service.opinion.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.opinion.OpinionReplayDao;
import com.isoftstone.model.opinion.OpinionReplay;
import com.isoftstone.service.opinion.OpinionReplayService;

@Transactional
@Service
public class OpinionReplayServiceImpl implements OpinionReplayService{

    @Autowired
    private OpinionReplayDao dao;

    public OpinionReplayDao getDao() {
        return dao;
    }

    public void setDao(OpinionReplayDao dao) {
        this.dao = dao;
    }

    @Override
    public List<OpinionReplay> findAll(String issueId){
        return dao.listAll(issueId);
    }
    
    @Override
    public List<OpinionReplay> selectTempOpinionReplay(OpinionReplay io){
    	return dao.selectTempOpinionReplay(io);
    }
    
    @Override
    public void delete(String id) {
        dao.delete(id);
    }

    @Override
    public void insert(OpinionReplay opinion) {
        dao.insert(opinion);
    }

    @Override
    public void update(OpinionReplay opinion) {
        dao.update(opinion);
    }
}
