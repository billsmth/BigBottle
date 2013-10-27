package com.isoftstone.service.meeting.impl;

import java.net.URLDecoder;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.MeetingMapper;
import com.isoftstone.dao.MeetingPeopleLinkMapper;
import com.isoftstone.model.cddw.Cddw;
import com.isoftstone.model.meeting.Meeting;
import com.isoftstone.model.meeting.MeetingPeopleLink;
import com.isoftstone.model.meeting.MeetingSummary;
import com.isoftstone.model.people.People;
import com.isoftstone.service.meeting.MeetingService;

@Transactional
@Service
public class MeetingServiceImpl implements MeetingService{
	
	@Autowired
	private MeetingMapper meetingMapper;
	@Autowired
	private MeetingPeopleLinkMapper mplMapper;
	
	@Override
    public List<Meeting> findAll(Meeting mt) {
        
        Map<String, String> param = new HashMap<String ,String>();
        
        if(mt.getIdmeeting() != null && !"".equals(mt.getIdmeeting())) {
            param.put("idmeeting", mt.getIdmeeting());
        }
        if(mt.getTitle() != null && !"".equals(mt.getTitle())) {
            param.put("title", "%" + mt.getTitle() + "%");
        }
        if(mt.getAddress() != null && !"".equals(mt.getAddress())) {
            param.put("address", "%" + mt.getAddress() + "%");
        }
        if(mt.getContact()!= null && !"".equals(mt.getContact())) {
            param.put("contact", "%" + mt.getContact() + "%");
        }
        if(mt.getContactTel() != null && !"".equals(mt.getContactTel())) {
            param.put("contactTel", "%" + mt.getContactTel() + "%");
        }
        if(mt.getBeginTimeStr() != null && !"".equals(mt.getBeginTimeStr())) {
            param.put("beginTimeStr", mt.getBeginTimeStr());
        }
        if(mt.getEndTimeStr() != null && !"".equals(mt.getEndTimeStr())) {
            param.put("endTimeStr", mt.getEndTimeStr());
        }
        
        return meetingMapper.selectAll(param);
       
    }
	
	public void delMeeting(String idmeeting){
		Meeting mt = new Meeting();
		mt.setModifyUser("1");						//待改
		mt.setModifyDate(new Date());
		mt.setIdmeeting(idmeeting);
		meetingMapper.deleteByPrimaryKey(mt);
	}
	
