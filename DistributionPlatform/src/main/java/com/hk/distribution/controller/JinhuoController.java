package com.hk.distribution.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hk.distribution.common.tools.Tools;
import com.hk.distribution.model.Jinhuo;
import com.hk.distribution.model.Kucun;
import com.hk.distribution.model.Xiaoshou;
import com.hk.distribution.service.JinhuoService;
import com.hk.distribution.service.KucunService;

@Controller
@RequestMapping("/jinhuo")
public class JinhuoController {

    @Autowired
    private JinhuoService jinhuoService;
    @Autowired
    private KucunService kucunService;

    @RequestMapping("/jinhuomgt")
    public ModelAndView listJinhuo() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("jinhuo/jinhuo");
        return mav;
    }
    
    @RequestMapping("/releasejinhuostatusmg")
    public ModelAndView listJinhuoProducts() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("jinhuo/releasejinhuostatusmg");
        return mav;
    }
    
    @RequestMapping("/productjinhuoapprove")
    public ModelAndView listProductsMG() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("jinhuo/productjinhuoapprove");
        return mav;
    }

    @RequestMapping("/savejinhuo")
    @ResponseBody
    public String saveJinhuo(String editType, String jinhuo_id, String danhao_id, String jinhuoriqi, String kuanhao_id, String yanse, String chima, String shuliang, String jinjia, String chengbenjia, String shoujia, String zhuangtai, String delflg, String beizhu) {

    	Jinhuo jinhuo = jinhuoService.getMaxID();
    	
    	if(jinhuo==null){
    		jinhuo=new Jinhuo();
    		jinhuo.setJinhuo_id(0l);
    	}

    	if ("1".equals(editType)){
    		Long jinhuoID=jinhuo.getJinhuo_id();
        	jinhuoID=jinhuoID/10000;
        	
        	Long dateStr = Tools.getDataStr();
            if(dateStr>jinhuoID){
            	jinhuo.setJinhuo_id(Long.parseLong(""+dateStr+"0001"));
            }else{
            	jinhuo.setJinhuo_id(jinhuo.getJinhuo_id()+1);
            }
            jinhuo.setZhuangtai("0");
            jinhuo.setDelflg("false");
    	} else if ("2".equals(editType)) {
    		jinhuo.setJinhuo_id(Long.parseLong(jinhuo_id));
    		jinhuo.setZhuangtai(zhuangtai);
    		jinhuo.setDelflg(delflg);
    	}
        jinhuo.setDanhao_id(danhao_id);
        jinhuo.setJinhuoriqi(jinhuoriqi);
        jinhuo.setKuanhao_id(kuanhao_id);
        jinhuo.setYanse(yanse);
        jinhuo.setChima(chima);
        jinhuo.setShuliang(Integer.valueOf(shuliang));
        jinhuo.setJinjia(Float.valueOf(jinjia));
        jinhuo.setChengbenjia(Float.valueOf(chengbenjia));
        jinhuo.setShoujia(Float.valueOf(shoujia));
        
        jinhuo.setBeizhu(beizhu);
        
        if ("1".equals(editType)) {

            jinhuoService.saveJinhuo(jinhuo);
        } else if ("2".equals(editType)) {

            jinhuoService.updateJinhuo(jinhuo);
        }

        return "{'success':true}";
    }
    
    @RequestMapping("/delete")
    @ResponseBody
    public String deleteJinhuo(String jinhuoids) {
        
        String[] rets = jinhuoids.split(",");
        jinhuoService.deleteJinhuoByID(Arrays.asList(rets));
        return "{'success':true}";
    }
    
    @RequestMapping("/ruku")
    @ResponseBody
    public String ruku(String jinhuoids) {
        
        String[] rets = jinhuoids.split(",");
        List<String> idList=Arrays.asList(rets);
        Jinhuo jinhuo;
        Kucun kucunNew,kucunOld;
        float jinjia=0,chengben=0;
        for(int i=0;i<idList.size();i++){
        	jinhuo=new Jinhuo();
        	jinhuo.setJinhuo_id(Long.parseLong(idList.get(i)));
        	jinhuo=jinhuoService.getJinhuo(jinhuo);
        	if(jinhuo!=null){
        		kucunNew=new Kucun(jinhuo);
        		kucunOld=kucunService.getKucunbyKYC(kucunNew);
        		if(kucunOld==null){
        			kucunOld=kucunService.getMaxID();
        			
        			if(kucunOld==null){
        				kucunNew.setKucun_id(0l);
        	    	}else{
        	    		kucunNew.setKucun_id(kucunOld.getKucun_id());
        	    	}
        			kucunOld=kucunNew;
        			Long kucunID=kucunOld.getKucun_id();
        			kucunID=kucunID/10000;
            		Long dateStr = Tools.getDataStr();
            		
            		if(dateStr>kucunID){
            			kucunOld.setKucun_id(Long.parseLong(""+dateStr+"0001"));
        	        }else{
        	        	kucunOld.setKucun_id(kucunOld.getKucun_id()+1);
        	        }
        			kucunService.saveKucun(kucunOld);
        		}else{
        			// jinjia changed
        			jinjia=(kucunOld.getJinjia()*kucunOld.getShuliang()+kucunNew.getJinjia()*kucunNew.getShuliang())/(kucunNew.getShuliang()+kucunOld.getShuliang());
        			kucunOld.setJinjia(jinjia);
        			// chengben changed
        			chengben=(kucunOld.getChengbenjia()*kucunOld.getShuliang()+kucunNew.getChengbenjia()*kucunNew.getShuliang())/(kucunNew.getShuliang()+kucunOld.getShuliang());
        			// count changed
        			kucunOld.setShuliang(kucunNew.getShuliang()+kucunOld.getShuliang());
        			kucunOld.setChengbenjia(chengben);
        			kucunService.updateKucun(kucunOld);
        		}
        		jinhuoService.updateJinhuoruku(jinhuo);
        	}
        	
        }
        
        return "{'success':true}";
    }

    @RequestMapping("/json/list")
    @ResponseBody
    public List<Jinhuo> getJinhuoListByJson() {

        List<Jinhuo> list = jinhuoService.getJinhuoList();
        return list;
    }
}
