package com.isoftstone.controller.ktsb;

import java.text.ParseException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.alibaba.fastjson.serializer.SerializerFeature;
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
import com.isoftstone.service.ktsb.KtsbService;



@Controller
@RequestMapping("/ktsb")
public class KtsbController {
	
	private KtsbService service;

	@Autowired
	public void setService(KtsbService service) {
		this.service = service;
	}
	
	//专家意见回复
	@RequestMapping("/editOpinionReplay")
	@ResponseBody
	public String editOpinionReplay(OpinionReplay opinionReplay){
		try {
			this.service.editOpinionReplay(opinionReplay);
		} catch (Exception e) {
			e.printStackTrace();
		}
	    return "{'success':true}";
	}
	
	//专家意见回复
	@RequestMapping(value="/findOpinionReplay",produces = {"application/json;charset=UTF-8"})
	@ResponseBody
	public String findOpinionReplay(OpinionReplay opinionReplay){
		try {
			opinionReplay=this.service.findOpinionReplay(opinionReplay);
		} catch (Exception e) {
			e.printStackTrace();
		}
		 JSONObject json=new JSONObject();
		 json.accumulate("opinionReplay", opinionReplay);
        return json.toString();
	}
	
	/***
     * 回复专家信息：查询专家回复信息列表
     * @param issueId 课题ID
     */
    @RequestMapping("/findIssueOpinionByIssueId")
    @ResponseBody
    public String findIssueOpinionByIssueId(HttpServletRequest request, String issueId){
    	IssueOpinion issueOpinion=null;
		try {
			issueOpinion = this.service.findIssueOpinionForReplayByIssueId(issueId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		JSONObject json=new JSONObject();
		json.accumulate("issueOpinion", issueOpinion);
    	return json.toString();
    }
	
	/**
	 * 
	 * @param issueId	课题ID
	 * @param ktsbBasicForm 课题基本信息
	 * @param ktsbPeoples 课题行政负责人(grid)
	 * @param skillPeoples 课题技术负责人(grid)
	 * @param companys 课题支持单位(grid)
	 * @param necessitytext 必要性分析
	 * @param objAndKpitext 总体目标及指标
	 * @param taskTargets 任务目标(grid)
	 * @param sfgcs	示范工程及配套条件(grid)
	 * @param solutiontext 技术方案
	 * @param advantagetext 基础条件及优势
	 * @param mainPeopletext 负责人及骨干人员
	 * @param capabilitys 主要人员情况(grid)
	 * @param otherKts 其他课题情况(grid)
	 * @param orgAndMngtext 课题组织及管理机制
	 * @param riskstext 风险分析及对策
	 * @param researchTasks 研究任务设置(grid)
	 * @param researchFunds 研究经费按单位分配(grid)
	 *  @param budgets 研究经费按单位分配(treegrid)
	 * @return
	 */
	//课题申报-保存草稿
	@SuppressWarnings("unused")
	@RequestMapping("/draftSave")
	@ResponseBody
	public String draftSave(boolean submitFlag,String issueId,String ktsbBasicForm,String ktsbPeoples,String skillPeoples,String companys,
			String necessitytext,String objAndKpitext,String taskTargets,String sfgcs,String solutiontext,
			String advantagetext,String mainPeopletext,String capabilitys,String otherKt,String orgAndMngtext,
			String riskstext,String researchTasks,String researchFunds,String budgets){
		try {
//			issueId = "50a9cec8-c9cb-46ee-a90c-7dfd549a647d";
			KtsbBasicInfoForm ktsbBasicInfoFormBean = JSON.parseObject(ktsbBasicForm,KtsbBasicInfoForm.class);
			List<People> xzPeoplelist = JSON.parseObject(ktsbPeoples,new TypeReference<List<People>>(){});
			List<People> skillPeoplelist = JSON.parseObject(skillPeoples,new TypeReference<List<People>>(){});
			List<Cddw> cddwlist = JSON.parseObject(companys,new TypeReference<List<Cddw>>(){});
			String necessityText = (String)JSON.parse(necessitytext);
			String objAndKpiText = (String)JSON.parse(objAndKpitext);
			List<KtxxTaskTarget> taskTargetlist = JSON.parseObject(taskTargets,new TypeReference<List<KtxxTaskTarget>>(){});
			List<KtxxSfgc> sfgclist = JSON.parseObject(sfgcs,new TypeReference<List<KtxxSfgc>>(){});
			String solutionText = (String)JSON.parse(solutiontext);
			String advantageText = (String)JSON.parse(advantagetext);
			String mainPeopleText = (String)JSON.parse(mainPeopletext);
			List<People> capabilityPeoplelist = JSON.parseObject(capabilitys,new TypeReference<List<People>>(){});
			List<IssuePlan> otherKts = JSON.parseObject(otherKt,new TypeReference<List<IssuePlan>>(){});
			String orgAndMngText = (String)JSON.parse(orgAndMngtext);
			String risksText = (String)JSON.parse(riskstext);
			List<ResearchTask> researchTasklist = JSON.parseObject(researchTasks,new TypeReference<List<ResearchTask>>(){});
			List<ResearchOutlay> researchOutlaylist = JSON.parseObject(researchFunds,new TypeReference<List<ResearchOutlay>>(){});
			System.out.println(budgets);
			
			service.draftSave(submitFlag,issueId, ktsbBasicInfoFormBean, xzPeoplelist, skillPeoplelist, cddwlist, 
								necessityText, objAndKpiText, taskTargetlist, sfgclist, solutionText, 
								advantageText, mainPeopleText, capabilityPeoplelist, otherKts, orgAndMngText, 
								risksText, researchTasklist, researchOutlaylist, budgets);
		} catch (ParseException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "{'success':true}";
	}
	@RequestMapping("/save")
	@ResponseBody
	public String save(String issueId){
		
		service.save(issueId);
		return "{'success':true}"; 
		
	}
	//材料申报--基础条件及优势--其他课题承担情况查询
	@RequestMapping("/listIssuePlan")
    @ResponseBody
    public List<IssuePlan> findIssuePlan(String issueId) {
        List<IssuePlan> list=null;
		try {
			if(issueId!=null&&!"".equals(issueId)){
				list = service.findIssuePlanByIssueId(issueId);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
        return list;
    }
	//材料申报--基础条件及优势--其他课题承担情况添加
	@RequestMapping("/addIssuePlan")
    @ResponseBody
    public String addIssuePlan(IssuePlan ip) {
    	try {
			this.service.saveIssuePlan(ip);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return "{'success':true}";
    }
	//材料申报--基础条件及优势--其他课题承担情况编辑
    @RequestMapping("/updateIssuePlan")
    @ResponseBody
    public String updateIssuePlan(IssuePlan ip) {
    	try {
			this.service.updateIssuePlan(ip);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return "{'success':true}";
    }
    //材料申报--基础条件及优势--其他课题承担情况编辑:删除操作
    @RequestMapping("/delIssuePlanById")
    @ResponseBody
    public String delIssuePlanById(String id) {
    	try {
			this.service.delIssuePlanById(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return "{'success':true}";
    }
    
    

    //经费及任务分析-->添加研究经费按单位分配信息:添加、修改操作
    @RequestMapping("/editResearchOutlay")
    @ResponseBody
    public String editResearchOutlay(ResearchOutlay researchOutlay) {
    	try {
			if(StringUtils.isBlank(researchOutlay.getId())){
				this.service.saveResearchOutlay(researchOutlay);
			}else{
				this.service.updateResearchOutlay(researchOutlay);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
        return "{'success':true}";
    }
    
    //经费及任务分析-->添加研究经费按单位分配信息:删除操作
    @RequestMapping("/delResearchOutlay")
    @ResponseBody
    public String delResearchOutlay(String id) {
    	try {
    		this.service.delResearchOutlayById(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return "{'success':true}";
    }
    
    //经费及任务分析-->添加研究经费按单位分配信息:查询操作
    @RequestMapping("/listResearchOutlay")
    @ResponseBody
    public List<ResearchOutlay> listResearchOutlay(String issueId) {
    	List<ResearchOutlay> list=null;
    	try {
    		if(issueId!=null &&!"".equals(issueId)){
    			list=this.service.listResearchOutlay(issueId);
    		}
		} catch (Exception e) {
			e.printStackTrace();
		}
        return list;
    }
    
    //材料申报--经费及任务分解--研究任务设置查询
  	@RequestMapping("/rtlistall")
	@ResponseBody
	public List<ResearchTask> rtFindAll(ResearchTask rt) {
        List<ResearchTask> list = service.rtFindAll(rt);
        return list;
    }
  	//材料申报--基本信息
  	@RequestMapping(value ="/bflistall",produces = {"application/json;charset=UTF-8"})
  	@ResponseBody
  	public String searchBasicInfoForm(String issueId){
  		KtsbBasicInfoForm ktsbBasicInfoForm = new KtsbBasicInfoForm();
  		 try{
  			ktsbBasicInfoForm =	service.searchBasicFormByKT(issueId);
  		 }catch(Exception e){
  			 e.printStackTrace();
  		 }
  		String text = JSON.toJSONString(ktsbBasicInfoForm, SerializerFeature.WriteClassName);
  		return text;
  	}
  	
  	@RequestMapping(value="/directorlistall")
  	@ResponseBody
  	public List<People> searchDirector(String issueId){
  		List<People> peoplelist=null;
		try {
			peoplelist = service.searchDirectorByKT(issueId);
		} catch (Exception e) {
			e.printStackTrace();
		}
  		return peoplelist;
  	}
  	
  	@RequestMapping(value="/mainpeoplelistall")
  	@ResponseBody
  	public List<People> searchMainPeople(String issueId){
  		List<People> peoplelist=null;
		try {
			peoplelist = service.searchMainPeopleByKT(issueId);
		} catch (Exception e) {
			e.printStackTrace();
		}
  		return peoplelist;
  	}
	@RequestMapping(value="/techmemberlistall")
  	@ResponseBody
  	public List<People> searchTechmember(String issueId){
		List<People> peoplelist=null;
		try {
			peoplelist = service.searchTechmemberByKT(issueId);
		} catch (Exception e) {
			e.printStackTrace();
		}
  		return peoplelist;
  	}
	@RequestMapping(value="/companylistall")
  	@ResponseBody
  	public List<Cddw> searchCompany(String issueId){
  		
		List<Cddw> cddwlist=null;
		try {
			cddwlist = service.searchCompanyByKT(issueId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return cddwlist;
  	}
	//材料申报-几个htmleditor的值
	@RequestMapping(value="/findktxxtext",produces = {"application/json;charset=UTF-8"})
	@ResponseBody
	public String searchKtxxText(String issueId){
		String textjson = service.findktxxtext(issueId);
		if(textjson != null){
			return textjson;
		}
		return "{'success':true}";
	}
  	//材料申报--经费及任务分解--研究任务设置添加
  	@RequestMapping("/rtadd")
    @ResponseBody
    public String rtAdd(ResearchTask rt) {
  		try {
  			this.service.saveResearchTask(rt);
  		} catch (Exception e) {
  			e.printStackTrace();
  		}
        return "{'success':true}";
    }
  	//材料申报--经费及任务分解--研究任务设置编辑
    @RequestMapping("/rtupdate")
    @ResponseBody
    public String rtUpdate(ResearchTask rt) {
      	try {
  			this.service.updateResearchTask(rt);
  		} catch (Exception e) {
  			e.printStackTrace();
  		}
        return "{'success':true}";
    }
    //材料申报--经费及任务分解--研究任务设置删除
    @RequestMapping("/rtdel")
    @ResponseBody
    public String rtDel(String id) {
    	try {
			this.service.delResearchTask(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return "{'success':true}";
    }
    
    

}
