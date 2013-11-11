package com.isoftstone.dao.jxc;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.jxc.PostAddress;

public interface PostAddressDao {

	public List<PostAddress> getPostAddressList();

	public List<PostAddress> getPostAddress(PostAddress postAddress);
	public List<PostAddress> getMaxID();
	
	public List<PostAddress> getPostAddressbyKYC(PostAddress postAddress);
	
	public void savePostAddress(PostAddress postAddress);

	public void updatePostAddress(PostAddress postAddress);

	public void deletePostAddressByID(List<String> kuanhao_id);
	
	public List<PostAddress> getPostAddressFromProduct(Map<String,Object> map);
}
