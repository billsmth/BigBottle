package com.isoftstone.service.people.impl;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.PeopleMapper;
import com.isoftstone.model.people.People;
import com.isoftstone.service.people.PeopleService;


@Transactional
@Service
public class PeopleServiceImpl implements PeopleService {
	
	private PeopleMapper peopleMapper;

	@Autowired
	public void setPeopleMapper(PeopleMapper peopleMapper) {
		this.peopleMapper = peopleMapper;
	}

	@Override
	public List<People> findAll(People people) throws Exception{
		return this.peopleMapper.getAllPeople(people);
	}
	@Override
	public List<People> findMixed(People people) throws Exception{
		return this.peopleMapper.getMixedPeople(people);
	}
	

	@Override
	public void savePeople(People people) throws Exception {
		people.setIdpeople(UUID.randomUUID()+"");
		people.setCreateDate(new Timestamp(new Date().getTime()));
		people.setModifyDate(new Timestamp(new Date().getTime()));
		people.setCreateUser(1);
		people.setSoftDel("1");
		if(people.getBirthdayStr()!=null&&!"".equals(people.getBirthdayStr())){
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			people.setBirthday(sdf.parse(people.getBirthdayStr()));
		}
		
		this.peopleMapper.insertSelective(people);
	}

	@Override
	public void updatePeople(People people) throws Exception {
		People orderPeople=this.peopleMapper.selectByPrimaryKey(people.getIdpeople());
		people.setModifyDate(new Timestamp(new Date().getTime()));
		people.setModifyUser(2);
		people.setCreateUser(orderPeople.getCreateUser());
		people.setCreateDate(orderPeople.getCreateDate());
		this.peopleMapper.updateByPrimaryKeySelective(people);
	}

	@Override
	public void deletePeople(String idpeople)throws Exception {
		/*People people=this.peopleMapper.selectByPrimaryKey(idpeople);
		people.setSoftDel("0");
		this.peopleMapper.updateByPrimaryKeySelective(people);*/
		this.peopleMapper.deleteByPrimaryKey(idpeople);
	}

	@Override
	public People findPeopleById(String idpeople) throws Exception {
		return this.peopleMapper.selectByPrimaryKey(idpeople);
	}

}
