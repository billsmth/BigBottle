package com.isoftstone.dao;

import com.isoftstone.model.meeting.MeetingPeopleLink;


public interface MeetingPeopleLinkMapper {
    int deleteByPrimaryKey(String idmpl);

    int insert(MeetingPeopleLink record);

    int insertSelective(MeetingPeopleLink record);

    MeetingPeopleLink selectByPrimaryKey(String idmpl);

    int updateByPrimaryKeySelective(MeetingPeopleLink record);

    int updateByPrimaryKey(MeetingPeopleLink record);
}