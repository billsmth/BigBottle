package com.isoftstone.controller.xsgl;

import java.util.ArrayList;
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

import com.isoftstone.common.PrintUtil;
import com.isoftstone.common.Tools;
import com.isoftstone.common.model.PrintItem;
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
    
    @RequestMapping("/saveExpress")
    @ResponseBody
    public String saveExpress(String editType3, HttpServletRequest request) {
    	
    	if(Tools.isBlank(editType3)){
    		return "{'error':1}";
    	}
    	
    	PostAddress pa;
    	
        
    	
    	// create Express Form
    	if(editType3.equals("1")){
    		
    		pa = postAddressService.getMaxID();
        	if(pa==null){
        		pa=new PostAddress();
        		pa.setPost_id(0l);
        	}
        	
    		Long postID=pa.getPost_id();
    		postID=postID/10000;
    		Long dateStr = Tools.getDataStr();
    		
	        if(dateStr>postID){
	        	pa.setPost_id(Long.parseLong(""+dateStr+"0001"));
	        }else{
	        	pa.setPost_id(pa.getPost_id()+1);
	        }
	        
	        pa.setOrder_id(Long.parseLong(request.getParameter("order_id")));
	        pa.setPeople_id(request.getParameter("people_id"));
	        pa.setType(request.getParameter("type"));
	        pa.setPost_from(request.getParameter("post_from"));
	        pa.setDeparture(request.getParameter("departure"));
	        pa.setCompany_name_from(request.getParameter("company_name_from"));
	        pa.setProvince_from(request.getParameter("province_from"));
	        pa.setCity_from(request.getParameter("city_from"));
	        pa.setDistrict_from(request.getParameter("district_from"));
	        pa.setDetail_from(request.getParameter("detail_from"));
	        pa.setContact_number_from(request.getParameter("contact_number_from"));
	        pa.setNeijian(request.getParameter("neijian"));
	        
	        pa.setPost_to(request.getParameter("post_to"));
	        pa.setDestination(request.getParameter("destination"));
	        pa.setCompany_name(request.getParameter("company_name"));
	        pa.setProvince(request.getParameter("province"));
	        pa.setCity(request.getParameter("city"));
	        pa.setDistrict(request.getParameter("district"));
	        pa.setDetail_to(request.getParameter("detail_to"));
	        pa.setContact_number(request.getParameter("contact_number"));
	        pa.setNote(request.getParameter("note"));
	        
	        postAddressService.savePostAddress(pa);
	        
    	// update Express Form
    	}else if(editType3.equals("2")){
    		pa=new PostAddress();
    		pa.setPost_id(Long.parseLong(request.getParameter("post_id")));
    		pa=postAddressService.getPostAddress(pa);
    		
	        pa.setType(request.getParameter("type"));
	        pa.setPost_from(request.getParameter("post_from"));
	        pa.setDeparture(request.getParameter("departure"));
	        pa.setCompany_name_from(request.getParameter("company_name_from"));
	        pa.setProvince_from(request.getParameter("province_from"));
	        pa.setCity_from(request.getParameter("city_from"));
	        pa.setDistrict_from(request.getParameter("district_from"));
	        pa.setDetail_from(request.getParameter("detail_from"));
	        pa.setContact_number_from(request.getParameter("contact_number_from"));
	        pa.setNeijian(request.getParameter("neijian"));
	        
	        pa.setPost_to(request.getParameter("post_to"));
	        pa.setDestination(request.getParameter("destination"));
	        pa.setCompany_name(request.getParameter("company_name"));
	        pa.setProvince(request.getParameter("province"));
	        pa.setCity(request.getParameter("city"));
	        pa.setDistrict(request.getParameter("district"));
	        pa.setDetail_to(request.getParameter("detail_to"));
	        pa.setContact_number(request.getParameter("contact_number"));
	        pa.setNote(request.getParameter("note"));
    		
    		postAddressService.updatePostAddress(pa);
    	}else{
    		return "{'error':1}";
    	}
    	
    	return "{'success':true}";
    }

    @RequestMapping("/savexiaoshou")
    @ResponseBody
    public String saveXiaoshou(String editType,String xiaoshou_id, String kucun_id, String product_id, String col1, String col2, String kuanhao_id, String yanse, String chima, String shuliang,String shoujia, String shijishoukuan, String maijia_id, String maijiaxingming, String zhuangtai, String delflg, String post_type, String beizhu) {

    	if(!Tools.isBlank(kucun_id)){
    		Kucun kucun=new Kucun(Long.parseLong(kucun_id));
    		kucun=kucunService.getKucun(kucun);
    		if(kucun==null){
    			return  "{'error':1}";
    		}
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
    	
    	if(!Tools.isBlank(kucun_id)){
    		xiaoshou.setKucun_id(Long.parseLong(kucun_id));
    	}
    	xiaoshou.setCol1(col1);
    	xiaoshou.setCol2(col2);
        xiaoshou.setKuanhao_id(kuanhao_id);
        xiaoshou.setProduct_id(Long.parseLong(product_id));
        xiaoshou.setYanse(yanse);
        xiaoshou.setChima(chima);
        xiaoshou.setShuliang(Integer.valueOf(shuliang));
        xiaoshou.setShoujia(Float.valueOf(shoujia));
        xiaoshou.setShijishoukuan(Float.valueOf(shijishoukuan));
        xiaoshou.setMaijia_id(maijia_id);
        xiaoshou.setPost_type(post_type);
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
    
    @RequestMapping("/pntExpressForm")
    @ResponseBody
    public String pntExpressForm(HttpServletRequest request, HttpServletResponse response,String xiaoshouID){
    	
    	Xiaoshou xs=new Xiaoshou();
    	xs.setXiaoshou_id(Long.parseLong(xiaoshouID));
    	xs=xiaoshouService.getXiaoshou(xs);
    	
    	PostAddress pa=new PostAddress();
    	pa.setOrder_id(Long.parseLong(xiaoshouID));
    	pa=postAddressService.getPostAddress(pa);
    	
	    boolean flg=PrintUtil.printForm(formatExpress(pa), 16);
    	
        return "{'success':"+flg+"}";
    }
    private List<PrintItem> formatExpress(PostAddress pa){
    	List<PrintItem> piList=new ArrayList<PrintItem>();
    	// from
    	PrintItem pi=new PrintItem();
    	pi.setDisX(99.15f);
	    pi.setDisY(96.32f);
    	pi.setItemValue(pa.getPost_from());
    	piList.add(pi);
    	// departure
    	pi=new PrintItem();
    	pi.setDisX(212.48f);
	    pi.setDisY(96.32f);
    	pi.setItemValue(pa.getDeparture());
    	piList.add(pi);
    	// company
    	pi=new PrintItem();
    	pi.setDisX(102f);
	    pi.setDisY(118.99f);
    	pi.setItemValue(pa.getCompany_name_from());
    	piList.add(pi);
    	// province
    	pi=new PrintItem();
    	pi.setDisX(87.82f);
	    pi.setDisY(147.32f);
    	pi.setItemValue(pa.getProvince_from());
    	piList.add(pi);
    	// city
    	pi=new PrintItem();
    	pi.setDisX(152.98f);
	    pi.setDisY(147.32f);
    	pi.setItemValue(pa.getCity_from());
    	piList.add(pi);
    	// district
    	pi=new PrintItem();
    	pi.setDisX(218.14f);
	    pi.setDisY(147.32f);
    	pi.setItemValue(pa.getDistrict_from());
    	piList.add(pi);
    	// detail
    	pi=new PrintItem();
    	pi.setDisX(70.83f);
	    pi.setDisY(172.81f);
    	pi.setItemValue(pa.getDetail_from());
    	piList.add(pi);
    	// contact
    	pi=new PrintItem();
    	pi.setDisX(127.49f);
	    pi.setDisY(198.31f);
    	pi.setItemValue(pa.getContact_number_from());
    	piList.add(pi);
    	// neijian
    	pi=new PrintItem();
    	pi.setDisX(113.32f);
	    pi.setDisY(215.31f);
    	pi.setItemValue(pa.getNeijian());
    	piList.add(pi);
    	
    	// -----------------------------------------

	    // to
    	pi=new PrintItem();
	    pi.setDisX(371.12f);
	    pi.setDisY(96.32f);
	    pi.setItemValue(pa.getPost_to());
	    piList.add(pi);

	    // destination
	    pi=new PrintItem();
	    pi.setDisX(498.61f);
	    pi.setDisY(96.32f);
	    pi.setItemValue(pa.getDestination());
	    piList.add(pi);	    

	    // company
	    pi=new PrintItem();
	    pi.setDisX(379.62f);
	    pi.setDisY(118.99f);
	    pi.setItemValue(pa.getCompany_name());
	    piList.add(pi);
	    
	    // province
	    pi=new PrintItem();
	    pi.setDisX(362.62f);
	    pi.setDisY(147.32f);
	    pi.setItemValue(pa.getProvince());
	    piList.add(pi);

	    // city
	    pi=new PrintItem();
	    pi.setDisX(433.45f);
	    pi.setDisY(147.32f);
	    pi.setItemValue(pa.getCity());
	    piList.add(pi);

	    // district
	    pi=new PrintItem();
	    pi.setDisX(498.61f);
	    pi.setDisY(147.32f);
	    pi.setItemValue(pa.getDistrict());
	    piList.add(pi);

	    // detail
	    pi=new PrintItem();
	    pi.setDisX(339.96f);
	    pi.setDisY(172.81f);
	    pi.setItemValue(pa.getDetail_to());
	    piList.add(pi);

	    // contact
	    pi=new PrintItem();
	    pi.setDisX(405.12f);
	    pi.setDisY(198.31f);
	    pi.setItemValue(pa.getContact_number());
	    piList.add(pi);
	    
	    return piList;
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
