package com.isoftstone.service.ktsb.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.common.Tools;
import com.isoftstone.dao.CddwMapper;
import com.isoftstone.dao.PeopleMapper;
import com.isoftstone.dao.ktxx.IssuePeopleLinkDao;
import com.isoftstone.dao.ktxx.IssuePlanMapper;
import com.isoftstone.dao.ktxx.KtsbIssueLinkPublicDao;
import com.isoftstone.dao.ktxx.KtxxDao;
import com.isoftstone.dao.ktxx.KtxxResultDao;
import com.isoftstone.dao.ktxx.KtxxTaskTargetDao;
import com.isoftstone.dao.ktxx.ResearchOutlayMapper;
import com.isoftstone.dao.ktxx.ResearchTaskMapper;
import com.isoftstone.dao.opinion.IssueOpinionDao;
import com.isoftstone.dao.opinion.OpinionReplayDao;
import com.isoftstone.model.cddw.Cddw;
import com.isoftstone.model.ktsb.KtsbBasicInfoForm;
import com.isoftstone.model.ktsb.KtxxBudgetLink;
import com.isoftstone.model.ktsb.KtxxCompanyLink;
import com.isoftstone.model.ktsb.KtxxDirectorLink;
import com.isoftstone.model.ktsb.KtxxTechmemberLink;
import com.isoftstone.model.ktxx.IssuePeopleLink;
import com.isoftstone.model.ktxx.IssuePlan;
import com.isoftstone.model.ktxx.Ktxx;
import com.isoftstone.model.ktxx.KtxxResult;
import com.isoftstone.model.ktxx.KtxxSfgc;
import com.isoftstone.model.ktxx.KtxxTaskTarget;
import com.isoftstone.model.ktxx.ResearchOutlay;
import com.isoftstone.model.ktxx.ResearchTask;
import com.isoftstone.model.opinion.IssueOpinion;
import com.isoftstone.model.opinion.OpinionReplay;
import com.isoftstone.model.people.People;
import com.isoftstone.service.ktsb.KtsbService;
import com.isoftstone.service.people.PeopleService;


@Transactional
@Service
public class KtsbServiceImpl implements KtsbService {
	
	private PeopleService peopleServ;
	
	private IssuePlanMapper issuePlanMapper;
	private ResearchOutlayMapper researchOutlayMapper;
	private ResearchTaskMapper researchTaskMapper;
	@Autowired
	private OpinionReplayDao opinionReplayDao;
    @Autowired
    private KtxxDao ktxxdao;
    @Autowired
    private KtxxResultDao ktxxResultDao;
    @Autowired
    private KtsbIssueLinkPublicDao ktsbIssueLinkPublicDao;
    @Autowired
    private KtxxTaskTargetDao ktxxTaskTargetDao;
    @Autowired
    private IssuePeopleLinkDao ktxxMainPeopleLinkDao;
    @Autowired
    private CddwMapper cddwMapper;
    @Autowired
    private PeopleMapper peopleMapper;
    @Autowired
    private IssueOpinionDao issueOpinionDao;
    
    private SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    
    @Autowired
	public void setPeopleServ(PeopleService peopleServ) {
		this.peopleServ = peopleServ;
	}

	@Autowired
	public void setIssuePlanMapper(IssuePlanMapper issuePlanMapper) {
		this.issuePlanMapper = issuePlanMapper;
	}
	
	@Autowired
	public void setResearchOutlayMapper(ResearchOutlayMapper researchOutlayMapper) {
		this.researchOutlayMapper = researchOutlayMapper;
	}


	@Autowired
	public void setResearchTaskMapper(ResearchTaskMapper researchTaskMapper) {
		this.researchTaskMapper = researchTaskMapper;
	}


	@Override
    public List<IssuePlan> findIssuePlanByIssueId(String issueId) throws Exception{
        return issuePlanMapper.findByIssueId(issueId);
       
    }

