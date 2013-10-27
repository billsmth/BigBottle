package com.isoftstone.service.city;

import java.util.List;

import com.isoftstone.model.city.City;



public interface CityService {

	 List<City> findCity(Integer id) throws Exception;
	
}
