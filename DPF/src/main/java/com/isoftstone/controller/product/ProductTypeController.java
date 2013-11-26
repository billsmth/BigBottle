package com.isoftstone.controller.product;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.isoftstone.common.Tools;
import com.isoftstone.model.city.City;
import com.isoftstone.model.jxc.Product;
import com.isoftstone.model.jxc.ProductType;
import com.isoftstone.service.jxc.ProductTypeService;

@Controller
@RequestMapping("/productType")
public class ProductTypeController {
	
    @Autowired
    private ProductTypeService productTypeService;
    
	@RequestMapping("/listall")
    @ResponseBody
    public List<ProductType> findAll() {
        List<ProductType> list=null;
		try {
			list = productTypeService.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
        return list;
    }
	
	@RequestMapping("/saveproductType")
    @ResponseBody
    public String saveProductType(String editType, HttpServletRequest request) {
		
		ProductType tmpPT= new ProductType();
		
		if ("1".equals(editType)) {
        	ProductType ptID = productTypeService.getMaxID();
        	
        	if(ptID==null){
        		ptID=new ProductType();
        		ptID.setType_id(99999l);
        	}
        	Long pt_ID=ptID.getType_id();
        	tmpPT.setType_id(pt_ID+1);
            
        	tmpPT.setType_name(request.getParameter("type_name"));
        	tmpPT.setType_key("0");
        	tmpPT.setType_status(request.getParameter("type_status"));
        	tmpPT.setNote(request.getParameter("note"));
        	String parent_id=request.getParameter("parent_id");
        	if(!Tools.isBlank(parent_id)){
        		tmpPT.setParent_id(request.getParameter("parent_id"));
        	}else{
        		tmpPT.setParent_id("0");
        	}
        	
            productTypeService.saveProductType(tmpPT);
        } else if ("2".equals(editType)) {
        	tmpPT.setType_id(Long.parseLong(request.getParameter("type_id")));
        	tmpPT=productTypeService.findProductType(tmpPT);
        	tmpPT.setType_name(request.getParameter("type_name"));
        	tmpPT.setType_key(request.getParameter("type_key"));
        	tmpPT.setType_status(request.getParameter("type_status"));
        	tmpPT.setNote(request.getParameter("note"));
        	tmpPT.setParent_id(request.getParameter("parent_id"));
        	
        	productTypeService.updateProductType(tmpPT);
        }
		
		return "{'success':true}";
	}
	
    @RequestMapping("/delProductType")
    @ResponseBody
    public String delProductType(String typeID) {
    	
    	ProductType pt=new ProductType();
    	pt.setType_id(Long.parseLong(typeID));
    	productTypeService.deleteProductTypeByID(pt);
    	
        return "{'success':true}";
    }
    
	@RequestMapping("/typeList")
    @ResponseBody
    public List<ProductType> typeList(String type) {
        List<ProductType> list=null;
		try {
			list = productTypeService.typeList();
			if(!Tools.isBlank(type)){
				ProductType pt=new ProductType();
				pt.setType_name("顶级");
				pt.setType_id(0l);
				list.add(0, pt);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
        return list;
    }
}
