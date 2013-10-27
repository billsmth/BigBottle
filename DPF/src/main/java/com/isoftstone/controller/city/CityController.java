package com.isoftstone.controller.city;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.isoftstone.model.city.City;
import com.isoftstone.service.city.CityService;

@Controller
@RequestMapping("/city")
public class CityController {
	
	private CityService service;

	@Autowired
	public void setService(CityService service) {
		this.service = service;
	}
	
	@RequestMapping("/find")
    @ResponseBody
    public List<City> findCity(Integer id) {
        List<City> list=null;
		try {
			System.out.println("id:-->"+id);
			list = service.findCity(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return list;
    }
	
	
	
	

}
