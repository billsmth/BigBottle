package com.isoftstone.service.ktsb;

import java.text.ParseException;
import java.util.List;

import com.isoftstone.model.cddw.Cddw;
import com.isoftstone.model.ktsb.KtsbBasicInfoForm;
import com.isoftstone.model.ktxx.IssuePlan;
import com.isoftstone.model.ktxx.KtxxSfgc;
import com.isoftstone.model.ktxx.KtxxTaskTarget;
import com.isoftstone.model.ktxx.ResearchOutlay;
import com.isoftstone.model.ktxx.ResearchTask;
import com.isoftstone.model.opinion.IssueOpinion;
import com.isoftstone.model.opinion.OpinionReplay;
import com.isoftstone.model.people.People;


public interface KtsbService {

	public List<IssuePlan> findIssuePlanByIssueId(String issueId)throws Exception;
	
	public void saveIssuePlan(IssuePlan ip);
	
	public void updateIssuePlan(IssuePlan ip);

	public void delIssuePlanById(String id) throws Exception;

	public void saveResearchOutlay(ResearchOutlay researchOutlay) throws Exception;

	public void updateResearchOutlay(ResearchOutlay researchOutlay) throws Exception;

	public void delResearchOutlayById(String id) throws Exception;

	public List<ResearchOutlay> listResearchOutlay(String issueId) throws Exception;
	
	public String save(String issueId);
	
	public List<ResearchTask> rtFindAll(ResearchTask rt);

	public void saveResearchTask(ResearchTask rt);
	
	public void updateResearchTask(ResearchTask rt);
	
	public void delResearchTask(String id);
	
	public String draftSave(boolean submitFlag,String issueId,KtsbBasicInfoForm ktsbBasicForm,List<People> xzPeoplelist,List<People> skillPeoplelist,List<Cddw> cddwlist,
			String necessitytext,String objAndKpitext,List<KtxxTaskTarget> taskTargetlist,List<KtxxSfgc> sfgclist,String solutiontext,
			String advantagetext,String mainPeopletext,List<People> capabilityPeoplelist,List<IssuePlan> otherKts,String orgAndMngtext,
			String riskstext,List<ResearchTask> researchTasklist,List<ResearchOutlay> researchOutlaylist,String budgets) throws ParseException, Exception;

	public KtsbBasicInfoForm searchBasicFormByKT(String issueId);
	public List<People> searchDirectorByKT(String issueId) throws Exception;
	public List<People> searchTechmemberByKT(String issueId) throws Exception;
	public List<People> searchMainPeopleByKT(String issueId) throws Exception;
	public List<Cddw> searchCompanyByKT(String issueId) throws Exception;
	public String findktxxtext(String issueId);
	public void editOpinionReplay(OpinionReplay opinionReplay)throws Exception;

	public OpinionReplay findOpinionReplay(OpinionReplay opinionReplay)throws Exception;

	public IssueOpinion findIssueOpinionForReplayByIssueId(String issueId)throws Exception;
}
