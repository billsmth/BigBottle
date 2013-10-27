package com.isoftstone.service.meeting;

import java.util.List;
import com.isoftstone.model.meeting.Meeting;
import com.isoftstone.model.meeting.MeetingSummary;

public interface MeetingService {
	
	public List<Meeting> findAll(Meeting mt);
	
	public void delMeeting(String idmeeting);
	
	public Meeting saveMeeting(Meeting meeting);

	public void updMeeting(Meeting meeting);
	
	public void updMainContent(Meeting meeting);
	
	public MeetingSummary findSummary(MeetingSummary ms);
	
	public void updSummary(MeetingSummary ms);
	
	public void addrole();
}
