package com.isoftstone.service.jxc.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.jxc.ProductDao;
import com.isoftstone.model.jxc.Product;
import com.isoftstone.service.jxc.ProductService;

@Transactional
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductDao productDao;

    @Override
    public List<Product> getProductList() {
        return productDao.getProductList();
    }
    
    @Override
    public Product getProduct(Product product) {
        return productDao.getProduct(product).get(0);
    }
    
    @Override
    public Product getMaxID(){
    	return productDao.getMaxID().get(0);
    }
    
    @Override
    public void saveProduct(Product product) {
        productDao.saveProduct(product);
    }

    @Override
    public void updateProduct(Product product) {
        productDao.updateProduct(product);
    }

    public void setProductDao(ProductDao productDao) {
        this.productDao = productDao;
    }
    
    @Override
    public void deleteProductsByID(List<String> product_id){
    	this.productDao.deleteProductsByID(product_id);
    }
    
    @Override
    public List<Product> selectWithCondition(Product product){
    	return productDao.selectWithCondition(product);
    }
}
