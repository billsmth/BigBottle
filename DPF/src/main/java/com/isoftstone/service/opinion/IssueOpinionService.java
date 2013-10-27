package com.isoftstone.service.opinion;

import java.util.List;

import com.isoftstone.model.opinion.IssueOpinion;

public interface IssueOpinionService {

    public List<IssueOpinion> findAll(String id);

    public List<IssueOpinion> findZJOpinionHistory(String issueId, String peopleId);
    
    public List<IssueOpinion> selectTempIssueOpinion(IssueOpinion io);
    
    public List<IssueOpinion> selectHistoryIssueOpinion(String id);
    
    public void delete(String id);
    
    public void insert(IssueOpinion opinion);
    
    public void update(IssueOpinion opinion);
    
    public List<IssueOpinion> selectNewestIssueOpinion(IssueOpinion io);

    /**
     * 查询专家回复信息列表
     * 回复专家信息
     * @param issueId
     * @return
     * @throws Exception
     */
	public List<IssueOpinion> findIssueOpinionForReplayByIssueId(String issueId) throws Exception;

	public IssueOpinion findIssueOpinionById(String id) throws Exception;
    
}

