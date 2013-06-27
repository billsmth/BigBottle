package com.hk.distribution.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hk.distribution.model.SaleMgt;
import com.hk.distribution.service.XiaoshouService;


@Controller
@RequestMapping("/salemgt")
public class SaleMgtController {

	@Autowired
    private XiaoshouService xiaoshouService;
    @RequestMapping("/getsalemgt")
    public ModelAndView listTest() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("salemgt/salemgt");
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
    public List<SaleMgt> getSalemgtListByJson(HttpServletRequest request) {
    	Map<String, String> parmMap=new HashMap<String,String>();
//		if(!Tools.isBlank(request.getParameter("kehuname"))){
//			kehu.setKehuname(Tools.getReqPram(request,"kehuname"));
//		}
//		if(!Tools.isBlank(request.getParameter("biecheng"))){
//			kehu.setBiecheng(Tools.getReqPram(request,"biecheng"));
//		}
//    	String kehu_id=request.getParameter("kehu_id");
    	
        List<SaleMgt> list = xiaoshouService.getSaleMgtList(parmMap);
        return list;
    }
}