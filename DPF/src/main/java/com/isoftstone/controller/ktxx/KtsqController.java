package com.isoftstone.controller.ktxx;

import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.isoftstone.common.ApproveStatus;
import com.isoftstone.model.acl.User;
import com.isoftstone.model.ktxx.Ktsq;
import com.isoftstone.service.ktxx.KtsqService;

@Controller
@RequestMapping("/ktsq")
public class KtsqController {

    @Autowired
    private KtsqService service;

    public KtsqService getService() {
        return service;
    }

    public void setService(KtsqService service) {
        this.service = service;
    }

    @RequestMapping("/listall")
    @ResponseBody
    public List<Ktsq> findAll(HttpServletRequest request, Ktsq ktsq) {

        User user = (User)request.getSession().getAttribute("user");
        String flag = request.getParameter("flag");
        List<Ktsq> list = service.findAll(ktsq, flag, user.getOrgId(), user.getPeopleId(),user.getRoleId());
        return list;
    }

    @RequestMapping("/del")
    @ResponseBody
    public String del(String id) {
        service.delete(id);
        return "{'success':true}";
    }

    @RequestMapping("/edit")
    @ResponseBody
    public String edit(HttpServletRequest request, Ktsq ktsq) {

        User user = (User)request.getSession().getAttribute("user");

        if (StringUtils.isBlank(ktsq.getId())) {
            ktsq.setId(UUID.randomUUID().toString());
            ktsq.setCreateBy(user.getId());
            ktsq.setCreateByName(user.getUserId());
            ktsq.setCreateOrg(user.getOrgId());
            ktsq.setModifyBy(user.getId());
            ktsq.setModifyByName(user.getUserId());
            if (!"1".equals(ktsq.getStatus())) {
                ktsq.setStatus(ApproveStatus.CREATED);
            }
            ktsq.setLastStatus(ApproveStatus.SUBIMTTED);
    		String initBudget="{\"budgetName\":\"\",\"id\":\"root\",\"investmentBank\":\"\",\"investmentCenGov\":\"\",\"investmentEnterprise\":\"\",\"investmentLocGov\":\"\",\"investmentOther\":\"\",\"investmentSum\":\"\",\"leaf\":false,\"children\":[{\"budgetName\":\"合计\",\"id\":\"25333w4esessd\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":false,\"children\":[{\"budgetName\":\"一、研究经费\",\"id\":\"hghhvkvhvhgh\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":false,\"children\":[{\"budgetName\":\"（一）直接费用\",\"id\":\"fgdfdfdfgd\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":false,\"children\":[{\"budgetName\":\"1.设备费\",\"id\":\"kjjjkjnjn\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":false,\"children\":[{\"budgetName\":\"（1）设备购置费\",\"id\":\"jhjhjkh\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"（2）试制改造费\",\"id\":\"kkkjjlj\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"（3）租赁使用费\",\"id\":\"jhjkjkj\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true}]},{\"budgetName\":\"2.材料费\",\"id\":\"hghkghghg\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"3.测试化验加工费\",\"id\":\"jhjhjjhjhj\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"4.燃料动力费\",\"id\":\"5657ftfgf\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"5.差旅费\",\"id\":\"uyugyugoyfuf\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"6.会议费\",\"id\":\"hjsxrxx\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"7.国际合作与交流费\",\"id\":\"hjvhjvhjv\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"8.出版、文献、信息费\",\"id\":\"hghv\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"9.劳务费\",\"id\":\"dfdfdfghd\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"10.专家咨询费\",\"id\":\"werewww\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"11.基本建设费\",\"id\":\"uiuiuiu\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":false,\"children\":[{\"budgetName\":\"（1）房屋建筑构造\",\"id\":\"xzxzzcxzcxz\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"（2）专用设备购置\",\"id\":\"xcbxxvxv\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"（3）基础设施建设\",\"id\":\"eireirjeirj\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"（4）大型修缮\",\"id\":\"kdfdnfmdnfd\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"（5）信息网络建设\",\"id\":\"adfkdfx\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"（6）其他基本建设支出\",\"id\":\"dfjdlfj\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true}]},{\"budgetName\":\"12.其他费用\",\"id\":\"dkfndkvnkv\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true}]},{\"budgetName\":\"（二）间接费用\",\"id\":\"dkfdksnfd\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":false,\"children\":[{\"budgetName\":\"1.管理费\",\"id\":\"nvkdkfdfd\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"2.项目收益\",\"id\":\"sannvlnvl\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true}]},{\"budgetName\":\"（三）不可预见费\",\"id\":\"snfldsnfld\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true}]},{\"budgetName\":\"二、中间试验(制)费\",\"id\":\"pilot_experiment\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true},{\"budgetName\":\"三、产业化经费\",\"id\":\"industrialization\",\"investmentBank\":0,\"investmentCenGov\":0,\"investmentEnterprise\":0,\"investmentLocGov\":0,\"investmentOther\":0,\"investmentSum\":0,\"leaf\":true}]}]}";
            service.insert(ktsq, initBudget);
        } else {
            ktsq.setModifyBy(user.getId());
            ktsq.setModifyByName(user.getUserId());
            service.update(ktsq);
        }
        return "{'success':true}";
    }
    
    @RequestMapping("/assigned")
    @ResponseBody
    public String assigned(Ktsq ktsq) {

        if (StringUtils.isBlank(ktsq.getId())) {
            ktsq.setStatus(ApproveStatus.ASSIGNED);
            service.update(ktsq);
        }
        return "{'success':true}";
    }
}
