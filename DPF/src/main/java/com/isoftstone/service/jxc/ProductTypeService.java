package com.isoftstone.service.jxc;

import java.util.List;

import com.isoftstone.model.jxc.ProductType;

public interface ProductTypeService {

    public ProductType findProductType(ProductType productType);
    
    public List<ProductType> findAll();
    
    public List<ProductType> typeList();
    
    public void saveProductType(ProductType productType);
    
    public ProductType getMaxID();
    
    public void updateProductType(ProductType productType);
    
    public void deleteProductTypeByID(ProductType productType);
    
}
