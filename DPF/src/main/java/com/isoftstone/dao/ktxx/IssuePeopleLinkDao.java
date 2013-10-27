package com.isoftstone.dao.ktxx;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.isoftstone.model.ktxx.IssuePeopleLink;
/**
 * 课题与主要人员
 * @author WM
 * 下午1:32:11
 */
public interface IssuePeopleLinkDao {

	
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
	public void deleteByPeopleId(@Param(value = "issueId") String issueId,@Param(value = "peopleId") String peopleId);
	
	public void deleteByKt(String issueId);
	/**
	 * 保存课题和人员的关联关系
	 * @param issuePeopleLink
	 */
	public void insert(IssuePeopleLink issuePeopleLink);
}
