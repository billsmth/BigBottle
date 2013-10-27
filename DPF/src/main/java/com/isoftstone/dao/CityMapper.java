package com.isoftstone.dao;

import java.util.List;

import com.isoftstone.model.city.City;

public interface CityMapper {
   
    City selectByPrimaryKey(Integer id);
   
	List<City> findCity(Integer id);
	
	List<City> findAll();
}