	@Override
	public Meeting saveMeeting(Meeting meeting) {
		meeting.setIdmeeting(UUID.randomUUID()+"");
		meeting.setStatus("1");
		meeting.setCreateUser("1");					//待改
		meeting.setCreateDate(new Date());
		meeting.setModifyUser("1");					//待改
		meeting.setModifyDate(new Date());
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		try {
			meeting.setBeginTime(sdf.parse(meeting.getBeginTimeStr()+" "+meeting.getBeginTimeStr2()));
			meeting.setEndTime(sdf.parse(meeting.getEndTimeStr()+" "+meeting.getEndTimeStr2()));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		this.meetingMapper.insertSelective(meeting);
		
		String[] temp = meeting.getMainPeople().split(",");
		String[] temp2 = meeting.getMaybePeople().split(",");
		MeetingPeopleLink mpl;
		for(int i=0;i<temp.length;i++){
			mpl = new MeetingPeopleLink();
			mpl.setIdmpl(UUID.randomUUID().toString());
			mpl.setIdMeeting(meeting.getIdmeeting());
			mpl.setIdPeople(temp[i]);
			mpl.setOrMain("1");
			this.mplMapper.insert(mpl);
		}
		for(int j=0;j<temp2.length;j++){
			mpl = new MeetingPeopleLink();
			mpl.setIdmpl(UUID.randomUUID().toString());
			mpl.setIdMeeting(meeting.getIdmeeting());
			mpl.setIdPeople(temp2[j]);
			mpl.setOrMain("2");
			this.mplMapper.insert(mpl);
		}
		return meeting;
	}
	
	@Override
	public void updMeeting(Meeting meeting){
		meeting.setModifyUser("1");					//待改
		meeting.setModifyDate(new Date());
		this.meetingMapper.updateByPrimaryKeySelective(meeting);
		
		//开始更新会议人员关系
		Meeting tempMt = new Meeting();
		tempMt.setIdmeeting(meeting.getIdmeeting());
		tempMt=this.findAll(tempMt).get(0);
		List<MeetingPeopleLink> mainList = tempMt.getMainPeopleArr();
		List<MeetingPeopleLink> maybeList = tempMt.getMaybePeopleArr();
		String[] newMainArr = meeting.getMainPeople().split(",");
		String[] newMaybeArr = meeting.getMaybePeople().split(",");
		MeetingPeopleLink mpl;
		//添加新添必选参会人员
		for(int i=0;i<newMainArr.length;i++){
			int sum=0;
			for(int j=0;j<mainList.size();j++){
				if(newMainArr[i]==mainList.get(j).getIdPeople()){
					sum+=1;
					break;
				}
			}
			if(sum==0){
				mpl = new MeetingPeopleLink();
				mpl.setIdmpl(UUID.randomUUID().toString());
				mpl.setIdMeeting(meeting.getIdmeeting());
				mpl.setIdPeople(newMainArr[i]);
				mpl.setOrMain("1");
				this.mplMapper.insert(mpl);
			}
		}
		//添加新添可选参会人员
		for(int i=0;i<newMaybeArr.length;i++){
			int sum=0;
			for(int j=0;j<maybeList.size();j++){
				if(newMaybeArr[i]==maybeList.get(j).getIdPeople()){
					sum+=1;
					break;
				}
			}
			if(sum==0){
				mpl = new MeetingPeopleLink();
				mpl.setIdmpl(UUID.randomUUID().toString());
				mpl.setIdMeeting(meeting.getIdmeeting());
				mpl.setIdPeople(newMaybeArr[i]);
				mpl.setOrMain("2");
				this.mplMapper.insert(mpl);
			}
		}
		//删除去除的必选参会人员
		for(int i=0;i<mainList.size();i++){
			int sum=0;
			for(int j=0;j<newMainArr.length;j++){
				if(mainList.get(i).getIdPeople()==newMainArr[j]){
					sum+=1;
					break;
				}
			}
			if(sum==0){
				this.mplMapper.deleteByPrimaryKey(mainList.get(i).getIdmpl());
			}
		}
		//删除去除的可选参会人员
		for(int i=0;i<maybeList.size();i++){
			int sum=0;
			for(int j=0;j<newMaybeArr.length;j++){
				if(maybeList.get(i).getIdPeople()==newMaybeArr[j]){
					sum+=1;
					break;
				}
			}
			if(sum==0){
				this.mplMapper.deleteByPrimaryKey(maybeList.get(i).getIdmpl());
			}
		}
	}
	
	public void updMainContent(Meeting meeting){
		meeting.setModifyUser("1");					//待改
		meeting.setModifyDate(new Date());
		this.meetingMapper.updateMainContent(meeting);
	}
	
	public MeetingSummary findSummary(MeetingSummary ms){
		List<MeetingSummary> list = this.meetingMapper.selectSummary(ms);
		if(list.size()!=0){
			return list.get(0);
		}
		ms.setIdms(UUID.randomUUID()+"");
		ms.setCreateUser(ms.getIdPeople());
		ms.setSoftDel("1");
		ms.setModifyUser(ms.getIdPeople());
		ms.setModifyDate(new Date());
		this.meetingMapper.insertSummary(ms);
		return ms;
	}
	
	public void updSummary(MeetingSummary ms){
		ms.setModifyUser("1");					//待改
		ms.setModifyDate(new Date());
		this.meetingMapper.updateSummary(ms);
	}
	
	public void addrole(){
		Map<String, String> param = new HashMap<String ,String>();
		param.put("idstr", UUID.randomUUID().toString());
		param.put("name", "承担单位_科技处");
		param.put("ndesc", "承担单位_科技处");
		meetingMapper.addrole(param);
	}
	
	
	
	
	public MeetingMapper getMeetingMapper() {
		return meetingMapper;
	}
	public void setMeetingMapper(MeetingMapper meetingMapper) {
		this.meetingMapper = meetingMapper;
	}
	public MeetingPeopleLinkMapper getMplMapper() {
		return mplMapper;
	}
	public void setMplMapper(MeetingPeopleLinkMapper mplMapper) {
		this.mplMapper = mplMapper;
	}
	
}
