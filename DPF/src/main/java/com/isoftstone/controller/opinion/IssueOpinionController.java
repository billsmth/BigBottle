package com.isoftstone.controller.opinion;

import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.isoftstone.common.Tools;
import com.isoftstone.model.acl.User;
import com.isoftstone.model.ktxx.Ktxx;
import com.isoftstone.model.opinion.IssueOpinion;
import com.isoftstone.model.opinion.IssueSpecialistLink;
import com.isoftstone.service.ktxx.KtxxService;
import com.isoftstone.service.opinion.IssueOpinionService;
import com.isoftstone.service.opinion.IssueSpecialistLinkService;

@Controller
@RequestMapping("/issueOpinion")
public class IssueOpinionController {

    @Autowired
    private IssueOpinionService service;
    
    @Autowired
    private IssueSpecialistLinkService linkService;
    
    @Autowired
    private KtxxService ktxxService;

    public IssueOpinionService getService() {
        return service;
    }

    public void setService(IssueOpinionService service) {
        this.service = service;
    }
    
    public IssueSpecialistLinkService getLinkService() {
        return linkService;
    }

    public void setLinkService(IssueSpecialistLinkService linkService) {
        this.linkService = linkService;
    }
    
    public KtxxService getKtxxService() {
        return ktxxService;
    }

    public void setKtxxService(KtxxService ktxxService) {
        this.ktxxService = ktxxService;
    }

//    @RequestMapping("/listall")
//    @ResponseBody
//    public List<IssueOpinion> findAll(IssueOpinion issueOpinion) {
//
//        List<IssueOpinion> list = service.findAll(issueOpinion);
//        return list;
//    }
    
