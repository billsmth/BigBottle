package com.isoftstone.dao;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.meeting.Meeting;
import com.isoftstone.model.meeting.MeetingSummary;


public interface MeetingMapper {
    int deleteByPrimaryKey(Meeting record);

    int insert(Meeting record);

    int insertSelective(Meeting record);

    Meeting selectByPrimaryKey(String idmeeting);

    int updateByPrimaryKeySelective(Meeting record);

    int updateByPrimaryKeyWithBLOBs(Meeting record);

    int updateByPrimaryKey(Meeting record);
    
    List<Meeting> selectAll(Map<String,String> param);
    
    int updateMainContent(Meeting record);
    
    List<MeetingSummary> selectSummary(MeetingSummary record);
    
    int insertSummary(MeetingSummary record);
    
    int updateSummary(MeetingSummary record);
    
    int addrole(Map<String,String> param);
    
}