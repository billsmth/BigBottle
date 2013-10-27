package com.isoftstone.dao;

import java.util.List;

import com.isoftstone.model.people.People;

public interface PeopleMapper {
	
    int deleteByPrimaryKey(String idpeople);

    int insertSelective(People people);

    People selectByPrimaryKey(String people);

    int updateByPrimaryKeySelective(People people);
    
    List<People> getAllPeople(People people);
    List<People> getMixedPeople(People people);

	List<People> findPeopleForDirectorById(String issueId);

	List<People> findPeopleForTechmemberById(String issueId);

	List<People> findPeopleForPeopleLinkById(String issueId);
}