    @RequestMapping(value="/getTempIssueOpinion",produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String getTempIssueOpinion(IssueOpinion issueOpinion, HttpServletRequest request) {
    	User user = (User) request.getSession().getAttribute("user");
    	issueOpinion.setPeopleId(user.getPeopleId());
        List<IssueOpinion> list = service.selectTempIssueOpinion(issueOpinion);
        if(list.size()>0){
        	issueOpinion=list.get(0);
        }
        JSONObject jo=new JSONObject();
        jo.accumulate("issueOpinion", issueOpinion);
        return jo.toString();
    }
    
    @RequestMapping("/getHistoryIssueOpinion")
    @ResponseBody
    public String getHistoryIssueOpinion(String id) {
    	IssueOpinion op=null;
        List<IssueOpinion> list = service.selectHistoryIssueOpinion(id);
        if(list.size()>0){
        	op=list.get(0);
        }
        JSONObject jo=new JSONObject();
        jo.accumulate("issueOpinion", op);
        return jo.toString();
    }
    
    @RequestMapping("/getIssueOpinionHistory")
    @ResponseBody
    public ModelAndView getIssueOpinionHistory(HttpServletRequest request, HttpServletResponse response,String issueId){
    	
    	List<IssueOpinion> issueOpinionList=service.findAll(issueId);
    	request.setAttribute("ISSUE_OPINION_HISTORY",issueOpinionList);
    	return new ModelAndView("historyComments"); 
    }
    
    @RequestMapping("/getZJOpinionHistory")
    @ResponseBody
    public ModelAndView getZJOpinionHistory(HttpServletRequest request, HttpServletResponse response,String issueId){
    	User user = (User) request.getSession().getAttribute("user");
    	
    	List<IssueOpinion> issueOpinionList=service.findZJOpinionHistory(issueId,user.getPeopleId());
    	request.setAttribute("ZJ_OPINION_HISTORY",issueOpinionList);
    	return new ModelAndView("zjhistoryComments"); 
    }

    @RequestMapping("/del")
    @ResponseBody
    public String del(String id) {
        service.delete(id);
        return "{'success':true}";
    }
    
    @RequestMapping("/edit")
    @ResponseBody
    public String edit(HttpServletRequest request, IssueOpinion issueOpinion) {
    	User user = (User) request.getSession().getAttribute("user");
    	
    	issueOpinion.setPeopleId(user.getPeopleId());
    	issueOpinion.setName(user.getPeopleName());
    	// 新建课题意见
        if (issueOpinion.getId() == null||issueOpinion.getId().equals("")) {
            issueOpinion.setId(UUID.randomUUID().toString());
            if(issueOpinion.getCreateTime()!=null){
            	issueOpinion.setCreateTime(Tools.getDataTime());
            	
            	// 更新课题状态为-修改中-3
            	updateIssueStatus(issueOpinion);
            }
            service.insert(issueOpinion);
        // 更新课题意见
        } else {
        	if(issueOpinion.getCreateTime()!=null){
            	issueOpinion.setCreateTime(Tools.getDataTime());
            	
            	// 更新课题状态为-修改中-3
            	updateIssueStatus(issueOpinion);
            }
            service.update(issueOpinion);
        }
        return "{'success':true}";
    }
    
    @RequestMapping("/zjyi")
    @ResponseBody
    public String zjyi(HttpServletRequest request, IssueOpinion issueOpinion) {
    	
    	User user = (User) request.getSession().getAttribute("user");
    	
    	issueOpinion.setPeopleId(user.getPeopleId());
    	issueOpinion.setName(user.getPeopleName());
    	// 新建课题意见
        if (issueOpinion.getId() == null||issueOpinion.getId().equals("")) {
            issueOpinion.setId(UUID.randomUUID().toString());
            if(issueOpinion.getCreateTime()!=null){
            	issueOpinion.setCreateTime(Tools.getDataTime());
            	submitIssueZjLink(issueOpinion.getIssueId(),issueOpinion.getPeopleId());
            }
            service.insert(issueOpinion);
        // 更新课题意见
        } else {
        	if(issueOpinion.getCreateTime()!=null){
            	issueOpinion.setCreateTime(Tools.getDataTime());
            	submitIssueZjLink(issueOpinion.getIssueId(),issueOpinion.getPeopleId());
            }
            service.update(issueOpinion);
        }
        return "{'success':true}";
    }
    
    private void updateIssueStatus(IssueOpinion issueOpinion) {
    	
    	Ktxx ktxx=new Ktxx();
    	ktxx.setId(issueOpinion.getIssueId());
    	
    	// 保存最近的课题课题状态
    	ktxx.setLast_status(issueOpinion.getIssueStatus());

    	// 更新课题状态为-修改中-3
    	ktxx.setStatus("3");
    	ktxxService.scapprove(ktxx);
    }
    
    private void submitIssueZjLink(String issueNo, String peopleId){
    	IssueSpecialistLink link=new IssueSpecialistLink();
    	link.setIssueId(issueNo);
    	link.setSpecialistId(peopleId);
    	link.setStatus("1");
    	linkService.update(link);
    }
    
    /***
     * 回复专家信息：查询专家回复信息列表
     * @param issueId 课题ID
     */
    @RequestMapping("/findIssueOpinionForReplayByIssueId")
    @ResponseBody
    public List<IssueOpinion> findIssueOpinionForReplayByIssueId(HttpServletRequest request, String issueId){
    	List<IssueOpinion> list=null;
		try {
			list = this.service.findIssueOpinionForReplayByIssueId(issueId);
		} catch (Exception e) {
			e.printStackTrace();
		}
    	return list;
    }
    
    @RequestMapping("/findIssueOpinionById")
    @ResponseBody
    public String findIssueOpinionById(String id){
    	IssueOpinion issueOpinion=null;
    	try {
			issueOpinion=this.service.findIssueOpinionById(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
    	 JSONObject jo=new JSONObject();
         jo.accumulate("issueOpinion", issueOpinion);
         return jo.toString();
    }
    
    //最新的意见
    @RequestMapping(value="/getNewestIssueOpinion",produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String getNewestIssueOpinion(IssueOpinion issueOpinion, HttpServletRequest request) {
    	User user = (User) request.getSession().getAttribute("user");
    	issueOpinion.setPeopleId(user.getPeopleId());
        List<IssueOpinion> list = service.selectNewestIssueOpinion(issueOpinion);
        if(list.size()>0){
        	issueOpinion=list.get(0);
        }
        JSONObject jo=new JSONObject();
        jo.accumulate("issueOpinion", issueOpinion);
        return jo.toString();
    }
}
