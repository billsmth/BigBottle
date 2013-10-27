package com.isoftstone.dao.ktxx;

import com.isoftstone.model.ktxx.IssueMeetingLink;

public interface IssueMeetingLinkDao {

	
	/**
	 * 保存课题和会议的关联关系
	 * @param issueMeetingLink
	 */
	public void insert(IssueMeetingLink issueMeetingLink);
}
