package com.hk.distribution.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hk.distribution.common.tools.Tools;
import com.hk.distribution.model.Kehu;
import com.hk.distribution.model.Test;
import com.hk.distribution.service.KehuService;


@Controller
@RequestMapping("/test")
public class TestController {

	@Autowired
    private KehuService kehuService;
    @RequestMapping("/testmgt")
    public ModelAndView listTest() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("test/test");
        return mav;
    }
    
    @RequestMapping("/savetest")
    @ResponseBody
    public String saveTest(HttpServletRequest request, String editType, String test_id) {

        return "{'success':true}";
    }
    
    @RequestMapping("/delete")
    @ResponseBody
    public String deleteTest(String address) {
        
        String[] rets = address.split(",");
        
        return "{'success':true}";
    }

    @RequestMapping("/json/list")
    @ResponseBody
    public List<Kehu> getKehuListByJson(HttpServletRequest request, String kehu_id, String kehuname, String biecheng) {
    	Kehu kehu=new Kehu();
    	try {
    		if(!Tools.isBlank(request.getParameter("kehuname"))){
    			kehu.setKehuname(new String(request.getParameter("kehuname").getBytes("ISO-8859-1"), "utf-8"));
    		}
    		if(!Tools.isBlank(request.getParameter("biecheng"))){
    			kehu.setBiecheng(new String(request.getParameter("biecheng").getBytes("ISO-8859-1"), "utf-8"));
    		}
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
    	kehu_id=request.getParameter("kehu_id");
    	if(!Tools.isBlank(kehu_id)){
    		kehu.setKehu_id(Long.parseLong(kehu_id));
    	}
    	
        List<Kehu> list = kehuService.getKehuList(kehu);
        return list;
    }
}
