package com.isoftstone.controller.opinion;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.isoftstone.model.ktxx.Ktxx;
import com.isoftstone.model.opinion.IssueSpecialistLink;
import com.isoftstone.service.ktxx.KtxxService;
import com.isoftstone.service.opinion.IssueSpecialistLinkService;

@Controller
@RequestMapping("/issuesl")
public class IssueSpecialistLinkController {

    @Autowired
    private IssueSpecialistLinkService service;
    @Autowired
    private KtxxService ktxxService;
    

    public IssueSpecialistLinkService getService() {
        return service;
    }
    
    public void setService(IssueSpecialistLinkService service) {
        this.service = service;
    }

    
    public KtxxService getKtxxService() {
        return ktxxService;
    }

    public void setKtxxService(KtxxService ktxxService) {
        this.ktxxService = ktxxService;
    }

    @RequestMapping("/del")
    @ResponseBody
    public String del(String id) {
        service.delete(id);
        return "{'success':true}";
    }
    
    @RequestMapping("/noopinionzj")
    @ResponseBody
    public String noOpinionZJ(String id) {
        int cnt=service.noopinionzj(id);
        return "{'success':true,'cnt':"+cnt+"}";
    }
    
    @RequestMapping("/getpinionzj")
    @ResponseBody
    public String getOpinionZJ(String id) {
    	List<IssueSpecialistLink> list=service.listAll(id);
    	String val="";
    	for(IssueSpecialistLink isl:list){
    		val+=isl.getSpecialistId()+",";
    	}
    	if(list.size()>0){
    		if(val.endsWith(",")){
    			val=val.substring(0,val.length()-1);
    		}
    		val="\""+val+"\"";
    	}
        return "{'success':true,'val':'"+val+"'}";
    }
    
    
    
    @RequestMapping("/edit")
    @ResponseBody
    public String edit(String userIds,String issueId) {
    	
    	List<IssueSpecialistLink> linkList=service.listAll(issueId);
    	IssueSpecialistLink link=null,linkInsert=null;
    	
    	if(userIds.endsWith(",")){
			userIds=userIds.substring(0,userIds.length()-1);
		}
    	
    	String [] ids=userIds.split(",");
    	int j=0;
    	for(int i=0;i<ids.length;i++){
    		
    		j=0;
    		for(;j<linkList.size();j++){
    			link=linkList.get(j);
    			
    			// 判断link是否存在,存在就不理睬
    			if(ids[i].equals(link.getSpecialistId())){
    				linkList.remove(j);
    				j=j-1;
    				break;
    			}
    		}
    		
    		// 添加没有的link
    		if(j>=linkList.size()){
    			linkInsert=new IssueSpecialistLink();
    			linkInsert.setId(UUID.randomUUID().toString());
    			linkInsert.setIssueId(issueId);
    			linkInsert.setSpecialistId(ids[i]);
    			linkInsert.setStatus("0");
        		service.insert(linkInsert);
    		}
    	}
    	// 删除多余的link
    	for(int i=0;i<linkList.size();i++){
    		service.delete(linkList.get(i).getId());
    	}
    	
    	//更新课题状态
    	Ktxx ktxx=null;
    	List<Ktxx> ktxxList=ktxxService.getKtxx(issueId);
    	
    	if(ktxxList.size()>0){
    		ktxx=ktxxList.get(0);
    		ktxx.setLast_status(ktxx.getStatus());
    		ktxx.setStatus("5");
    		ktxxService.scapprove(ktxx);
    	}
    	
        return "{'success':true}";
    }
}
