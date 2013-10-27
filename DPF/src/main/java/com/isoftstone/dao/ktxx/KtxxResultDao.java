/**
 * 
 */
package com.isoftstone.dao.ktxx;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.ktxx.Ktsq;
import com.isoftstone.model.ktxx.KtxxResult;

/**
 * @author WM
 * 下午10:13:32
 */
public interface KtxxResultDao {

	 	public List<KtxxResult> listAll(Map<String, String> paramMap);
	    
	    public void delete(String id);
	    
	    public void deleteByKT(String issueId);
	    
	    public void update(KtxxResult ktxxResult);
	    
	    public void insert(KtxxResult ktxxResult);
	    
}
