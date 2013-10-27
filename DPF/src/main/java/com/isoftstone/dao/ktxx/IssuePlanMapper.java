package com.isoftstone.dao.ktxx;

import java.util.List;
import com.isoftstone.model.ktxx.IssuePlan;

public interface IssuePlanMapper {
    int deleteByPrimaryKey(String id);

    int insert(IssuePlan record);

    IssuePlan selectByPrimaryKey(String id);

    int updateByPrimaryKey(IssuePlan record);
    
    void deleteByKT(String issueId);
    
    List<IssuePlan> findByIssueId(String issueId);

    int insertSelective(IssuePlan record);
    
    int updateByPrimaryKeySelective(IssuePlan record);
}