package com.isoftstone.controller.product;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.isoftstone.common.Tools;
import com.isoftstone.model.jxc.Product;
import com.isoftstone.service.jxc.ProductService;

@Controller
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping("/productmgt")
    public ModelAndView listProduct() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("product/product");
        return mav;
    }
    
    @RequestMapping("/releaseproductstatusmg")
    public ModelAndView listProductProducts() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("product/releaseproductstatusmg");
        return mav;
    }
    
    @RequestMapping("/productproductapprove")
    public ModelAndView listProductsMG() {

        ModelAndView mav = new ModelAndView();

        mav.setViewName("product/productproductapprove");
        return mav;
    }

    @RequestMapping("/saveproduct")
    @ResponseBody
    public String saveProduct(String editType, HttpServletRequest request) {

        Product product = new Product();
        
        
        if ("1".equals(editType)) {
        	Product productID = productService.getMaxID();
        	
        	if(productID==null){
        		productID=new Product();
        		productID.setProduct_id(0l);
        	}
        	Long ProductID=productID.getProduct_id();
        	ProductID=ProductID/10000;
        	
        	Long dateStr = Tools.getDataStr();
            if(dateStr>ProductID){
            	product.setProduct_id(Long.parseLong(""+dateStr+"0001"));
            }else{
            	product.setProduct_id(productID.getProduct_id()+1);
            }
        	
            productService.saveProduct(product);
        } else if ("2".equals(editType)) {
        	//product.setProduct_id(Long.parseLong(product_id));
            productService.updateProduct(product);
        }

        return "{'success':true}";
    }
    
    @RequestMapping("/delete")
    @ResponseBody
    public String deleteProduct(String address) {
        
        String[] rets = address.split(",");
        
        return "{'success':true}";
    }

    @RequestMapping("/json/list")
    @ResponseBody
    public List<Product> getProductListByJson() {

        List<Product> list = productService.getProductList();
        return list;
    }
}
