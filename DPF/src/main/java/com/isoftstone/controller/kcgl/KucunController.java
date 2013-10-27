package com.isoftstone.controller.kcgl;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.isoftstone.common.Tools;
import com.isoftstone.model.jxc.Jinhuo;
import com.isoftstone.model.jxc.Kucun;
import com.isoftstone.service.jxc.KucunService;

@Controller
@RequestMapping("/kucun")
public class KucunController {

    @Autowired
    private KucunService kucunService;

    @RequestMapping("/kucunmgt")
    public ModelAndView listKucun() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("kucun/kucun");
        return mav;
    }
    
    @RequestMapping("/releasekucunstatusmg")
    public ModelAndView listKucunProducts() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("kucun/releasekucunstatusmg");
        return mav;
    }
    
    @RequestMapping("/productkucunapprove")
    public ModelAndView listProductsMG() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("kucun/productkucunapprove");
        return mav;
    }

    @RequestMapping("/savekucun")
    @ResponseBody
    public String saveKucun(String editType, String kucun_id, String kuanhao_id, String yanse, String chima, String shuliang, String jinjia, String chengbenjia, String shoujia, String beizhu) {

        Kucun kucun = new Kucun();
        
        kucun.setKuanhao_id(kuanhao_id);
        kucun.setYanse(yanse);
        kucun.setChima(chima);
        kucun.setShuliang(Integer.valueOf(shuliang));
        kucun.setJinjia(Float.valueOf(jinjia));
        kucun.setChengbenjia(Float.valueOf(chengbenjia));
        kucun.setShoujia(Float.valueOf(shoujia));
        kucun.setBeizhu(beizhu);
        
        if ("1".equals(editType)) {
        	Kucun kucunID = kucunService.getMaxID();
        	
        	if(kucunID==null){
        		kucunID=new Kucun();
        		kucunID.setKucun_id(0l);
        	}
        	Long KucunID=kucunID.getKucun_id();
        	KucunID=KucunID/10000;
        	
        	Long dateStr = Tools.getDataStr();
            if(dateStr>KucunID){
            	kucun.setKucun_id(Long.parseLong(""+dateStr+"0001"));
            }else{
            	kucun.setKucun_id(kucunID.getKucun_id()+1);
            }
        	
            kucunService.saveKucun(kucun);
        } else if ("2".equals(editType)) {
        	kucun.setKucun_id(Long.parseLong(kucun_id));
            kucunService.updateKucun(kucun);
        }

        return "{'success':true}";
    }
    
    @RequestMapping("/delete")
    @ResponseBody
    public String deleteKucun(String address) {
        
        String[] rets = address.split(",");
        kucunService.deleteKucunByKuanhao_id(Arrays.asList(rets));
        
        return "{'success':true}";
    }

    @RequestMapping("/json/list")
    @ResponseBody
    public List<Kucun> getKucunListByJson() {

        List<Kucun> list = kucunService.getKucunList();
        return list;
    }
}
