package com.isoftstone.service.ktxx.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.ktxx.IssueBudgetLinkMapper;
import com.isoftstone.dao.ktxx.KtsqDao;
import com.isoftstone.model.ktsb.KtxxBudgetLink;
import com.isoftstone.model.ktxx.Ktsq;
import com.isoftstone.service.ktxx.KtsqService;

@Transactional
@Service
public class KtsqServiceImpl implements KtsqService{

    @Autowired
    private KtsqDao dao;
    
    @Autowired
    private IssueBudgetLinkMapper issueBudgetLinkMapper;

	public KtsqDao getDao() {
        return dao;
    }

    public void setDao(KtsqDao dao) {
        this.dao = dao;
    }

    public IssueBudgetLinkMapper getIssueBudgetLinkMapper() {
		return issueBudgetLinkMapper;
	}

	public void setIssueBudgetLinkMapper(IssueBudgetLinkMapper issueBudgetLinkMapper) {
		this.issueBudgetLinkMapper = issueBudgetLinkMapper;
	}
    
    @Override
    public List<Ktsq> findAll(Ktsq ktsq, String flag, String currOrgId, String peopleId, String roleId) {
        Map<String, String> param = new HashMap<String ,String>();
        
        param.put("queryType", flag);
        param.put("orgId", currOrgId);
        param.put("peopleId", peopleId);

        if(StringUtils.isNotBlank(ktsq.getId())) {
            param.put("id", ktsq.getId());
        }

        if(ktsq.getProjectName() != null && !"".equals(ktsq.getProjectName())) {
            param.put("projectName", "%" + ktsq.getProjectName() + "%");
        }
        
        if(ktsq.getTopicName() != null && !"".equals(ktsq.getTopicName())) {
            param.put("topicName", "%" + ktsq.getTopicName() + "%");
        }
        
        if(ktsq.getIssueName() != null && !"".equals(ktsq.getIssueName())) {
            param.put("issueName", "%" + ktsq.getIssueName() + "%");
        }
        
        if(ktsq.getIssueNo() != null && !"".equals(ktsq.getIssueNo())) {
            param.put("issueNo", "%" + ktsq.getIssueNo() + "%");
        }
        
        if(ktsq.getDirectorName() != null && !"".equals(ktsq.getDirectorName())) {
            param.put("directorName", "%" + ktsq.getDirectorName() + "%");
        }
        
        if(ktsq.getStatus() != null && !"".equals(ktsq.getStatus())) {
            param.put("status", "%" + ktsq.getStatus() + "%");
        }
        if(roleId.equals("25ceae07-2d48-4019-adc3-7b4366844076")||roleId.equals("承担单位_科技处")){
        	param.put("roleId", "1");
        }

        return dao.listAll(param);
    }

    @Override
    public void delete(String id) {
        dao.delete(id);
    }

    @Override
    public void insert(Ktsq ktsq, String initBudget) {
        dao.insert(ktsq);

		KtxxBudgetLink kbl = new KtxxBudgetLink();
		kbl.setId(UUID.randomUUID().toString());
		kbl.setIssueId(ktsq.getId());
		kbl.setBudget(initBudget);
		issueBudgetLinkMapper.insertSelective(kbl);
        
    }

    @Override
    public void update(Ktsq ktsq) {
        dao.update(ktsq);
    }
}
