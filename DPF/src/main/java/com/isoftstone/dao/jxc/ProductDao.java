package com.isoftstone.dao.jxc;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.jxc.Product;

public interface ProductDao {

	public List<Product> getProductList();

	public List<Product> getProduct(Product product);
	
	public List<Product> getMaxID();
	
	public void saveProduct(Product product);

	public void updateProduct(Product product);
	
	public void deleteProductsByID(List<String> product_id);
	
	public List<Product> selectWithCondition(Product product);
	
	public List<Product> selectPagedResult(Map<String,Object> param);
}
