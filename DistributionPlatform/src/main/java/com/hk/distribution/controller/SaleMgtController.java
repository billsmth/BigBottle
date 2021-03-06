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

import com.hk.distribution.common.tools.Tools;
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
    	
    	Tools.addParam(request, parmMap, "kehu_id");
    	Tools.addParam(request, parmMap, "kehuname");
    	Tools.addParam(request, parmMap, "kucun_id");
    	Tools.addParam(request, parmMap, "kuanhao_id");
    	Tools.addParam(request, parmMap, "yanse");
    	Tools.addParam(request, parmMap, "chima");
    	
    	String startdate=Tools.getReqPram(request, "startdate");
    	String enddate=Tools.getReqPram(request, "enddate");
    	if(!Tools.isBlank(startdate)){
    		startdate=startdate.replaceAll("-", Tools.COM_BLANK)+Tools.WEIHAO_0000;
    		parmMap.put("startdate", startdate);
    	}else{
    		parmMap.put("startdate", Tools.COM_NULL);
    	}
    	if(!Tools.isBlank(enddate)){
    		enddate=enddate.replaceAll("-", Tools.COM_BLANK)+Tools.WEIHAO_9999;
    		parmMap.put("enddate", enddate);
    	}else{
    		parmMap.put("enddate", Tools.COM_NULL);
    	}
    	
        List<SaleMgt> list = xiaoshouService.getSaleMgtList(parmMap);
        return list;
    }
}