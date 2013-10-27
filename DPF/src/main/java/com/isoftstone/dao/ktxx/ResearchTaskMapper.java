package com.isoftstone.dao.ktxx;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.ktxx.ResearchTask;

public interface ResearchTaskMapper {
	
    int insert(ResearchTask record);

    void deleteByKT(String issueId);
    
    List<ResearchTask> selectAll(Map<String,String> param);

    int insertSelective(ResearchTask record);
    
    int updateByPrimaryKeySelective(ResearchTask record);
    
    int deleteByPrimaryKey(String id);
}