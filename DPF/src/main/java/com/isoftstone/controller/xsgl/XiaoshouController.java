package com.isoftstone.controller.xsgl;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.isoftstone.common.Tools;
import com.isoftstone.model.jxc.Kucun;
import com.isoftstone.model.jxc.PostAddress;
import com.isoftstone.model.jxc.Xiaoshou;
import com.isoftstone.service.jxc.KucunService;
import com.isoftstone.service.jxc.PostAddressService;
import com.isoftstone.service.jxc.XiaoshouService;

@Controller
@RequestMapping("/xiaoshou")
public class XiaoshouController {

    @Autowired
    private XiaoshouService xiaoshouService;
    @Autowired
    private KucunService kucunService;
    @Autowired
    private PostAddressService postAddressService;
    @RequestMapping("/xiaoshoumgt")
    public ModelAndView listXiaoshou() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("xiaoshou/xiaoshou");
        return mav;
    }
    
    @RequestMapping("/releasexiaoshoustatusmg")
    public ModelAndView listXiaoshouProducts() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("xiaoshou/releasexiaoshoustatusmg");
        return mav;
    }
    
    @RequestMapping("/productxiaoshouapprove")
    public ModelAndView listProductsMG() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("xiaoshou/productxiaoshouapprove");
        return mav;
    }

    @RequestMapping("/savexiaoshou")
    @ResponseBody
    public String saveXiaoshou(String editType,String xiaoshou_id, String kucun_id, String col1, String kuanhao_id, String yanse, String chima, String shuliang,String shoujia, String shijishoukuan, String maijia_id, String maijiaxingming, String zhuangtai, String delflg, String beizhu) {

    	Kucun kucun=new Kucun(Long.parseLong(kucun_id));
    	kucun=kucunService.getKucun(kucun);
    	if(kucun==null){
    		return  "{'error':1}";
    	}
    	
    	Xiaoshou xiaoshou = xiaoshouService.getMaxID();
    	if(xiaoshou==null){
    		xiaoshou=new Xiaoshou();
    		xiaoshou.setXiaoshou_id(0l);
    	}
    	if ("1".equals(editType)){
    		Long xiaoshouID=xiaoshou.getXiaoshou_id();
    		xiaoshouID=xiaoshouID/10000;
    		Long dateStr = Tools.getDataStr();
    		
	        if(dateStr>xiaoshouID){
	        	xiaoshou.setXiaoshou_id(Long.parseLong(""+dateStr+"0001"));
	        }else{
	        	xiaoshou.setXiaoshou_id(xiaoshou.getXiaoshou_id()+1);
	        }
	        xiaoshou.setZhuangtai("0");
	        xiaoshou.setDelflg("0");
    	} else if ("2".equals(editType)) {
    		xiaoshou.setXiaoshou_id(Long.parseLong(xiaoshou_id));
    		xiaoshou.setZhuangtai(zhuangtai);
    		xiaoshou.setDelflg(delflg);
    	}
    	xiaoshou.setKucun_id(Long.parseLong(kucun_id));
    	xiaoshou.setCol1(col1);
        xiaoshou.setKuanhao_id(kuanhao_id);
        xiaoshou.setYanse(yanse);
        xiaoshou.setChima(chima);
        xiaoshou.setShuliang(Integer.valueOf(shuliang));
        xiaoshou.setShoujia(Float.valueOf(shoujia));
        xiaoshou.setShijishoukuan(Float.valueOf(shijishoukuan));
        xiaoshou.setMaijia_id(maijia_id);
        xiaoshou.setMaijiaxingming(maijiaxingming);
        xiaoshou.setBeizhu(beizhu);
        
        if ("1".equals(editType)) {

            xiaoshouService.saveXiaoshou(xiaoshou);
        } else if ("2".equals(editType)) {

            xiaoshouService.updateXiaoshou(xiaoshou);
        }

        return "{'success':true}";
    }
    
    @RequestMapping("/delete")
    @ResponseBody
    public String deleteXiaoshou(String xiaoshouids) {
        
        String[] rets = xiaoshouids.split(",");
        xiaoshouService.deleteXiaoshouByID(Arrays.asList(rets));
        
        return "{'success':true}";
    }
    
    @RequestMapping("/json/list")
    @ResponseBody
    public List<Xiaoshou> getXiaoshouListByJson(HttpServletRequest request) {
    	Map<String, String> parmMap=new HashMap<String,String>();
    	
    	Tools.addParam(request, parmMap, "xiaoshou_id");
    	Tools.addParam(request, parmMap, "kucun_id");
    	Tools.addParam(request, parmMap, "kuanhao_id");
    	Tools.addParam(request, parmMap, "yanse");
    	Tools.addParam(request, parmMap, "chima");
    	Tools.addParam(request, parmMap, "maijia_id");
    	Tools.addParam(request, parmMap, "maijiaxingming");
    	Tools.addParam(request, parmMap, "zhuangtai");
    	Tools.addParam(request, parmMap, "beizhu");
    	Tools.addParam(request, parmMap, "delflg");

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
    	
        List<Xiaoshou> list = xiaoshouService.getXiaoshouList(parmMap);
        return list;
    }
    
    @RequestMapping(value="/getPostInfo",produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String getPostInfo(String xiaoshouId){
    	PostAddress pa=new PostAddress();
    	pa.setOrder_id(Long.parseLong(xiaoshouId));
    	pa=postAddressService.getPostAddress(pa);
    	JSONObject json=new JSONObject();
    	json.put("POST_INFO", pa);
    	return json.toString();
    }
    
    @RequestMapping("/changeXiaoshouStatus")
    @ResponseBody
    public String changeSaleStatus(HttpServletRequest request, HttpServletResponse response,String xiaoshou_id3, String zhuangtai3){
    	
    	Xiaoshou xs=new Xiaoshou();
    	xs.setXiaoshou_id(Long.parseLong(xiaoshou_id3));
    	xs=xiaoshouService.getXiaoshou(xs);
    	xs.setZhuangtai(zhuangtai3);
    	xs.setExpress_code(request.getParameter("express_code"));
    	xs.setExpress_name(request.getParameter("express_name"));
    	xiaoshouService.updateXiaoshou(xs);
        return "{'success':true}";
    }

    @RequestMapping("/ruku")
    @ResponseBody
    public String ruku(String xiaoshouids) {
        
        String[] rets = xiaoshouids.split(",");
        List<String> idList=Arrays.asList(rets);
        Xiaoshou xiaoshou;
        Kucun kucun;
        for(int i=0;i<idList.size();i++){
        	xiaoshou=new Xiaoshou(Long.parseLong(idList.get(i)));
        	xiaoshou=xiaoshouService.getXiaoshou(xiaoshou);
        	if(xiaoshou!=null){
        		kucun=new Kucun(xiaoshou);
        		kucun=kucunService.getKucun(kucun);
    			// count changed
        		int count=kucun.getShuliang()-xiaoshou.getShuliang();
        		if(count<0){
        			return "{'msg':'1'}";
        		}
    			kucun.setShuliang(count);
    			kucunService.updateKucun(kucun);
    			xiaoshouService.updateXiaoshouruku(xiaoshou);
        	}
       	}

        return "{'msg':'0'}";
    }
}
