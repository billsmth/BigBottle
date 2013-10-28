package com.hk.distribution.controller;

import java.io.File;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.dom4j.Document;
import org.dom4j.io.SAXReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hk.distribution.common.tools.Tools;
import com.hk.distribution.model.Kehu;
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
    
    @RequestMapping("/testxml")
    public void testXml(HttpServletRequest request,HttpServletResponse response) {

        ModelAndView mav = new ModelAndView();
        SAXReader reader =new SAXReader();
        try{
        	Document   document = reader.read(new File("c://pom.xml")); 
        	Tools.outPrint(document,response);
        }catch(Exception e){
        	e.printStackTrace();
        }
//        mav.setViewName("test/test");
//        return mav;
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
    public List<Kehu> getKehuListByJson(HttpServletRequest request) {
    	Kehu kehu=new Kehu();
		if(!Tools.isBlank(request.getParameter("kehuname"))){
			kehu.setKehuname(Tools.getReqPram(request,"kehuname"));
		}
		if(!Tools.isBlank(request.getParameter("biecheng"))){
			kehu.setBiecheng(Tools.getReqPram(request,"biecheng"));
		}
    	String kehu_id=request.getParameter("kehu_id");
    	if(!Tools.isBlank(kehu_id)){
    		kehu.setKehu_id(Long.parseLong(kehu_id));
    	}
    	
        List<Kehu> list = kehuService.getKehuList(kehu);
        return list;
    }
}
