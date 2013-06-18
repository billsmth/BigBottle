package com.hk.distribution.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hk.distribution.dao.JinhuoDao;
import com.hk.distribution.model.Jinhuo;
import com.hk.distribution.model.Xiaoshou;
import com.hk.distribution.service.JinhuoService;

@Transactional
@Service
public class JinhuoServiceImpl implements JinhuoService {

    @Autowired
    private JinhuoDao jinhuoDao;

    @Override
    public List<Jinhuo> getJinhuoList() {
        return jinhuoDao.getJinhuoList();
    }
    @Override
    public Jinhuo getMaxID(){
    	return jinhuoDao.getMaxID().get(0);
    }
    @Override
    public Jinhuo getJinhuo(Jinhuo jinhuo) {
        return jinhuoDao.getJinhuo(jinhuo).get(0);
    }

    @Override
    public void saveJinhuo(Jinhuo jinhuo) {
        jinhuoDao.saveJinhuo(jinhuo);
    }

    @Override
    public void updateJinhuo(Jinhuo jinhuo) {
        jinhuoDao.updateJinhuo(jinhuo);
    }
    
    @Override
    public void updateJinhuoruku(Jinhuo jinhuo) {
        jinhuoDao.updateJinhuoruku(jinhuo);
    }

    @Override
    public void deleteJinhuoByKuanhao_id(List<String> Kuanhao_id) {
        jinhuoDao.deleteJinhuoByKuanhao_id(Kuanhao_id);
    }
    
    @Override
    public void deleteJinhuoByID(List<String> jinhuo_id){
    	jinhuoDao.deleteJinhuoByID(jinhuo_id);
    }

    public void setJinhuoDao(JinhuoDao jinhuoDao) {
        this.jinhuoDao = jinhuoDao;
    }
}
