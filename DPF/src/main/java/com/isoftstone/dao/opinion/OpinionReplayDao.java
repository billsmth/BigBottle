package com.isoftstone.dao.opinion;

import java.util.List;

import com.isoftstone.model.opinion.OpinionReplay;

public interface OpinionReplayDao {

    public List<OpinionReplay> listAll(String id);
    
    public List<OpinionReplay> selectTempOpinionReplay(OpinionReplay io);
    
    public List<OpinionReplay> selectHistoryOpinionReplay(String id);
    
    public void delete(String id);
    
    public void update(OpinionReplay opinion);
    
    public void insert(OpinionReplay opinion);
    
    public int insertSelective(OpinionReplay opinionReplay);

	public OpinionReplay findOpinionReplay(OpinionReplay opinionReplay);
	
	public int updateByPrimaryKeySelective(OpinionReplay opinionReplay);
}
