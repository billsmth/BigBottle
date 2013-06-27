package com.hk.distribution.controller;

import java.text.ParseException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hk.distribution.common.tools.Tools;
import com.hk.distribution.model.Kehu;
import com.hk.distribution.service.KehuService;

@Controller
@RequestMapping("/kehu")
public class KehuController {

    @Autowired
    private KehuService kehuService;

    @RequestMapping("/kehumgt")
    public ModelAndView listKehu() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("kehu/kehu");
        return mav;
    }
    
    @RequestMapping("/savekehu")
    @ResponseBody
    public String saveKehu(HttpServletRequest request, String editType, String kehu_id) {
    	Kehu kehu=null;
    	if ("1".equals(editType)){
    		//have another?
    		
    		// this is a new kehu
    		Kehu IdKehu=kehuService.getMaxID();
    		kehu = new Kehu(IdKehu.getKehu_id()+1);
    		kehu.setZhuangtai("0");
    	} else if ("2".equals(editType)) {
    		kehu = new Kehu(Long.parseLong(request.getParameter("kehu_id")));
    	}
        
        kehu.setKehuname(request.getParameter("kehuname"));
        kehu.setKehusex(request.getParameter("kehusex"));
        String age=request.getParameter("age");
        if(null==age || "".equals(age)){
        	age="0";
        }
        kehu.setAge(Long.parseLong(age));
        kehu.setBiecheng(request.getParameter("biecheng"));
        kehu.setDianming(request.getParameter("dianming"));
        kehu.setPhone1(request.getParameter("phone1"));
        kehu.setPhone2(request.getParameter("phone2"));
        kehu.setAddress1(request.getParameter("address1"));
        kehu.setAddress2(request.getParameter("address2"));
        String level=request.getParameter("level");
        if(Tools.isBlank(level)){
        	level="1";
        }
        kehu.setLevel(Integer.parseInt(level));
        kehu.setInfor1(request.getParameter("infor1"));
        kehu.setInfor2(request.getParameter("infor2"));
        kehu.setInfor3(request.getParameter("infor3"));
        kehu.setInfor4(request.getParameter("infor4"));
        String zuqun_id=request.getParameter("zuqun_id");
        if(Tools.isBlank(zuqun_id)){
        	zuqun_id="0";
        }
        kehu.setZuqun_id(Integer.parseInt(zuqun_id));
        kehu.setZhuangtai(request.getParameter("zhuangtai"));
        
        kehu.setQq(request.getParameter("qq"));
        kehu.setWeixin(request.getParameter("weixin"));
        kehu.setTaobao(request.getParameter("taobao"));
        kehu.setBeizhu(request.getParameter("beizhu"));
        
        if ("1".equals(editType)) {
        	kehu.setZhuceriqi(Tools.getData());
            kehuService.saveKehu(kehu);
        } else if ("2".equals(editType)) {
        	kehu.setZhuceriqi(request.getParameter("zhuceriqi"));
            kehuService.updateKehu(kehu);
        }

        return "{'success':true}";
    }
    
    @RequestMapping("/delete")
    @ResponseBody
    public String deleteKehu(String address) {
        
        String[] rets = address.split(",");
        kehuService.deleteKehuByKuanhao_id(Arrays.asList(rets));
        
        return "{'success':true}";
    }

    @RequestMapping("/json/list")
    @ResponseBody
    public List<Kehu> getKehuListByJson() {

        List<Kehu> list = kehuService.getKehuList();
        return list;
    }
    
    @RequestMapping("/json/search")
    @ResponseBody
    public List<Kehu> getKehuListByJson(String kehu_id) {
    	Kehu kehu=new Kehu();
    	kehu.setKehu_id(Long.parseLong(kehu_id));
        List<Kehu> list = kehuService.getKehuList(kehu);
        return list;
    }
}
