package com.isoftstone.service.ktxx;

import com.isoftstone.model.ktxx.IssueMeetingLink;

public interface IssueMeetingLinkService {
	/**
	 * 保存课题和会议的关联关系
	 * @param issueMeetingLink
	 */
	public void insert(IssueMeetingLink issueMeetingLink);
}
