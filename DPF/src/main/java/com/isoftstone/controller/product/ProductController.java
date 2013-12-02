package com.isoftstone.controller.product;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.isoftstone.common.ImageUtil;
import com.isoftstone.common.Tools;
import com.isoftstone.model.acl.User;
import com.isoftstone.model.jxc.Kucun;
import com.isoftstone.model.jxc.PostAddress;
import com.isoftstone.model.jxc.Product;
import com.isoftstone.model.jxc.Xiaoshou;
import com.isoftstone.service.jxc.KucunService;
import com.isoftstone.service.jxc.PostAddressService;
import com.isoftstone.service.jxc.ProductService;
import com.isoftstone.service.jxc.XiaoshouService;

@Controller
@RequestMapping("/product")
public class ProductController {
	
    @Autowired
    private ProductService productService;
    
    @Autowired
    private XiaoshouService xiaoshouService;
    
    @Autowired
    private PostAddressService postAddressService;
    
    @Autowired
    private KucunService kucunService;
    
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
        product.setCol1(request.getParameter("col1"));
        product.setCol2(request.getParameter("col2"));
        if(Tools.isBlank(request.getParameter("col3"))){
        	product.setCol3("0");
        }else{
        	product.setCol3(request.getParameter("col3"));
        }
        product.setCol4(request.getParameter("col4"));
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
            if(!Tools.isBlank(request.getParameter("new_flg"))){
            	product.setNew_flg(request.getParameter("new_flg"));
            }else{
            	product.setNew_flg("0");
            }
        	
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
            if(Tools.isBlank(request.getParameter("col3"))){
            	product.setCol3("0");
            }else{
            	product.setCol3(request.getParameter("col3"));
            }
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
    
    @RequestMapping("/getPostTo")
    @ResponseBody
    public ModelAndView getPostTo(HttpServletRequest request, HttpServletResponse response,String xiaoshou_id,String postTo){
    	
    	request.setAttribute("ORDER_ID",xiaoshou_id);
    	
    	if(postTo.equals("0")){
    		
    	}else if(postTo.equals("1")){
    		return new ModelAndView("postToMe");
    	}
    	
    	return new ModelAndView("postTo"); 
    }
    
    @RequestMapping("/getOrderDetail")
    @ResponseBody
    public ModelAndView getOrderDetail(HttpServletRequest request, HttpServletResponse response, String xiaoshou_id){
    	Xiaoshou xs = null;
    	if(!Tools.isBlank(xiaoshou_id)){
    		xs = new Xiaoshou();
        	xs.setXiaoshou_id(Long.parseLong(xiaoshou_id));
        	xs=xiaoshouService.getXiaoshou(xs);
        	request.setAttribute("ORDER_DETAIL",xs);
        	PostAddress pa=new PostAddress();
        	pa.setOrder_id(Long.parseLong(xiaoshou_id));
        	pa=postAddressService.getPostAddress(pa);
        	request.setAttribute("EXPRESS_DETAIL",pa);
    	}
    	
    	
    	return new ModelAndView("OrderDetail"); 
    }
    
    @RequestMapping("/createOrder")
    @ResponseBody
    public ModelAndView createOrder(HttpServletRequest request, HttpServletResponse response,String productId){
    	Product p=new Product();
    	p.setProduct_id(Long.parseLong(productId));
    	p=productService.getProduct(p);
    	request.setAttribute("PRODUCT",p);
    	List<String> chimaList=new ArrayList<String>();
    	if(Tools.isBlank(p.getCol4())){
    		
    		String kucunIds=p.getKucun_ids();
    		String [] kucun_Ids=kucunIds.split(",");
    		List<String> list=Arrays.asList(kucun_Ids);
    		Map<String,Object> map=new HashMap<String,Object>();
    		map.put("kucunIds", list);
    		List<Kucun> kucunList=kucunService.getKucunFromProduct(map);
    		
    		for(Kucun k:kucunList){
    			chimaList.add(k.getYanse()+":"+k.getChima());
    		}
    	}else{
    		String cima=p.getCol4();
    		chimaList=Arrays.asList(cima.split(";"));
    	}
    	
    	request.setAttribute("PRODUCT_CHIMA",chimaList);
    	
    	return new ModelAndView("createOrder"); 
    }
    
