package com.isoftstone.service.jxc.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.jxc.PostAddressDao;
import com.isoftstone.model.jxc.PostAddress;
import com.isoftstone.service.jxc.PostAddressService;

@Transactional
@Service
public class PostAddressServiceImpl implements PostAddressService {

    @Autowired
    private PostAddressDao postAddressDao;

    @Override
    public List<PostAddress> getPostAddressList() {
        return postAddressDao.getPostAddressList();
    }
    
    @Override
    public PostAddress getPostAddress(PostAddress postAddress) {
    	List<PostAddress> list=postAddressDao.getPostAddress(postAddress);
    	if(list.size()>0){
    		postAddress=list.get(0);
    	}
        return postAddress;
    }
    
    @Override
    public PostAddress getMaxID(){
    	return postAddressDao.getMaxID().get(0);
    }
    
    @Override
    public void savePostAddress(PostAddress postAddress) {
        postAddressDao.savePostAddress(postAddress);
    }

    @Override
    public void updatePostAddress(PostAddress postAddress) {
        postAddressDao.updatePostAddress(postAddress);
    }

    public void setPostAddressDao(PostAddressDao postAddressDao) {
        this.postAddressDao = postAddressDao;
    }
    
    @Override
    public void deletePostAddressByID(List<String> postAddress_id){
    	this.postAddressDao.deletePostAddressByID(postAddress_id);
    }
}