	@Override
	public void saveIssuePlan(IssuePlan ip) {
		ip.setId(UUID.randomUUID().toString());
		try {
			ip.setStartDate(sdf.parse(ip.getStartDateStr()));
			ip.setEndDate(sdf.parse(ip.getEndDateStr()));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		this.issuePlanMapper.insertSelective(ip);
	}

	@Override
	public void updateIssuePlan(IssuePlan ip) {
		try {
			ip.setStartDate(sdf.parse(ip.getStartDateStr()));
			ip.setEndDate(sdf.parse(ip.getEndDateStr()));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		this.issuePlanMapper.updateByPrimaryKeySelective(ip);
	}


	@Override
	public void delIssuePlanById(String id) throws Exception{
		this.issuePlanMapper.deleteByPrimaryKey(id);
	}


	@Override
	public void saveResearchOutlay(ResearchOutlay researchOutlay) throws Exception {
		researchOutlay.setId(UUID.randomUUID()+"");
		this.researchOutlayMapper.insertSelective(researchOutlay);
	}


	@Override
	public void updateResearchOutlay(ResearchOutlay researchOutlay)throws Exception {
		this.researchOutlayMapper.updateResearchOutlay(researchOutlay);
	}

	@Override
	public void delResearchOutlayById(String id) throws Exception {
		this.researchOutlayMapper.deleteByPrimaryKey(id);
	}

	@Override
	public List<ResearchOutlay> listResearchOutlay(String issueId) throws Exception  {
		return this.researchOutlayMapper.getListByIssueId(issueId);
	}
	
	
	
	
	
	
	@Override
    public List<ResearchTask> rtFindAll(ResearchTask rt) {
        Map<String, String> param = new HashMap<String ,String>();
        
        
        if(rt.getIssueId()!=null && !rt.getIssueId().equals("")){
        	param.put("issueId", rt.getIssueId());
        }
        
        return researchTaskMapper.selectAll(param);
    }

	@Override
	public void saveResearchTask(ResearchTask rt) {
		rt.setId(UUID.randomUUID().toString());
		this.researchTaskMapper.insertSelective(rt);
	}

	@Override
	public void updateResearchTask(ResearchTask rt) {
		this.researchTaskMapper.updateByPrimaryKeySelective(rt);
	}

	@Override
	public void delResearchTask(String id) {
		this.researchTaskMapper.deleteByPrimaryKey(id);
	}
	/**
	 * 材料申报 - 保存草稿
	 */
	@Override
	public String draftSave(boolean submitFlag,String issueId,KtsbBasicInfoForm ktsbBasicForm,List<People> xzPeoplelist,List<People> skillPeoplelist,List<Cddw> cddwlist,
			String necessitytext,String objAndKpitext,List<KtxxTaskTarget> taskTargetlist,List<KtxxSfgc> sfgclist,String solutiontext,
			String advantagetext,String mainPeopletext,List<People> capabilityPeoplelist,List<IssuePlan> otherKts,String orgAndMngtext,
			String riskstext,List<ResearchTask> researchTasklist,List<ResearchOutlay> researchOutlaylist,String budgets)throws ParseException,Exception
	{
		
		/**step 1 保存课题的基本信息**/
			if(issueId != null){//目前存在该课题
				Ktxx ktxx = ktxxdao.getKtxx(issueId).get(0);//TODO 这个issueId实际应该为课题的id
				
//				ktxx.setProject_name(ktsbBasicForm.getKtsb_projectName());//专项名称
//				ktxx.setTopic_name(ktsbBasicForm.getKtsb_topicName());//主题名称
//				ktxx.setIssue_no(ktsbBasicForm.getKtsb_issueNo());//课题编号
//				ktxx.setIssue_name(ktsbBasicForm.getKtsb_issueName());//课题名称
//				ktxx.setIssue_category(ktsbBasicForm.getKtsb_issueType());//课题类型
//				ktxx.setBelong_valley(ktsbBasicForm.getKtsb_belongValley());//所属流域
//				ktxx.setRequest_company_name(ktsbBasicForm.getKtsb_requestCompanyName());//申报单位名称
//				ktxx.setSecret_level(ktsbBasicForm.getKtsb_secretLevel());//密级
				ktxx.setStart_year_month(ktsbBasicForm.getKtsb_startYearMonth());//开始实施时间
				ktxx.setEnd_year_month(ktsbBasicForm.getKtsb_endYearMonth());//结束实施时间
				ktxx.setIntroduce(ktsbBasicForm.getKtsb_issueIntro());//课题简介
				if(submitFlag){
					ktxx.setStatus(ktxx.getLast_status());//课题状态
				}
				ktxx.setNecessity_analysis(necessitytext);//必要性分析
				ktxx.setAnalysis(riskstext);//风险分析及对策
				ktxx.setObjective(objAndKpitext);//总体目标
				ktxx.setTech_solution(solutiontext);//技术方案
				ktxx.setBasis_info(advantagetext);//基础条件及优势
				ktxx.setMember_info(mainPeopletext);//负责人及骨干人员
				ktxx.setOrg_manage(orgAndMngtext);//组织及管理
				//预期成果
				//1.删除预期成果 和课题的link关系
				ktxxResultDao.deleteByKT(issueId);
				//2.重建课题的预期成果
				if(ktsbBasicForm.getAchievement() != null){
					for(int i=0; i<ktsbBasicForm.getAchievement().length;i++){
						KtxxResult ktxxResult = new KtxxResult();
						ktxxResult.setId(UUID.randomUUID().toString());
						ktxxResult.setIssueId(issueId);
						ktxxResult.setResult(ktsbBasicForm.getAchievement()[i]);
						ktxxResultDao.insert(ktxxResult);
					}
				}
				/**step 2 保存该课题的责任人信息**/
				
					//1.删除课题和行政责任人的Link
				ktsbIssueLinkPublicDao.deleteKtxxDirectorLinkByKT(issueId);
					//2.重建课题和行政责任人的Link
				for (People people : xzPeoplelist) {
					if(people.getIdpeople()==null || people.getIdpeople().equals("")){
						try {
							formatPeople(people,1);
							peopleServ.savePeople(people);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
					KtxxDirectorLink ktxxDirectorLink = new KtxxDirectorLink();
					ktxxDirectorLink.setId(UUID.randomUUID().toString());
					ktxxDirectorLink.setIssueId(issueId);
					ktxxDirectorLink.setPeopleId(people.getIdpeople());
					ktxxDirectorLink.setSortNo(people.getSortNo());
					ktsbIssueLinkPublicDao.insertKtxxDirectorLink(ktxxDirectorLink);
				}
				//删除技术责任人Link
				ktsbIssueLinkPublicDao.deleteKtxxTechmemberLinkByKT(issueId);
				for (People people : skillPeoplelist) {
					if(people.getIdpeople()==null || people.getIdpeople().equals("")){
						formatPeople(people, 2);
						try {
							peopleServ.savePeople(people);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
					KtxxTechmemberLink ktxxTechmemberLink = new KtxxTechmemberLink();
					ktxxTechmemberLink.setId(UUID.randomUUID().toString());
					ktxxTechmemberLink.setIssueId(issueId);
					ktxxTechmemberLink.setPeopleId(people.getIdpeople());
					ktxxTechmemberLink.setSortNo(people.getSortNo());
					ktsbIssueLinkPublicDao.insertKtxxTechmemberLink(ktxxTechmemberLink);
				}
				
				//支持单位
				ktsbIssueLinkPublicDao.deleteKtxxCompanyLinkByKT(issueId);
				for(Cddw cddw : cddwlist){
					if(cddw.getIdorg()==null||"".equals(cddw.getIdorg())){
						cddw.setIdorg(UUID.randomUUID()+"");
						cddw.setCreateDate(new Date());
						//cddw.setCreateUser(1); //添加人员ID
						cddw.setSoftDel("1");
						this.cddwMapper.insert(cddw);
					}
					KtxxCompanyLink ktxxCompanyLink = new KtxxCompanyLink();
					ktxxCompanyLink.setId(UUID.randomUUID().toString());
					ktxxCompanyLink.setIssueId(issueId);
					ktxxCompanyLink.setCompanyId(cddw.getIdorg());
					if(cddw.getSoftNo()!=null&&!"".equals(cddw.getSoftNo())){
						ktxxCompanyLink.setSortNo(cddw.getSoftNo());
					}
					ktsbIssueLinkPublicDao.insertKtxxCompanyLink(ktxxCompanyLink);
				}
				
				//年度任务及指标
				ktxxTaskTargetDao.deleteByKt(issueId);
				for(KtxxTaskTarget ktxxTaskTarget : taskTargetlist){
					ktxxTaskTarget.setId(UUID.randomUUID().toString());
					ktxxTaskTarget.setIssueId(issueId);
					ktxxTaskTargetDao.insert(ktxxTaskTarget);
				}
				
				//示范工程及配套条件 Link
				ktsbIssueLinkPublicDao.deleteKtxxSfgcByKT(issueId);
				for(KtxxSfgc ktxxSfgc : sfgclist){
					ktxxSfgc.setId(UUID.randomUUID().toString());
					ktxxSfgc.setIssueId(issueId);
					ktsbIssueLinkPublicDao.insertKtxxSfgc(ktxxSfgc);
				}
				//主要人员Link
				ktxxMainPeopleLinkDao.deleteByKt(issueId);
				for(People people : capabilityPeoplelist){
					if(people.getIdpeople()==null || people.getIdpeople().equals("")){
						try {
							formatPeople(people, 3);
							peopleServ.savePeople(people);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
					IssuePeopleLink issuePeopleLink = new IssuePeopleLink();
					issuePeopleLink.setId(UUID.randomUUID().toString());
					issuePeopleLink.setIssueId(issueId);
					issuePeopleLink.setPeopleId(people.getIdpeople());
					//issuePeopleLink.setJobTask("");//课题中职务和分担的任务
					//issuePeopleLink.setWorkload(30);//累计为本课题工作的时间
					issuePeopleLink.setSortNo(people.getSortNo());
					ktxxMainPeopleLinkDao.insert(issuePeopleLink);
				}
				
				//目前承担的其他课题情况
				issuePlanMapper.deleteByKT(issueId);
				for(IssuePlan issuePlan : otherKts){
					issuePlan.setId(UUID.randomUUID().toString());
					issuePlan.setIssueId(issueId);
					issuePlan.setStartDate(sdf.parse(issuePlan.getStartDateStr()));
					issuePlan.setEndDate(sdf.parse(issuePlan.getEndDateStr()));
					issuePlanMapper.insert(issuePlan);
				}
				
				//经费预算
				ktsbIssueLinkPublicDao.deleteKtxxBudgetByKT(issueId);
				KtxxBudgetLink ktxxBudgetLink = new KtxxBudgetLink();
				ktxxBudgetLink.setId(UUID.randomUUID().toString());
				ktxxBudgetLink.setIssueId(issueId);
				ktxxBudgetLink.setBudget(budgets);
				ktsbIssueLinkPublicDao.insertKtxxBudget(ktxxBudgetLink);
				
				//研究任务设置
				researchTaskMapper.deleteByKT(issueId);
				for(ResearchTask researchTask : researchTasklist){
					researchTask.setId(UUID.randomUUID().toString());
					researchTask.setIssueId(issueId);
					researchTaskMapper.insert(researchTask);
				}
				
				//研究经费按单位分配
				researchOutlayMapper.deleteByKt(issueId);
				for(ResearchOutlay researchOutlay : researchOutlaylist){
					
					researchOutlay.setId(UUID.randomUUID().toString());
					researchOutlay.setIssueId(issueId);
					researchOutlayMapper.insertSelective(researchOutlay);
				}
				
				/**更新课题信息**/
				ktxxdao.update(ktxx);
			}
			
		return null;
	}
	
	private People formatPeople(People people,int type){
		if(people.getSex()==null||people.getSex().equals("男")){
			people.setSex("0");
		}
		if(people.getSex().equals("女")){
			people.setSex("1");
		}
		if(type==2){
			if(people.getDegree()!=null){
				if(people.getDegree().equals("学士")){
					people.setDegree("1");
				}
				if(people.getDegree().equals("硕士")){
					people.setDegree("2");
				}
				if(people.getDegree().equals("博士")){
					people.setDegree("3");
				}
			}
		}
		if(type==2 || type==3){
			if(people.getTitle()!=null){
				if(people.getTitle().equals("高工")){
					people.setTitle("1");
				}
				if(people.getTitle().equals("教授")){
					people.setTitle("2");
				}
			}
			if(people.getIdType()!=null){
				if(people.getIdType().equals("身份证")){
					people.setIdType("1");
				}
				if(people.getIdType().equals("护照")){
					people.setIdType("2");
				}
				if(people.getIdType().equals("军官证")){
					people.setIdType("3");
				}
			}
		}
		return people;
	}
	
	public String save(String issueId){
		
		if(issueId != null){//目前存在该课题
			Ktxx ktxx = ktxxdao.getKtxx(issueId).get(0);
			if(ktxx != null){
				
				ktxx.setStatus(ktxx.getLast_status());//更改状态
				ktxxdao.update(ktxx);
			}
					
		}			
		return null;
	}

	@Override
	public KtsbBasicInfoForm searchBasicFormByKT(String issueId) {
		KtsbBasicInfoForm ktsbBasicInfoForm;
		if(issueId != null){
			Ktxx ktxx = ktxxdao.getKtxx(issueId).get(0);
			Map<String, String> paramMap = new HashMap<String,String>();
			paramMap.put("issueId", issueId);
			List<KtxxResult> ktxxResultlist = ktxxResultDao.listAll(paramMap);
			ktsbBasicInfoForm = new KtsbBasicInfoForm();
			if(ktxx != null){
				ktsbBasicInfoForm.setKtsb_issueNo(ktxx.getIssue_no());
				ktsbBasicInfoForm.setKtsb_issueName(ktxx.getIssue_name());
				ktsbBasicInfoForm.setKtsb_issueType(ktxx.getIssue_category());
				ktsbBasicInfoForm.setKtsb_projectName(ktxx.getProject_name());
				ktsbBasicInfoForm.setKtsb_requestCompanyName(ktxx.getRequest_company_name());
				ktsbBasicInfoForm.setKtsb_secretLevel(ktxx.getSecret_level());
				ktsbBasicInfoForm.setKtsb_topicName(ktxx.getTopic_name());
				ktsbBasicInfoForm.setKtsb_belongValley(ktxx.getBelong_valley());
				ktsbBasicInfoForm.setKtsb_issueIntro(ktxx.getIntroduce());
				ktsbBasicInfoForm.setKtsb_startYearMonth(ktxx.getStart_year_month());
				ktsbBasicInfoForm.setKtsb_endYearMonth(ktxx.getEnd_year_month());
				if(!ktxxResultlist.isEmpty()){
					String[] achievement = new String[100];
					int i=0;
					for(KtxxResult ktxxResult :ktxxResultlist){
						achievement[i] = ktxxResult.getResult();
						i++;
					}
					ktsbBasicInfoForm.setAchievement(achievement);
				}
				return ktsbBasicInfoForm;
			}
		}
		return null;
	}

	public List<People> searchDirectorByKT(String issueId)throws Exception {
		return this.peopleMapper.findPeopleForDirectorById(issueId);
		/**
		List<KtxxDirectorLink>  directorlinklist =	ktsbIssueLinkPublicDao.searchDirectorLinkByKT(issueId);
		List<People> peopellist = new ArrayList<People>();
		try{
			if(directorlinklist != null){
				for(KtxxDirectorLink ktxxDirectorLink :directorlinklist){
					People people = peopleServ.findPeopleById(ktxxDirectorLink.getPeopleId());
					peopellist.add(people);
				}
				if(!peopellist.isEmpty()){
					return peopellist;
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;*/
	}

	@Override
	public List<People> searchTechmemberByKT(String issueId) throws Exception {
		
		return this.peopleMapper.findPeopleForTechmemberById(issueId);
		/*
		List<KtxxTechmemberLink> techmemberlinklist = ktsbIssueLinkPublicDao.searchTechmemberLinkByKT(issueId);
		List<People> peoplelist = new ArrayList<People>();
		try{
			if(techmemberlinklist != null){
				for(KtxxTechmemberLink ktxxTechmemberLink :techmemberlinklist){
					People people = peopleServ.findPeopleById(ktxxTechmemberLink.getPeopleId());
					peoplelist.add(people);
				}
				if(!peoplelist.isEmpty()){
					return peoplelist;
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;*/
	}

	@Override
	public List<People> searchMainPeopleByKT(String issueId) throws Exception {
		return this.peopleMapper.findPeopleForPeopleLinkById(issueId);
		
		/*List<IssuePeopleLink> mainpeoplelinklist = ktxxMainPeopleLinkDao.findAllByIssueId(issueId);
		List<People> peoplelist = new ArrayList<People>();
		try{
			if(mainpeoplelinklist != null){
				for(IssuePeopleLink issuePeopleLink : mainpeoplelinklist){
					People people = peopleServ.findPeopleById(issuePeopleLink.getPeopleId());
					peoplelist.add(people);
				}
				if(!peoplelist.isEmpty()){
					return peoplelist;
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;*/
	}

	@Override
	public List<Cddw> searchCompanyByKT(String issueId)throws Exception {
		
		return this.cddwMapper.findCddwForCompanyLinkById(issueId);
		
		/*List<KtxxCompanyLink> companylinklist = ktsbIssueLinkPublicDao.searchCompanyLinkByKT(issueId);
		List<Cddw> cddwlist = new ArrayList<Cddw>();
		if(companylinklist != null){
			for(KtxxCompanyLink ktxxCompanyLink :companylinklist){
				Cddw cddw = cddwMapper.selectByPrimaryKey(ktxxCompanyLink.getCompanyId());
				cddwlist.add(cddw);
			}
			if(!cddwlist.isEmpty()){
				return cddwlist;
			}
		}
		return null;*/
	}

	@Override
	public String findktxxtext(String issueId) {
		StringBuffer ktxxtextjson = new StringBuffer();
		if(issueId != null){//目前存在该课题
			Ktxx ktxx = ktxxdao.getKtxx(issueId).get(0);
			if(ktxx != null){
				ktxxtextjson.append("{");
				ktxxtextjson.append("'necessitytext':'");//必要性分析
				ktxxtextjson.append(ktxx.getNecessity_analysis()).append("',");
				ktxxtextjson.append("'objective':'");//总体目标及指标
				ktxxtextjson.append(ktxx.getObjective()).append("',");
				ktxxtextjson.append("'techsolution':'");//技术方案
				ktxxtextjson.append(ktxx.getTech_solution()).append("',");
				ktxxtextjson.append("'basisinfo':'");//基础条件和优势
				ktxxtextjson.append(ktxx.getBasis_info()).append("',");
				ktxxtextjson.append("'memberinfo':'");//负责人及主要骨干人员
				ktxxtextjson.append(ktxx.getMember_info()).append("',");
				ktxxtextjson.append("'riskstext':'");//风险分析及对策
				ktxxtextjson.append(ktxx.getAnalysis()).append("',");
				ktxxtextjson.append("'orgmanager':'");//基础管理
				ktxxtextjson.append(ktxx.getOrg_manage()).append("'");
				ktxxtextjson.append("}");
				
			}
					
		}	
		return ktxxtextjson.toString();
	}
	
	@Override
	public void editOpinionReplay(OpinionReplay opinionReplay) throws Exception {
		if (StringUtils.isBlank(opinionReplay.getId())) {
			opinionReplay.setId(UUID.randomUUID()+"");
			opinionReplay.setCreateTime(Tools.getData());
			this.opinionReplayDao.insertSelective(opinionReplay);
		}else{
			this.opinionReplayDao.updateByPrimaryKeySelective(opinionReplay);
		}
		
	}

	@Override
	public OpinionReplay findOpinionReplay(OpinionReplay opinionReplay) throws Exception {
		return this.opinionReplayDao.findOpinionReplay(opinionReplay);
	}

	@Override
	public IssueOpinion findIssueOpinionForReplayByIssueId(String issueId)throws Exception {
		return this.issueOpinionDao.findIssueOpinionByIssueId(issueId);
	}

}
