package com.isoftstone.service.jxc.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.jxc.ProductTypeDao;
import com.isoftstone.model.jxc.ProductType;
import com.isoftstone.service.jxc.ProductTypeService;

@Transactional
@Service
public class ProductTypeServiceImpl implements ProductTypeService {

    @Autowired
    private ProductTypeDao productTypeDao;

    @Override
    public List<ProductType> findAll() {
        return productTypeDao.findAll();
    }
    
    @Override
    public List<ProductType> typeList(){
        return productTypeDao.typeList();
    }
    
    @Override
    public ProductType findProductType(ProductType productType) {
        return productTypeDao.findProductType(productType).get(0);
    }
    
    @Override
    public ProductType getMaxID(){
    	return productTypeDao.getMaxID().get(0);
    }
    
    @Override
    public void saveProductType(ProductType productType) {
        productTypeDao.saveProductType(productType);
    }

    @Override
    public void updateProductType(ProductType productType) {
        productTypeDao.updateProductType(productType);
    }

    
    @Override
    public void deleteProductTypeByID(ProductType productType) {
    	this.productTypeDao.deleteProductTypeByID(productType);
    }
    
}
