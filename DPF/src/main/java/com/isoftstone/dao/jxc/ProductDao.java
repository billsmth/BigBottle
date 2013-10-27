package com.isoftstone.dao.jxc;

import java.util.List;

import com.isoftstone.model.jxc.Product;

public interface ProductDao {

	public List<Product> getProductList();

	public List<Product> getProduct(Product product);
	
	public List<Product> getMaxID();
	
	public void saveProduct(Product product);

	public void updateProduct(Product product);
}
