package com.isoftstone.controller.ktxx;

import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.isoftstone.model.ktxx.BudgetItem;
import com.isoftstone.model.ktxx.IssueMeetingLink;
import com.isoftstone.model.ktxx.Ktxx;
import com.isoftstone.model.opinion.IssueOpinion;
import com.isoftstone.model.opinion.OpinionReplay;
import com.isoftstone.service.ktxx.IssueMeetingLinkService;
import com.isoftstone.service.ktxx.KtxxBudgetService;
import com.isoftstone.service.ktxx.KtxxService;
import com.isoftstone.service.opinion.IssueOpinionService;
import com.isoftstone.service.opinion.OpinionReplayService;

@Controller
@RequestMapping("/ktxx")
public class KtxxController {

    @Autowired
    private KtxxService service;
    
    @Autowired
    private IssueMeetingLinkService issueMeetingLinkService;
    
    @Autowired
    private KtxxBudgetService budgetService;
    
    @Autowired
    private IssueOpinionService ioservice;
    
    @Autowired
    private OpinionReplayService orservice;
    

    public IssueOpinionService getIoservice() {
		return ioservice;
	}

	public void setIoservice(IssueOpinionService ioservice) {
		this.ioservice = ioservice;
	}

	public KtxxService getService() {
        return service;
    }

    public void setService(KtxxService service) {
        this.service = service;
    }
    
    public KtxxBudgetService getBudgetService() {
		return budgetService;
	}

	public void setBudgetService(KtxxBudgetService budgetService) {
		this.budgetService = budgetService;
	}
	
	public IssueMeetingLinkService getIssueMeetingLinkService() {
		return issueMeetingLinkService;
	}

	public void setIssueMeetingLinkService(
			IssueMeetingLinkService issueMeetingLinkService) {
		this.issueMeetingLinkService = issueMeetingLinkService;
	}
	

	public OpinionReplayService getOrservice() {
		return orservice;
	}

	public void setOrservice(OpinionReplayService orservice) {
		this.orservice = orservice;
	}

	@RequestMapping("/listall")
    @ResponseBody
    public List<Ktxx> findAll(Ktxx ktxx) {

        List<Ktxx> list = service.findAll(ktxx);
        return list;
    }

    @RequestMapping("/del")
    @ResponseBody
    public String del(String id) {
        service.delete(id);
        return "{'success':true}";
    }
    
    @RequestMapping("/startxssc")
    @ResponseBody
    public String startXSSC(String id,String idmeeting) {
    	Ktxx ktxx=new Ktxx();
    	ktxx.setId(id);
    	ktxx.setLast_status("2");
    	ktxx.setStatus("4");
        service.scapprove(ktxx);
        
        // 添加课题和会议的关联关系
        IssueMeetingLink iml=new IssueMeetingLink();
        iml.setIssueId(id);
        iml.setMeetingId(idmeeting);
        issueMeetingLinkService.insert(iml);
        return "{'success':true}";
    }
    
    @RequestMapping("/starthyps")
    @ResponseBody
    public String startHYPS(String id, String idmeeting) {
    	Ktxx ktxx=new Ktxx();
    	ktxx.setId(id);
    	ktxx.setLast_status("5");
    	ktxx.setStatus("6");
        service.scapprove(ktxx);
        
        // 添加课题和会议的关联关系
        IssueMeetingLink iml=new IssueMeetingLink();
        iml.setIssueId(id);
        iml.setMeetingId(idmeeting);
        issueMeetingLinkService.insert(iml);
        
        return "{'success':true}";
    }
    
    @RequestMapping("/startfs")
    @ResponseBody
    public String startFS(String id,String idmeeting) {
    	Ktxx ktxx=new Ktxx();
    	ktxx.setId(id);
    	ktxx.setLast_status("6");
    	ktxx.setStatus("7");
        service.scapprove(ktxx);
        
        // 添加课题和会议的关联关系
        IssueMeetingLink iml=new IssueMeetingLink();
        iml.setIssueId(id);
        iml.setMeetingId(idmeeting);
        issueMeetingLinkService.insert(iml);
        return "{'success':true}";
    }
    
    @RequestMapping("/completefs")
    @ResponseBody
    public String completeFs(String id) {
    	Ktxx ktxx=new Ktxx();
    	ktxx.setId(id);
    	ktxx.setLast_status("7");
    	ktxx.setStatus("8");
        service.scapprove(ktxx);
        return "{'success':true}";
    }
    
    @RequestMapping("/completektsp")
    @ResponseBody
    public String completeKTSP(String id) {
    	Ktxx ktxx=new Ktxx();
    	ktxx.setId(id);
    	ktxx.setLast_status("8");
    	ktxx.setStatus("9");
        service.scapprove(ktxx);
        return "{'success':true}";
    }

    @RequestMapping("/edit")
    @ResponseBody
    public String edit(Ktxx ktxx) {

        if (ktxx.getId() == null) {
            ktxx.setId(UUID.randomUUID().toString());
            service.insert(ktxx);
        } else {
            service.update(ktxx);
        }
        return "{'success':true}";
    }
    
    
    @RequestMapping("/getXGHistory")
    @ResponseBody
    public ModelAndView getIssueXGHistory(HttpServletRequest request, HttpServletResponse response,String issueId){
    	
    	List<IssueOpinion> issueOpinionList=ioservice.findAll(issueId);
    	request.setAttribute("ISSUE_MODIFY_HISTORY",issueOpinionList);
    	
    	List<OpinionReplay> replayList=orservice.findAll(issueId);
    	request.setAttribute("OPINION_REPLAY_HISTORY",replayList);
    	
    	return new ModelAndView("xghistory"); 
    }
    
    @RequestMapping(value="/getBudgets", produces = {"application/json;charset=UTF-8"})
	@ResponseBody
	public String getBudgets() {
		List<BudgetItem> items = this.budgetService.selectBudgetByKT("25333w4esessd"); //FIXME: 
		String json = items.get(0).toJson();
		System.out.print(json);
		return json;
 	}
    @RequestMapping(value="/getBudgets1", produces = {"application/json;charset=UTF-8"})
	@ResponseBody
	public String getBudgets1(String issueId) {
    	String json = budgetService.selectKtxxBudgetByKt(issueId);
		System.out.print(json);
		return json;
 	}
}
