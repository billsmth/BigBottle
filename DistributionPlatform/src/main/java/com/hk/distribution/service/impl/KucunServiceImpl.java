package com.hk.distribution.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hk.distribution.dao.KucunDao;
import com.hk.distribution.model.Kucun;
import com.hk.distribution.service.KucunService;

@Transactional
@Service
public class KucunServiceImpl implements KucunService {

    @Autowired
    private KucunDao kucunDao;

    @Override
    public List<Kucun> getKucunList() {
        return kucunDao.getKucunList();
    }
    
    @Override
    public List<Kucun> getKucun(Kucun kucun) {
        return kucunDao.getKucun(kucun);
    }

    @Override
    public void saveKucun(Kucun kucun) {
        kucunDao.saveKucun(kucun);
    }

    @Override
    public void updateKucun(Kucun kucun) {
        kucunDao.updateKucun(kucun);
    }

    @Override
    public void deleteKucunByKuanhao_id(List<String> Kuanhao_id) {
        kucunDao.deleteKucunByKuanhao_id(Kuanhao_id);
    }

    public void setKucunDao(KucunDao kucunDao) {
        this.kucunDao = kucunDao;
    }
}