    @RequestMapping(value="/createOrderBase",produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public ModelAndView createOrderBase(HttpServletRequest request, HttpServletResponse response){
    	Product p=new Product();
    	p.setProduct_id(Long.parseLong(request.getParameter("product_id")));
    	p=productService.getProduct(p);
    	Kucun kucun=null;
    	
    	String chimayanse=request.getParameter("radio-choice-cm");
    	String[] chima_yanse=chimayanse.split(":");
    	
    	if(Tools.isBlank(p.getCol4())){
    		String kucunIds=p.getKucun_ids();
        	if(kucunIds.endsWith(",")){
        		kucunIds=kucunIds.substring(0,kucunIds.length()-1);
        	}
        	String[] kucun_ids=kucunIds.split(",");
        	List<String> list=Arrays.asList(kucun_ids);
        	
        	Map<String,Object> map=new HashMap<String,Object>();
        	map.put("kucunIds", list);
        	
        	map.put("yanse", chima_yanse[0]);
        	map.put("chima", chima_yanse[1]);
        	
        	List<Kucun> kucunList=kucunService.getKucunFromProduct(map);
        	if(kucunList.size()<1){
        		return null;
        	}
        	kucun=kucunList.get(0);
    	}
    	
    	Xiaoshou xiaoshou = xiaoshouService.getMaxID();
    	if(xiaoshou==null){
    		xiaoshou=new Xiaoshou();
    		xiaoshou.setXiaoshou_id(0l);
    	}
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
        xiaoshou.setProduct_id(Long.parseLong(request.getParameter("product_id")));
        if(kucun!=null){
        	xiaoshou.setKucun_id(kucun.getKucun_id());
        	xiaoshou.setKuanhao_id(kucun.getKuanhao_id());
        }
        xiaoshou.setYanse(chima_yanse[0]);
        xiaoshou.setChima(chima_yanse[1]);
        xiaoshou.setCol1(request.getParameter("productname"));
        xiaoshou.setShuliang(Integer.valueOf(request.getParameter("shuliang")));
        xiaoshou.setShoujia(Float.valueOf(request.getParameter("shoujia")));
        xiaoshou.setCol2(request.getParameter("yunfei"));
        xiaoshou.setShijishoukuan((Float.valueOf(request.getParameter("shoujia"))*Integer.valueOf(request.getParameter("shuliang")))+Float.valueOf(request.getParameter("yunfei")));
        xiaoshou.setMaijia_id(request.getParameter("maijia_id"));
        xiaoshou.setMaijiaxingming(request.getParameter("maijia_name"));
        xiaoshou.setBeizhu(request.getParameter("beizhu"));
        xiaoshou.setPost_type(request.getParameter("radio-choice-post"));
        
        
        xiaoshouService.saveXiaoshou(xiaoshou);
        request.setAttribute("SALE_ORDER",xiaoshou);
        
        PostAddress pa = postAddressService.getMaxID();
    	if(pa==null||pa.getPost_id()==null){
    		pa=new PostAddress();
    		pa.setPost_id(0l);
    	}
    	Long postID=pa.getPost_id();
    	postID=postID/10000;
		
        if(dateStr>postID){
        	pa.setPost_id(Long.parseLong(""+dateStr+"0001"));
        }else{
        	pa.setPost_id(pa.getPost_id()+1);
        }
        
        pa.setOrder_id(xiaoshou.getXiaoshou_id());
        pa.setPost_from(request.getParameter("post_from"));
        pa.setPeople_id(request.getParameter("maijia_id"));
        pa.setDeparture(request.getParameter("departure"));
        pa.setProvince_from(request.getParameter("province_from"));
        pa.setCity_from(request.getParameter("city_from"));
        pa.setDistrict_from(request.getParameter("district_from"));
        pa.setCompany_name_from(request.getParameter("company_name_from"));
        pa.setDetail_from(request.getParameter("detail_from"));
        pa.setContact_number_from(request.getParameter("contact_number_from"));
        pa.setPost_to(request.getParameter("post_to"));
        pa.setDestination(request.getParameter("destination"));
        pa.setProvince(request.getParameter("province"));
        pa.setCity(request.getParameter("city"));
        pa.setDistrict(request.getParameter("district"));
        pa.setCompany_name(request.getParameter("company_name"));
        pa.setDetail_to(request.getParameter("detail_to"));
        pa.setContact_number(request.getParameter("contact_number"));
        pa.setNeijian(request.getParameter("neijian"));
        pa.setNote(request.getParameter("post_from_note"));
        
        pa.setType(request.getParameter("radio-choice-post"));
        
        postAddressService.savePostAddress(pa);
        
        request.setAttribute("POST_INFO",pa);
        return new ModelAndView("soSuccess");
        
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
    @RequestMapping(value="/getPagedProducts",produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String getPagedProducts(String type, String pageId) {
    	Integer pageSize=Tools.PAGE_SIZE,pageNm=0;
    	Integer min;
    	boolean lastFlg=false;
    	Map<String,Object> paramMap=new HashMap<String,Object>();
    	
    	if(Tools.isBlank(pageId)){
    		return "";
    	}else{
    		pageNm=Integer.parseInt(pageId);
    		min=(pageNm-1)*pageSize;
    		paramMap.put("min", min);
    		paramMap.put("pageSize", Integer.valueOf(pageSize+1));
    		paramMap.put("new_flg", type);
    		paramMap.put("status", "3");
    	}
    	
    	
        List<Product> list = productService.selectPagedResult(paramMap);
        
        if(list.size()<pageSize){
        	lastFlg=true;
        }
        list.remove(pageSize);
        JSONArray jsonArray=new JSONArray();
        JSONObject json=new JSONObject();
        json.accumulate("PRODUCTLIST", list);
        jsonArray.add(json);
        json=new JSONObject();
		json.accumulate("lastFlg", lastFlg);
		jsonArray.add(json);
//      JSONObject json=new JSONObject();
//		json.accumulate("opinionReplay", opinionReplay);
//		return json.toString();
        return jsonArray.toString();
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
//        JSONArray jsonArray=new JSONArray();
//        jsonArray.add(list);
        JSONObject json=new JSONObject();
        json.accumulate("PRODUCTLIST", list);
//        JSONObject json=new JSONObject();
//		json.accumulate("opinionReplay", opinionReplay);
//		return json.toString();
        return json.toString();
    }
    
    
    @RequestMapping(value="/getPagedProductsByType")
    @ResponseBody
    public ModelAndView getPagedProductsByType(HttpServletRequest request, HttpServletResponse response, String type, String pageId) {
    	
    	Integer pageSize=Tools.PAGE_SIZE,pageNm=0;
    	Integer min;
    	Map<String,Object> paramMap=new HashMap<String,Object>();
    	
    	if(Tools.isBlank(pageId)){
    		return new ModelAndView("products"); 
    	}else{
    		pageNm=Integer.parseInt(pageId);
    		min=(pageNm-1)*pageSize;
    		paramMap.put("min", min);
    		paramMap.put("pageSize", pageSize);
    		paramMap.put("new_flg", type);
    		paramMap.put("status", "3");
    	}
    	
    	
        List<Product> list = productService.selectPagedResult(paramMap);
        
        request.setAttribute("PRODUCTS",list);
    	return new ModelAndView("products"); 
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
			productFileDir = savePath + "/" + product.getProduct_id() + "/" + picId;
			file = new File(productFileDir);
			if (file.exists()) {
				file.delete();
				String fSName=productFileDir.replace(".", "s.");
				File fs = new File(fSName);
				if (fs.exists()) {
					fs.delete();
				}
			}
		}
    	
    	System.out.println("result:"+imgs);
    	System.out.println("Product>>delPic>>end");
    	return "{'success':true}";
    }
    
    @RequestMapping("/createIndexPic")
    @ResponseBody
    public String createIndexPic(HttpServletRequest request, Product product, String picId) {
    	System.out.println("Product>>createIndexPic>>start");
    	
    	String savePath = request.getSession().getServletContext().getRealPath("/Productlist/");
		
		String productFilePic = savePath + "/" + product.getProduct_id() + "/" + picId;
		String productIndexPic=savePath + "/" + product.getProduct_id() + "/indexPic.jpg";
		File file = new File(productIndexPic);
		if (file.exists()) {
			file.delete();
		}
		ImageUtil.scale4(productFilePic,productIndexPic,115,115);
    	
    	System.out.println("Product>>createIndexPic>>end");
    	return "{'success':true}";
    }
    
    @RequestMapping("/upfile2")
    @ResponseBody
    public String upfile2(HttpServletRequest request, Product product, String target_product_id) {
    	MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest)request;  
    	Set<MultipartFile> fileset = new LinkedHashSet<MultipartFile>();  
    	for (Iterator it = multipartRequest.getFileNames(); it.hasNext();) {  
    	    String key = (String) it.next();  
    	    MultipartFile file = multipartRequest.getFile(key);  
    	    if (file.getOriginalFilename().length() > 0) {  
    	        fileset.add(file);  
    	    }  
    	} 
    	System.out.print(fileset);
    	return "{'success':true}";
    }
    
    
    
    @RequestMapping("/upfile")
    @ResponseBody
    public String upfile(HttpServletRequest request, Product product, String target_product_id) {
    	
		product.setProduct_id(Long.parseLong(target_product_id));
		Product targetProduct = productService.getProduct(product);
		String imageNames = "";
		String lastName;
		boolean createIndexFlg = false;
		if (!Tools.isBlank(targetProduct.getImage_name())) {
			imageNames = targetProduct.getImage_name();
			String[] picNames = imageNames.split(",");
			lastName = picNames[picNames.length - 1].substring(0, picNames[picNames.length - 1].lastIndexOf("."));
			lastName = String.valueOf(Long.parseLong(lastName) + 1);
		} else {
			lastName = targetProduct.getProduct_id() + "001";
			createIndexFlg = true;
			// targetProduct.setImage_name(imageNames);
		}
		System.out.println("upfile for :" + target_product_id);
		long fileIndex = Long.parseLong(lastName);
		if (product.getFiletest1().getSize() > 0) {
    		try {
    			
    			String productFirstPicName=SaveFileFromInputStream(product.getFiletest1().getInputStream(), target_product_id,fileIndex, product.getFiletest1().getOriginalFilename(), request);     
    			
    			imageNames += productFirstPicName+",";
    			String savePath = request.getSession().getServletContext().getRealPath("/Productlist/");
    			savePath+="/" + target_product_id + "/";
    			
    			if(createIndexFlg){
    				ImageUtil.scale4(savePath + productFirstPicName, savePath + Tools.PROUDCT_INDEX_PIC_NAME,115,115);
    			}
    		} catch (IOException e) {
    			System.out.println(e.getMessage());
    			return null;     
    		}     
    	}
    	if(product.getFiletest2().getSize()>0){             
    		try {
    			imageNames+=SaveFileFromInputStream(product.getFiletest2().getInputStream(), target_product_id,fileIndex+1, product.getFiletest2().getOriginalFilename(), request)+",";     
    		} catch (IOException e) {
    			System.out.println(e.getMessage());     
    			return null;     
    		}     
    	}
    	if(product.getFiletest3().getSize()>0){             
    		try {
    			imageNames+=SaveFileFromInputStream(product.getFiletest3().getInputStream(), target_product_id,fileIndex+2, product.getFiletest3().getOriginalFilename(), request)+",";     
    		} catch (IOException e) {
    			System.out.println(e.getMessage());     
    			return null;     
    		}     
    	}

    	targetProduct.setImage_name(imageNames);
    	User user = (User) request.getSession().getAttribute("user");
        
    	targetProduct.setUpdater_id(user.getPeopleId());
    	targetProduct.setUpdater_name(user.getPeopleName());
    	
    	productService.updateProduct(targetProduct);
    	
    	return "{'success':true}";
	}
    
    public String SaveFileFromInputStream(InputStream stream, String fileDir,long index, String filename, HttpServletRequest request) throws IOException {
		String savePath = request.getSession().getServletContext().getRealPath("/Productlist/");
		
		String productFileDir = savePath + "/" + fileDir + "/";
		File file = new File(productFileDir);
		if (!file.exists()) {
			file.mkdir();
		}
		filename = index + filename.substring(filename.lastIndexOf("."));
		File toFile = new File(file, filename);
		OutputStream os = new FileOutputStream(toFile);
		byte[] buffer = new byte[2048];
		int length = 0;
		while ((length = stream.read(buffer)) > 0) {
			os.write(buffer, 0, length);
		}
		stream.close();
		os.close();

		// 生成展示用的小尺寸图片
		createSmaillPic(productFileDir, filename);

		return filename;
	}
    
    /**
     * 生成展示用的小尺寸图片
     * @param filePath
     * @param fileName
     */
    private void createSmaillPic(String filePath,String fileName){
    	String fB=filePath+fileName;
    	String fS=filePath+ fileName.replace(".", "s.");
    	
    	ImageUtil.scale4(fB,fS,Tools.PRODUCT_DESP_HEIGHT,Tools.PRODUCT_DESP_WIDTH);
    }
}
