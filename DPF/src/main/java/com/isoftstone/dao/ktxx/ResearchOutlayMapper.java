package com.isoftstone.dao.ktxx;

import java.util.List;

import com.isoftstone.model.ktxx.ResearchOutlay;

public interface ResearchOutlayMapper {
    
    int insertSelective(ResearchOutlay record);
    
    int updateResearchOutlay(ResearchOutlay record);
    
    int deleteByPrimaryKey(String id);
    
    void deleteByKt(String issueId);
    
	List<ResearchOutlay> getListByIssueId(String issueId);
}