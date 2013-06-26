package com.hk.distribution.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hk.distribution.common.tools.Tools;
import com.hk.distribution.model.Kucun;
import com.hk.distribution.model.Xiaoshou;
import com.hk.distribution.service.KucunService;
import com.hk.distribution.service.XiaoshouService;

@Controller
@RequestMapping("/xiaoshou")
public class XiaoshouController {

    @Autowired
    private XiaoshouService xiaoshouService;
    @Autowired
    private KucunService kucunService;

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
    public String saveXiaoshou(String editType,String xiaoshou_id, String kucun_id, String kuanhao_id, String yanse, String chima, String shuliang,String shoujia, String shijishoukuan, String maijia_id, String maijiaxingming, String zhuangtai, String delflg, String beizhu) {

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
    public List<Xiaoshou> getXiaoshouListByJson() {

        List<Xiaoshou> list = xiaoshouService.getXiaoshouList();
        return list;
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
