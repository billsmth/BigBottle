package com.isoftstone.service.city.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.CityMapper;
import com.isoftstone.model.city.City;
import com.isoftstone.service.city.CityService;

@Transactional
@Service
public class CityServiceImpl implements CityService {
	
	private CityMapper cityMapper;
	
	
	@Autowired
	public void setCityMapper(CityMapper cityMapper) {
		this.cityMapper = cityMapper;
	}

	@Override
	public List<City> findCity(Integer id) throws Exception{
		return cityMapper.findCity(id);
	}

}
