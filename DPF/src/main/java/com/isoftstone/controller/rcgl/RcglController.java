package com.isoftstone.controller.rcgl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/rcgl")
public class RcglController {
	
	@RequestMapping("/listall")
	@ResponseBody
	public List<?> findAll(){
		//TODO 返回人才管理的列表
		List<?> list = new ArrayList();
		return list;
	}
	
	@RequestMapping("/add")
    @ResponseBody
    public String add() {
	//TODO 添加人才
        System.out.println("Add Method");
        return "{'success':true}";
    }
	
	@RequestMapping("/update")
    @ResponseBody
    public String update() {
		//TODO 更新人才
        System.out.println("Update Method");
        return "{'success':true}";
    }
	
	 @RequestMapping("/del")
     @ResponseBody
	    public String del() {
		 	//TODO 删除人员
	        System.out.println("Del Method");
	        return "{'success':true}";
	    }
}
