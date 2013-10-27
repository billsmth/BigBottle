package com.isoftstone.controller.ydms;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.isoftstone.model.ydms.IssuePeople;
import com.isoftstone.model.ydms.Ydms;
import com.isoftstone.model.ydms.YdmsDw;
import com.isoftstone.model.ydms.YdmsPeople;
import com.isoftstone.model.ydms.Ywzb;

import com.isoftstone.service.ydms.YdmsService;

@Controller
@RequestMapping("/ydms")
public class YdmsController {

    @Autowired
    private YdmsService ydmsService;

    public YdmsService getYdmsService() {
		return ydmsService;
	}
	public void setYdmsService(YdmsService ydmsService) {
		this.ydmsService = ydmsService;
	}

	@RequestMapping("/listall")
    @ResponseBody
    public ModelAndView  findAll(HttpServletRequest request, HttpServletResponse response,String ids) {
		Ydms yd =null;
		//System.out.println("****************************************");
		//System.out.println(ids);
		try {
			
			//String ydms ="50a9cec8-c9cb-46ee-a90c-7dfd549a647d";
			yd = ydmsService.queryYdms(ids);
			
			//List<Ywzb> l=yd.getTask();
			List<IssuePeople> l = yd.getBasis();
			//List<YdmsDw> d=yd.getDwOrg();
			//System.out.println(l.size());
			
			request.setAttribute("yd",yd);
		   
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		//return new ModelAndView(new RedirectView("reading.jsp"));  
		//return new ModelAndView("redirect:reading.jsp"); 
		//return "reading";
		//return"redirect:reading";
		return new ModelAndView("reading"); 
	
    }


}
