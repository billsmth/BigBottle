package com.isoftstone.controller.zjxx;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.isoftstone.model.zjxx.Zjxx;
import com.isoftstone.service.zjxx.ZjxxService;

@Controller
@RequestMapping("/zjxx")
public class ZjxxController {

    @Autowired
    private ZjxxService service;

    public ZjxxService getService() {
        return service;
    }

    public void setService(ZjxxService service) {
        this.service = service;
    }

    @RequestMapping("/listall")
    @ResponseBody
    public List<Zjxx> findAll() {

        List<Zjxx> list = service.findAll();
        return list;
    }
    
    @RequestMapping("/add")
    @ResponseBody
    public String add() {

        System.out.println("Add Method");
        return "{'success':true}";
    }
    
    @RequestMapping("/update")
    @ResponseBody
    public String update() {

        System.out.println("Update Method");
        return "{'success':true}";
    }
    
    @RequestMapping("/del")
    @ResponseBody
    public String del() {

        System.out.println("Del Method");
        return "{'success':true}";
    }
}
