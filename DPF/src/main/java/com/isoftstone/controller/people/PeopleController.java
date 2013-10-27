package com.isoftstone.controller.people;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.isoftstone.model.people.People;
import com.isoftstone.service.people.PeopleService;

@Controller
@RequestMapping("/people")
public class PeopleController {
	
	private PeopleService peopleService;

	@Autowired
	public void setPeopleService(PeopleService peopleService) {
		this.peopleService = peopleService;
	}
	
	@RequestMapping("/listall")
    @ResponseBody
    public List<People> findAll(@ModelAttribute People people) {
        List<People> list=null;
		try {
			list = peopleService.findAll(people);
		} catch (Exception e) {
			// TODO Auto-generated catch block  "{'success':true,msg:'0'}"
			e.printStackTrace();
		}
        return list;
    }
	
	@RequestMapping("/listallpeople")
    @ResponseBody
    public List<KtspPeople> findAllPeople(@ModelAttribute People people,String userIds,String group) {
        List<People> list=null;
        List<KtspPeople> ktspList=new ArrayList<KtspPeople>();
        KtspPeople kp=null;
        
        if(people==null){
        	people=new People();
        }
        
    	if(group!=null&&!group.equals("")&&group.equals("0101")){
    		people.setRcType("3");
    	}else if(group!=null&&!group.equals("")&&group.equals("0201")){
    		people.setRcType("4");
    	}
    	if(userIds!=null&&!userIds.equals("")){
    		if(userIds.endsWith(",")){
    			userIds=userIds.substring(0,userIds.length()-1);
    		}
        	userIds="\'"+userIds.replaceAll(",", "\',\'")+"\'";
        	people.setSpecialtyIntro(userIds);
        }
		try {
			list = peopleService.findMixed(people);
			for(People p:list){
				kp=new KtspPeople();
				kp.setKey(p.getIdpeople());
				kp.setValue(p.getName());
				ktspList.add(kp);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block  "{'success':true,msg:'0'}"
			e.printStackTrace();
		}
        return ktspList;
    }
	
	private class KtspPeople{
		String key;
		String value;
		public String getKey() {
			return key;
		}
		public void setKey(String key) {
			this.key = key;
		}
		public String getValue() {
			return value;
		}
		public void setValue(String value) {
			this.value = value;
		}
	}
	
   @RequestMapping("/findById")
   @ResponseBody
    public People findById(String idpeople) {
	   People people =null;
	        try {
	        	people=this.peopleService.findPeopleById(idpeople);
	        	String json=JSONObject.fromObject(people).toString();
			} catch (Exception e) {
				e.printStackTrace();
			}
	        return people;
	    }
    
    
    @RequestMapping("/del")
    @ResponseBody
    public String del(String idpeople) {
        try {
			this.peopleService.deletePeople(idpeople);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return "{'success':true}";
    }

    
    @RequestMapping("/edit")
    @ResponseBody
    public String edit(@ModelAttribute People people) {
    	try {
    		if (StringUtils.isBlank(people.getIdpeople())) {
    			this.peopleService.savePeople(people);
    		} else {
    			this.peopleService.updatePeople(people);
    		}
        } catch (Exception e) {
			e.printStackTrace();
		}
        return "{'success':true,'idpeople':'"+people.getIdpeople()+"'}";
    }
    
    @RequestMapping(value="/findbm",produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String findbm(HttpServletRequest request) {

        
        return "[{\"id\":\"0100\", \"text\":\"咨询专家\", \"cls\":\"forum-ct\", \"leaf\":false, \"children\":[{\"id\":\"0101\", \"text\":\"住建部\", \"cls\":\"forum-ct\", \"leaf\":true, \"qtitle\":\"null\"}]},{\"id\":\"0200\", \"text\":\"课题专家\", \"cls\":\"forum-ct\", \"leaf\":false, \"children\":[{\"id\":\"0201\", \"text\":\"建设部\", \"cls\":\"forum-ct\", \"leaf\":true, \"qtitle\":\"null\"}]}]";
    }
}
