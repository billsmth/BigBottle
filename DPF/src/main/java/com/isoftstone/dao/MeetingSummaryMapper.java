package com.isoftstone.dao;

import com.isoftstone.model.meeting.MeetingSummary;


public interface MeetingSummaryMapper {
    int deleteByPrimaryKey(String idms);

    int insert(MeetingSummary record);

    int insertSelective(MeetingSummary record);

    MeetingSummary selectByPrimaryKey(String idms);

    int updateByPrimaryKeySelective(MeetingSummary record);

    int updateByPrimaryKeyWithBLOBs(MeetingSummary record);

    int updateByPrimaryKey(MeetingSummary record);
}