package com.hk.distribution.controller;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hk.distribution.model.Baobiao;
import com.hk.distribution.service.BaobiaoService;

@Controller
@RequestMapping("/baobiao")
public class BaobiaoController {

    @Autowired
    private BaobiaoService baobiaoService;

    @RequestMapping("/baobiaomgt")
    public ModelAndView listBaobiao() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("baobiao/baobiao");
        return mav;
    }
    
    @RequestMapping("/savebaobiao")
    @ResponseBody
    public String saveBaobiao(HttpServletRequest request, String editType, String baobiao_id) {
    	Baobiao baobiao=null;
    	if ("1".equals(editType)){
    		//have another?
    		
    		// this is a new baobiao
    		Baobiao IdBaobiao=baobiaoService.getMaxID();
//    		baobiao = new Baobiao(IdBaobiao.getBaobiao_id()+1);
    		baobiao.setZhuangtai("0");
    	} else if ("2".equals(editType)) {
    		baobiao = new Baobiao(Long.parseLong(request.getParameter("baobiao_id")));
    	}
        
//        baobiao.setBaobiaoname(request.getParameter("baobiaoname"));
//        baobiao.setBaobiaosex(request.getParameter("baobiaosex"));
        String age=request.getParameter("age");
        if(null==age || "".equals(age)){
        	age="0";
        }
        baobiao.setAge(Long.parseLong(age));
        baobiao.setBiecheng(request.getParameter("biecheng"));
        baobiao.setDianming(request.getParameter("dianming"));
        baobiao.setPhone1(request.getParameter("phone1"));
        baobiao.setPhone2(request.getParameter("phone2"));
        baobiao.setAddress1(request.getParameter("address1"));
        baobiao.setAddress2(request.getParameter("address2"));
        baobiao.setInfor1(request.getParameter("infor1"));
        baobiao.setInfor2(request.getParameter("infor2"));
        baobiao.setInfor3(request.getParameter("infor3"));
        baobiao.setInfor4(request.getParameter("infor4"));
        baobiao.setZuqun_id(request.getParameter("zuqun_id"));
        baobiao.setZhuangtai(request.getParameter("zhuangtai"));
        baobiao.setZhuceriqi(request.getParameter("zhuceriqi"));
        baobiao.setQq(request.getParameter("qq"));
        baobiao.setWeixin(request.getParameter("weixin"));
        baobiao.setTaobao(request.getParameter("taobao"));
        baobiao.setBeizhu(request.getParameter("beizhu"));

        
        if ("1".equals(editType)) {

            baobiaoService.saveBaobiao(baobiao);
        } else if ("2".equals(editType)) {

            baobiaoService.updateBaobiao(baobiao);
        }

        return "{'success':true}";
    }
    
    @RequestMapping("/delete")
    @ResponseBody
    public String deleteBaobiao(String address) {
        
        String[] rets = address.split(",");
        baobiaoService.deleteBaobiaoByKuanhao_id(Arrays.asList(rets));
        
        return "{'success':true}";
    }

    @RequestMapping("/json/list")
    @ResponseBody
    public List<Baobiao> getBaobiaoListByJson() {

        List<Baobiao> list = baobiaoService.getBaobiaoList();
        return list;
    }
}
