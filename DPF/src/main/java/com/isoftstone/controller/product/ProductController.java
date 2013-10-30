package com.isoftstone.controller.product;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.isoftstone.common.Tools;
import com.isoftstone.model.acl.User;
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
        product.setProduct_name(request.getParameter("product_name"));
        product.setPath(request.getParameter("path"));
        product.setTemplate_id(request.getParameter("template_id"));
        product.setDesp(request.getParameter("desp"));
        product.setType(request.getParameter("type"));
        product.setNote(request.getParameter("note"));
        product.setKucun_ids(request.getParameter("kucun_ids"));
        
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
            
            User user = (User) request.getSession().getAttribute("user");
            product.setCreater_id(user.getId());
            product.setStatus("0");
            product.setNew_flg("0");
        	
            productService.saveProduct(product);
        } else if ("2".equals(editType)) {
        	product.setProduct_id(Long.parseLong(request.getParameter("product_id")));
        	product.setImage_name(request.getParameter("image_name"));
        	product.setCreater_id(request.getParameter("creater_id"));
        	product.setStatus(request.getParameter("status"));
        	product.setNew_flg(request.getParameter("new_flg"));
        	product.setCol1(request.getParameter("col1"));
            product.setCol2(request.getParameter("col2"));
            product.setCol3(request.getParameter("col3"));
            product.setCol4(request.getParameter("col4"));
            product.setCol5(request.getParameter("col5"));
            product.setCol6(request.getParameter("col6"));
            product.setCol7(request.getParameter("col7"));
            product.setCol8(request.getParameter("col8"));
        	
            productService.updateProduct(product);
        }

        return "{'success':true}";
    }
    
    @RequestMapping("/delete")
    @ResponseBody
    public String deleteProduct(String productIds) {
        
        String[] rets = productIds.split(",");
        productService.deleteProductsByID(Arrays.asList(rets));
        return "{'success':true}";
    }

    @RequestMapping("/json/list")
    @ResponseBody
    public List<Product> getProductListByJson() {

        List<Product> list = productService.getProductList();
        return list;
    }
}
