package com.isoftstone.service.opinion.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.opinion.IssueSpecialistLinkDao;
import com.isoftstone.model.opinion.IssueSpecialistLink;
import com.isoftstone.service.opinion.IssueSpecialistLinkService;

@Transactional
@Service
public class IssueSpecialistLinkServiceImpl implements IssueSpecialistLinkService{

    @Autowired
    private IssueSpecialistLinkDao dao;

    public IssueSpecialistLinkDao getDao() {
        return dao;
    }

    public void setDao(IssueSpecialistLinkDao dao) {
        this.dao = dao;
    }

    @Override
    public void delete(String id) {
        dao.delete(id);
    }
    
    public int noopinionzj(String id) {
    	return dao.getNoUpdate(id).size();
    }
    
    @Override
    public List<IssueSpecialistLink> listAll(String id) {
       return dao.listAll(id);
    }

    @Override
    public void insert(IssueSpecialistLink link) {
        dao.insert(link);
    }

    @Override
    public void update(IssueSpecialistLink link) {
        dao.update(link);
    }
}
