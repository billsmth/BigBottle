package com.hk.distribution.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hk.distribution.dao.BaobiaoDao;
import com.hk.distribution.model.Baobiao;
import com.hk.distribution.service.BaobiaoService;

@Transactional
@Service
public class BaobiaoServiceImpl implements BaobiaoService {

    @Autowired
    private BaobiaoDao baobiaoDao;

    @Override
    public List<Baobiao> getBaobiaoList() {
        return baobiaoDao.getBaobiaoList();
    }
    
    @Override
    public List<Baobiao> getBaobiaoList(Baobiao baobiao) {
        return baobiaoDao.searchBaobiaoList(baobiao);
    }
    
    @Override
    public Baobiao getBaobiao(Baobiao baobiao) {
        return baobiaoDao.getBaobiao(baobiao).get(0);
    }
    
    @Override
    public Baobiao getBaobiaobyKYC(Baobiao baobiao){
    	List<Baobiao> list=baobiaoDao.getBaobiaobyKYC(baobiao);
    	if(list.size()>0){
    		baobiao=list.get(0);
    	}else{
    		baobiao=null;
    	}
    	return baobiao;
    }

    @Override
    public Baobiao getMaxID(){
    	return baobiaoDao.getMaxID().get(0);
    }
    
    @Override
    public void saveBaobiao(Baobiao baobiao) {
        baobiaoDao.saveBaobiao(baobiao);
    }

    @Override
    public void updateBaobiao(Baobiao baobiao) {
        baobiaoDao.updateBaobiao(baobiao);
    }

    @Override
    public void deleteBaobiaoByKuanhao_id(List<String> Kuanhao_id) {
        baobiaoDao.deleteBaobiaoByKuanhao_id(Kuanhao_id);
    }

    public void setBaobiaoDao(BaobiaoDao baobiaoDao) {
        this.baobiaoDao = baobiaoDao;
    }
}
