/**
 * 
 */
package com.isoftstone.service.ktxx.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.ktxx.KtxxResultDao;
import com.isoftstone.model.ktxx.KtxxResult;
import com.isoftstone.service.ktxx.KtxxResultService;

/**
 * @author WM
 * 下午10:10:28
 */
@Transactional
@Service
public class KtxxResultServiceImpl implements KtxxResultService {

	@Autowired
	private KtxxResultDao ktxxResultDao;
	/* (non-Javadoc)
	 * @see com.isoftstone.service.ktxx.KtxxResultService#findAll(com.isoftstone.model.ktxx.KtxxResult)
	 */
	@Override
	public List<KtxxResult> findAll(KtxxResult ktxxResult) {
		
		Map<String, String> param = new HashMap<String ,String>();
        
        if(StringUtils.isNotBlank(ktxxResult.getId())) {
            param.put("id", ktxxResult.getId());
        }
        if(ktxxResult.getIssueId() != null && !"".equals(ktxxResult.getIssueId())){
        	param.put("issueId", ktxxResult.getIssueId());
        }
        if(ktxxResult.getResult() != null && !"".equals(ktxxResult.getResult())){
        	param.put("issueResult", ktxxResult.getResult());
        }
		return ktxxResultDao.listAll(param);
	}

	/* (non-Javadoc)
	 * @see com.isoftstone.service.ktxx.KtxxResultService#delete(java.lang.String)
	 */
	@Override
	public void delete(String id) {
		ktxxResultDao.delete(id);
	}

	/* (non-Javadoc)
	 * @see com.isoftstone.service.ktxx.KtxxResultService#deleteByKT(java.lang.String)
	 */
	@Override
	public void deleteByKT(String issueId) {
		ktxxResultDao.deleteByKT(issueId);
	}

	/* (non-Javadoc)
	 * @see com.isoftstone.service.ktxx.KtxxResultService#insert(com.isoftstone.model.ktxx.KtxxResult)
	 */
	@Override
	public void insert(KtxxResult ktxxResult) {
		
		ktxxResultDao.insert(ktxxResult);
	}

	/* (non-Javadoc)
	 * @see com.isoftstone.service.ktxx.KtxxResultService#update(com.isoftstone.model.ktxx.KtxxResult)
	 */
	@Override
	public void update(KtxxResult ktxxResult) {
		
		ktxxResultDao.update(ktxxResult);
	}

}
