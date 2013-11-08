package com.isoftstone.controller.product;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSONArray;
import com.isoftstone.common.Tools;
import com.isoftstone.model.acl.User;
import com.isoftstone.model.jxc.Product;
import com.isoftstone.model.meeting.Meeting;
import com.isoftstone.model.opinion.IssueOpinion;
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
        product.setNew_flg(request.getParameter("new_flg"));
        product.setCol1(request.getParameter("col1"));
        product.setCol2(request.getParameter("col2"));
        
        User user = (User) request.getSession().getAttribute("user");
        
        product.setUpdater_id(user.getPeopleId());
        product.setUpdater_name(user.getPeopleName());
        
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
            
            product.setCreater_id(user.getPeopleId());
            product.setCreater_name(user.getPeopleName());
            
            product.setStatus("0");
            product.setNew_flg("0");
        	
            productService.saveProduct(product);
        } else if ("2".equals(editType)) {
        	product.setProduct_id(Long.parseLong(request.getParameter("product_id")));
        	product.setImage_name(request.getParameter("image_name"));
        	product.setCreater_id(request.getParameter("creater_id"));
        	product.setCreater_name(request.getParameter("creater_name"));
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
    
    @RequestMapping("/delProduct")
    @ResponseBody
    public String deleteProduct(String productIds) {
        
        String[] rets = productIds.split(",");
        productService.deleteProductsByID(Arrays.asList(rets));
        return "{'success':true}";
    }

    @RequestMapping("/json/list")
    @ResponseBody
    public List<Product> getProductListByJson(Product product) {

        List<Product> list = productService.selectWithCondition(product);
        return list;
    }
    
    @RequestMapping("/changeSaleType")
    @ResponseBody
    public String changeSaleType(HttpServletRequest request, HttpServletResponse response,String product_id1, String saleType){
    	
    	Product p=new Product();
    	p.setProduct_id(Long.parseLong(product_id1));
    	p=productService.getProduct(p);
    	p.setNew_flg(saleType);
    	User user = (User) request.getSession().getAttribute("user");
        
    	p.setUpdater_id(user.getPeopleId());
    	p.setUpdater_name(user.getPeopleName());
    	
        
        productService.updateProduct(p);
        return "{'success':true}";
    }
    
    @RequestMapping("/changeSaleStatus")
    @ResponseBody
    public String changeSaleStatus(HttpServletRequest request, HttpServletResponse response,String product_id2, String saleStatus){
    	
    	Product p=new Product();
    	p.setProduct_id(Long.parseLong(product_id2));
    	p=productService.getProduct(p);
    	p.setStatus(saleStatus);
    	User user = (User) request.getSession().getAttribute("user");
        
    	p.setUpdater_id(user.getPeopleId());
    	p.setUpdater_name(user.getPeopleName());
    	
        
        productService.updateProduct(p);
        return "{'success':true}";
    }
    
    @RequestMapping("/getProductPic")
    @ResponseBody
    public ModelAndView getProductPic(HttpServletRequest request, HttpServletResponse response,String productId){
    	Product p=new Product();
    	p.setProduct_id(Long.parseLong(productId));
    	p=productService.getProduct(p);
    	
    	request.setAttribute("PRODUCT_PICS",p);
    	return new ModelAndView("productPic"); 
    }
    
    @RequestMapping("/getProductByID")
    @ResponseBody
    public ModelAndView getProductByID(HttpServletRequest request, HttpServletResponse response,String productId){
    	Product p=new Product();
    	p.setProduct_id(Long.parseLong(productId));
    	p=productService.getProduct(p);
    	
    	request.setAttribute("PRODUCTDETAIL",p);
    	return new ModelAndView("productDetail"); 
    }

    /**
     * 取得产品
     * 
     * @param type
     * '0':'普通产品'
     * '1':'新产品'
     * '2':'推荐品'
     * '3':'打折品'
     * '4':'畅销品'
     * '5':'定做商品'
     * 
     * @return
     */
    @RequestMapping(value="/getProducts",produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String getProducts(String type) {
    	Product product=new Product();
    	//shangjia status
    	product.setStatus("3");
    	// 0:'普通产品'
    	// 1:'新产品'
    	// 2:'推荐品'
    	// 3:'打折品'
    	// 4:'畅销品'
    	// 5:'定做商品'
    	product.setNew_flg(type);
        List<Product> list = productService.selectWithCondition(product);
        JSONArray jsonArray=new JSONArray();
        jsonArray.add(list);
//        JSONObject json=new JSONObject();
//		json.accumulate("opinionReplay", opinionReplay);
//		return json.toString();
        return jsonArray.toJSONString();
    }
    
    @RequestMapping(value="/getProductsByType")
    @ResponseBody
    public ModelAndView getProductsByType(HttpServletRequest request, HttpServletResponse response, String type) {
    	Product product=new Product();
    	//shangjia status
    	product.setStatus("3");
    	// 0:'普通产品'
    	// 1:'新产品'
    	// 2:'推荐品'
    	// 3:'打折品'
    	// 4:'畅销品'
    	// 5:'定做商品'
    	product.setNew_flg(type);
        List<Product> list = productService.selectWithCondition(product);
        
        request.setAttribute("PRODUCTS",list);
    	return new ModelAndView("products"); 
    }
    
    @RequestMapping("/delPic")
    @ResponseBody
    public String delPic(HttpServletRequest request, Product product, String picId) {
    	System.out.println("Product>>delPic>>start");
    	product=productService.getProduct(product);
    	String imgs=product.getImage_name();
    	System.out.println("imgs:"+imgs);
    	System.out.println("target imgs:"+picId);
    	imgs=imgs.replace(picId+",", "");
    	product.setImage_name(imgs);
    	productService.updateProduct(product);
    	
    	String savePath = request.getSession().getServletContext().getRealPath("/Productlist/");
		
		String productFileDir = savePath + "/" + product.getProduct_id() + "/";
		File file = new File(productFileDir);
		if (file.exists()) {
			productFileDir = savePath + "/" + product.getProduct_id() + "/"+picId;
			file = new File(productFileDir);
			if (file.exists()) {
				file.delete();
			}
		}
    	
    	System.out.println("result:"+imgs);
    	System.out.println("Product>>delPic>>end");
    	return "{'success':true}";
    }
    
    @RequestMapping("/upfile")
    @ResponseBody
    public String upfile(HttpServletRequest request, Product product, String target_product_id) {
    	
    	System.out.println("upfile for :"+target_product_id);
    	String imageNames="";
    	if(product.getFiletest1().getSize()>0){                    
    		try {     
    			imageNames+=SaveFileFromInputStream(product.getFiletest1().getInputStream(), target_product_id, product.getFiletest1().getOriginalFilename(), request)+",";     
    		} catch (IOException e) {     
    			System.out.println(e.getMessage());     
    			return null;     
    		}     
    	}
    	if(product.getFiletest2().getSize()>0){                    
    		try {     
    			imageNames+=SaveFileFromInputStream(product.getFiletest2().getInputStream(), target_product_id, product.getFiletest2().getOriginalFilename(), request)+",";     
    		} catch (IOException e) {     
    			System.out.println(e.getMessage());     
    			return null;     
    		}     
    	}
    	if(product.getFiletest3().getSize()>0){                    
    		try {     
    			imageNames+=SaveFileFromInputStream(product.getFiletest3().getInputStream(), target_product_id, product.getFiletest3().getOriginalFilename(), request)+",";     
    		} catch (IOException e) {     
    			System.out.println(e.getMessage());     
    			return null;     
    		}     
    	}
    	product.setProduct_id(Long.parseLong(target_product_id));
    	Product targetProduct=productService.getProduct(product);
    	if(targetProduct.getImage_name()!=null){
    		targetProduct.setImage_name(targetProduct.getImage_name() + imageNames);
    	}else{
    		targetProduct.setImage_name(imageNames);
    	}
    	
    	User user = (User) request.getSession().getAttribute("user");
        
    	targetProduct.setUpdater_id(user.getPeopleId());
    	targetProduct.setUpdater_name(user.getPeopleName());
    	
    	productService.updateProduct(targetProduct);
    	
    	return "{'success':true}";
	}
    
    public String SaveFileFromInputStream(InputStream stream, String fileDir, String filename, HttpServletRequest request) throws IOException {
		String savePath = request.getSession().getServletContext().getRealPath("/Productlist/");
		
		String productFileDir = savePath + "/" + fileDir + "/";
		File file = new File(productFileDir);
		if (!file.exists()) {
			file.mkdir();
		}
		String fileName = java.util.UUID.randomUUID().toString();
        filename=fileName+filename.substring(filename.lastIndexOf("."));
        File toFile = new File(file, filename);
        OutputStream os = new FileOutputStream(toFile);
        byte[] buffer = new byte[1024];
        int length = 0;
        while ((length = stream.read(buffer)) > 0) {
            os.write(buffer, 0, length);
        }
        stream.close();
        os.close();
        return filename;
	}
}
