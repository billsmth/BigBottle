package com.isoftstone.service.people;

import java.util.List;

import com.isoftstone.model.people.People;

public interface PeopleService {

	List<People> findAll(People people) throws Exception;
	
	List<People> findMixed(People people) throws Exception;

	void savePeople(People people) throws Exception;

	void updatePeople(People people)throws Exception;

	void deletePeople(String idpeople) throws Exception;

	People findPeopleById(String idpeople)throws Exception;

}
