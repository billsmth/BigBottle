package com.isoftstone.dao.opinion;

import java.util.List;

import com.isoftstone.model.opinion.IssueOpinion;

public interface IssueOpinionDao {

    public List<IssueOpinion> listAll(String id);
    
    public List<IssueOpinion> findZJOpinion(IssueOpinion io);
    
    public List<IssueOpinion> selectTempIssueOpinion(IssueOpinion io);
    
    public List<IssueOpinion> selectHistoryIssueOpinion(String id);
    
    public void delete(String id);
    
    public void update(IssueOpinion opinion);
    
    public void insert(IssueOpinion opinion);
    
    public List<IssueOpinion> findIssueOpinionForReplayByIssueId(String issueId);
    
    public IssueOpinion selectByPrimaryKey(String id);

	public IssueOpinion findIssueOpinionByIssueId(String issueId);
    
    public List<IssueOpinion> selectNewestIssueOpinion(IssueOpinion io);

}
