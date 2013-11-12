package com.isoftstone.service.jxc.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.jxc.KehuDao;
import com.isoftstone.model.jxc.Kehu;
import com.isoftstone.service.jxc.KehuService;

@Transactional
@Service
public class KehuServiceImpl implements KehuService {

	@Autowired
    private KehuDao kehuDao;

    @Override
    public List<Kehu> getKehuList() {
        return kehuDao.getKehuList();
    }
    
    @Override
    public List<Kehu> getKehuList(Kehu kehu) {
        return kehuDao.searchKehuList(kehu);
    }
    
    @Override
    public Kehu getKehu(Kehu kehu) {
    	List<Kehu> list=kehuDao.getKehu(kehu);
    	Kehu kh=null;
    	if(list.size()>0){
    		kh=kehuDao.getKehu(kehu).get(0);
    	}
        return kh;
    }
    
    @Override
    public Kehu getKehubyKYC(Kehu kehu){
    	List<Kehu> list=kehuDao.getKehubyKYC(kehu);
    	if(list.size()>0){
    		kehu=list.get(0);
    	}else{
    		kehu=null;
    	}
    	return kehu;
    }

    @Override
    public Kehu getMaxID(){
    	return kehuDao.getMaxID().get(0);
    }
    
    @Override
    public void saveKehu(Kehu kehu) {
        kehuDao.saveKehu(kehu);
    }

    @Override
    public void updateKehu(Kehu kehu) {
        kehuDao.updateKehu(kehu);
    }

    @Override
    public void deleteKehuByKuanhao_id(List<String> Kuanhao_id) {
        kehuDao.deleteKehuByKuanhao_id(Kuanhao_id);
    }

    public void setKehuDao(KehuDao kehuDao) {
        this.kehuDao = kehuDao;
    }
}
