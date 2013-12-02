package com.isoftstone.service.jxc;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.jxc.Product;

public interface ProductService {

    public List<Product> getProductList();
    public Product getProduct(Product Product);
    public void saveProduct(Product product);
    public Product getMaxID();
    public void updateProduct(Product product);
    public void deleteProductsByID(List<String> product_id);
    public List<Product> selectWithCondition(Product product);
    public List<Product> selectPagedResult(Map<String,Object> param);
}
