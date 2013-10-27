package com.isoftstone.service.jxc.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.jxc.XiaoshouDao;
import com.isoftstone.model.jxc.SaleMgt;
import com.isoftstone.model.jxc.Xiaoshou;
import com.isoftstone.service.jxc.XiaoshouService;

@Transactional
@Service
public class XiaoshouServiceImpl implements XiaoshouService {

    @Autowired
    private XiaoshouDao xiaoshouDao;

    @Override
    public List<Xiaoshou> getXiaoshouList(Map<String,String> map){
        return xiaoshouDao.getXiaoshouList(map);
    }
    
    @Override
    public List<SaleMgt> getSaleMgtList(Map<String,String> map) {
        return xiaoshouDao.getSaleMgtList(map);
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
    public void deleteXiaoshouByID(List<String> xiaoshou_id) {
        xiaoshouDao.deleteXiaoshouByID(xiaoshou_id);
    }

    public void setXiaoshouDao(XiaoshouDao xiaoshouDao) {
        this.xiaoshouDao = xiaoshouDao;
    }
}
