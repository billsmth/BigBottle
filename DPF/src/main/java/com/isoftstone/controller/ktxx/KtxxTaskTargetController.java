package com.isoftstone.controller.ktxx;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.isoftstone.model.ktxx.KtxxTaskTarget;
import com.isoftstone.service.ktxx.KtxxTaskTargetService;

@Controller
@RequestMapping("/ktxxtask")
public class KtxxTaskTargetController {

	@Autowired
	private KtxxTaskTargetService ktxxTaskService;
	
	@RequestMapping("/listall")
    @ResponseBody
    public List<KtxxTaskTarget> findAll(KtxxTaskTarget ktxxTaskTarget) {
        List<KtxxTaskTarget> list = ktxxTaskService.listAll(null);
        return list;
    }
	
	@RequestMapping("/del")
    @ResponseBody
    public String del(String id) {
		ktxxTaskService.delete(id);
        return "{'success':true}";
    }
	@RequestMapping("/add")
    @ResponseBody
    public String add(KtxxTaskTarget ktxxTaskTarget) {
		ktxxTaskService.insert(ktxxTaskTarget);
        return "{'success':true}";
    }
	
	@RequestMapping("/listtaskbykt")
    @ResponseBody
    public List<KtxxTaskTarget> selectByTaskTargetByKT(String issueId) {
        List<KtxxTaskTarget> list = ktxxTaskService.selectByTaskTargetByKT(issueId);
        return list;
    }
}
