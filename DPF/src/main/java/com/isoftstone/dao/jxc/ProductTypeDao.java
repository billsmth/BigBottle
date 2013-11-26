package com.isoftstone.dao.jxc;

import java.util.List;

import com.isoftstone.model.jxc.ProductType;

public interface ProductTypeDao {

	public List<ProductType> findProductType(ProductType productType);

	public List<ProductType> findAll();
	
	public List<ProductType> typeList();
	
	public List<ProductType> getMaxID();
	
	public void saveProductType(ProductType productType);

	public void updateProductType(ProductType productType);
	
	public void deleteProductTypeByID(ProductType productType);
}
