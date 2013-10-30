package com.isoftstone.service.jxc;

import java.util.List;

import com.isoftstone.model.jxc.Product;

public interface ProductService {

    public List<Product> getProductList();
    public Product getProduct(Product Product);
    public void saveProduct(Product product);
    public Product getMaxID();
    public void updateProduct(Product product);
    public void deleteProductsByID(List<String> product_id);
}
