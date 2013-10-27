/**
 * 
 */
package com.isoftstone.dao.ktxx;

import java.util.List;

import com.isoftstone.model.ktsb.KtxxBudgetLink;
import com.isoftstone.model.ktsb.KtxxCompanyLink;
import com.isoftstone.model.ktsb.KtxxDirectorLink;
import com.isoftstone.model.ktsb.KtxxTechmemberLink;
import com.isoftstone.model.ktxx.KtxxSfgc;
import com.isoftstone.model.people.People;

/**材料上报中所有link公共操作接口
 * @author WM
 * 下午11:28:17
 */
public interface KtsbIssueLinkPublicDao {
	
	//行政责任人 link
	public void insertKtxxDirectorLink(KtxxDirectorLink ktxxDirectorLink);
	public void deleteKtxxDirectorLinkByKT(String issueId);
	public List<KtxxDirectorLink> searchDirectorLinkByKT(String issueId);
	
	//技术责任人 link 
	public void insertKtxxTechmemberLink(KtxxTechmemberLink ktxxTechmemberLink);
	public void deleteKtxxTechmemberLinkByKT(String issueId);
	public List<KtxxTechmemberLink> searchTechmemberLinkByKT(String issueId);
	//支持单位 Link 
	public void insertKtxxCompanyLink(KtxxCompanyLink ktxxCompanyLink);
	public void deleteKtxxCompanyLinkByKT(String issueId);
	public List<KtxxCompanyLink> searchCompanyLinkByKT(String issueId);
	//年度任务及指标 Link(使用已有的)
	
	//示范工程及配套条件 Link
	public void insertKtxxSfgc(KtxxSfgc ktxxSfgc);
	public void deleteKtxxSfgcByKT(String issueId);
	//主要人员情况
	
	//TODO WM 继续添加与课题申报相关内容link
	//目前承担其他课题情况
	
	//经费预算
	public void insertKtxxBudget(KtxxBudgetLink ktxxBudgetLink);
	public void deleteKtxxBudgetByKT(String issueId);
	public String selectKtxxBudgetByKt(String issueId);
}
