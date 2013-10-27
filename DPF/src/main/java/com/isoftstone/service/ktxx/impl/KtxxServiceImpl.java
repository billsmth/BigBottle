package com.isoftstone.service.ktxx.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.ktxx.KtxxDao;
import com.isoftstone.model.ktxx.Ktxx;
import com.isoftstone.service.ktxx.KtxxService;

@Transactional
@Service
public class KtxxServiceImpl implements KtxxService{

    @Autowired
    private KtxxDao dao;

    public KtxxDao getDao() {
        return dao;
    }

    public void setDao(KtxxDao dao) {
        this.dao = dao;
    }

    @Override
    public List<Ktxx> getKtxx(String id) {
    	return dao.getKtxx(id);
    }
    @Override
    public List<Ktxx> findAll(Ktxx ktxx) {
        Map<String, String> param = new HashMap<String ,String>();
        
//        if(ktxx.getProjectName() != null && !"".equals(ktxx.getProjectName())) {
//            param.put("projectName", "%" + ktxx.getProjectName() + "%");
//        }
//        
//        if(ktxx.getTopicName() != null && !"".equals(ktxx.getTopicName())) {
//            param.put("topicName", "%" + ktxx.getTopicName() + "%");
//        }
//        
//        if(ktxx.getIssueName() != null && !"".equals(ktxx.getIssueName())) {
//            param.put("issueName", "%" + ktxx.getIssueName() + "%");
//        }
//        
//        if(ktxx.getIssueNo() != null && !"".equals(ktxx.getIssueNo())) {
//            param.put("issueNo", "%" + ktxx.getIssueNo() + "%");
//        }
//        
//        if(ktxx.getDirectorName() != null && !"".equals(ktxx.getDirectorName())) {
//            param.put("directorName", "%" + ktxx.getDirectorName() + "%");
//        }
//        
//        if(ktxx.getStatus() != null && !"".equals(ktxx.getStatus())) {
//            param.put("status", "%" + ktxx.getStatus() + "%");
//        }
//        
        /*
//        Ktxx k1 = new Ktxx();
//        k1.setId("KKKK-1111");
//        k1.setProjectName("水体污染控制与治理");
//        k1.setIssueName("KKKK-1111-IssueName");
//        
//        Ktxx k2 = new Ktxx();
//        k2.setId("KKKK-2222");
//        k2.setProjectName("水体污染控制与治理");
//        k2.setIssueName("KKKK-2222-IssueName");
//        
//        List<Ktxx> list = new ArrayList<Ktxx>();
//        list.add(k1);
//        list.add(k2);
        */
        return dao.listAll(param);
    }

    @Override
    public void delete(String id) {
        dao.delete(id);
    }

    @Override
    public void insert(Ktxx ktxx) {
        dao.insert(ktxx);
    }

    @Override
    public void update(Ktxx ktxx) {
        dao.update(ktxx);
    }
    
    @Override
    public void scapprove(Ktxx ktxx){
    	dao.scapprove(ktxx);
    }
}
