package com.hk.distribution.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hk.distribution.dao.XiaoshouDao;
import com.hk.distribution.model.Xiaoshou;
import com.hk.distribution.service.XiaoshouService;

@Transactional
@Service
public class XiaoshouServiceImpl implements XiaoshouService {

    @Autowired
    private XiaoshouDao xiaoshouDao;

    @Override
    public List<Xiaoshou> getXiaoshouList() {
        return xiaoshouDao.getXiaoshouList();
    }
    
    @Override
    public Xiaoshou getXiaoshou(Xiaoshou xiaoshou) {
        List<Xiaoshou> list=xiaoshouDao.getXiaoshou(xiaoshou);
        if(list.size()>0){
        	xiaoshou=list.get(0);
    	}else{
    		xiaoshou=null;
    	}
        return xiaoshou;
    }
    @Override
    public Xiaoshou getMaxID(){
    	return xiaoshouDao.getMaxID().get(0);
    }

    @Override
    public void saveXiaoshou(Xiaoshou xiaoshou) {
        xiaoshouDao.saveXiaoshou(xiaoshou);
    }

    @Override
    public void updateXiaoshou(Xiaoshou xiaoshou) {
        xiaoshouDao.updateXiaoshou(xiaoshou);
    }
    
    @Override
    public void updateXiaoshouruku(Xiaoshou xiaoshou) {
        xiaoshouDao.updateXiaoshouruku(xiaoshou);
    }

    @Override
    public void deleteXiaoshouByKuanhao_id(List<String> Kuanhao_id) {
        xiaoshouDao.deleteXiaoshouByKuanhao_id(Kuanhao_id);
    }

    public void setXiaoshouDao(XiaoshouDao xiaoshouDao) {
        this.xiaoshouDao = xiaoshouDao;
    }
}
