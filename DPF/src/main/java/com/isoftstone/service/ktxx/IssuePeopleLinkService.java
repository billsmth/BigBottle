package com.isoftstone.service.ktxx;

import java.util.List;

import com.isoftstone.model.ktxx.IssuePeopleLink;

public interface IssuePeopleLinkService {
	
	/**
	 * 根据课题主键获取课题和人员信息
	 * @param issueId
	 * @return
	 */
	public List<IssuePeopleLink> findAllByIssueId(String issueId);
	/**
	 * 根据人员主键获取课题和人员信息
	 * @param peopleId
	 * @return
	 */
	public List<IssuePeopleLink> findAllByPeopleId(String peopleId);
	/**
	 * 删除课题和人员的关联关系
	 * @param issueId 
	 * @param peopleId
	 */
	public void deleteByPeopleId(String issueId,String peopleId);
	/**
	 * 保存课题和人员的关联关系
	 * @param issuePeopleLink
	 */
	public void insert(IssuePeopleLink issuePeopleLink);
}
