package com.isoftstone.service.jxc;

import java.util.List;

import com.isoftstone.model.jxc.PostAddress;

public interface PostAddressService {

    public List<PostAddress> getPostAddressList();
    public PostAddress getPostAddress(PostAddress postAddress);
    public void savePostAddress(PostAddress postAddress);
    public PostAddress getMaxID();
    public void updatePostAddress(PostAddress postAddress);
    public void deletePostAddressByID(List<String> Kuanhao_id);
}
