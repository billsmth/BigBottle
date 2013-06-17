package com.hk.distribution.controller;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hk.distribution.model.Xiaoshou;
import com.hk.distribution.service.XiaoshouService;

@Controller
@RequestMapping("/xiaoshou")
public class XiaoshouController {

    @Autowired
    private XiaoshouService xiaoshouService;

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
    public String saveXiaoshou(String editType, String kuanhao_id, String yanse, String chima, String shuliang,String shoujia, String shijishoukuan, String maijia_id, String maijiaxingming, String beizhu) {

    	Xiaoshou xiaoshou = xiaoshouService.getMaxID();

    	Long xiaoshouID=xiaoshou.getXiaoshou_id();
    	xiaoshouID=xiaoshouID/10000;
    	Date currentTime = new Date();
    	SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");
    	Long dateStr = Long.parseLong(formatter.format(currentTime));
        if(dateStr>xiaoshouID){
        	xiaoshou.setXiaoshou_id(Long.parseLong(""+dateStr+"0001"));
        }else{
        	xiaoshou.setXiaoshou_id(xiaoshou.getXiaoshou_id()+1);
        }
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
    public String deleteXiaoshou(String address) {
        
        String[] rets = address.split(",");
        xiaoshouService.deleteXiaoshouByKuanhao_id(Arrays.asList(rets));
        
        return "{'success':true}";
    }

    @RequestMapping("/json/list")
    @ResponseBody
    public List<Xiaoshou> getXiaoshouListByJson() {

        List<Xiaoshou> list = xiaoshouService.getXiaoshouList();
        return list;
    }
}
