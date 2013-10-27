package com.isoftstone.controller.acl;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.isoftstone.model.acl.Menu;
import com.isoftstone.service.acl.MenuService;

@Controller
@RequestMapping("/menu")
public class MenuController {
    
    private final String P_NODE_STR = "{\"id\":%s, \"text\":%s, \"cls\":\"forum-ct\", \"leaf\":false, \"expanded\":%s, \"children\":[";
    private final String C_NODE_STR = "{\"id\":%s, \"text\":%s, \"cls\":\"forum-ct\", \"leaf\":true, \"qtitle\":%s, \"checked\":%s},";

    @Autowired
    private MenuService menuService;

    public MenuService getMenuService() {
        return menuService;
    }

    public void setMenuService(MenuService menuService) {
        this.menuService = menuService;
    }
    
    @RequestMapping("/edit")
    @ResponseBody
    public String edit(String ids, String roleId) {
        
        if(ids != null) {
            menuService.saveMenu(ids, roleId);
        }
        
        return "{'success':true}";
    }

    @RequestMapping(value="/findbyrole",produces = {"application/json;charset=UTF-8"})
    @ResponseBody
    public String findMenuByRole(HttpServletRequest request, String roleId) {
        
        List<Menu> allMenu = menuService.findMenu();
        List<String> linkedId = menuService.findMenuIdByRoleId(roleId);
        
        String parentNo = null;
        StringBuffer buff = new StringBuffer("[");
        for (Menu menu : allMenu) {
            if(parentNo == null) {
                // 第一次进来初始化parentNo
                parentNo = menu.getId();
            } else if(!parentNo.equals(menu.getParentNo())) {
                // 非第一次进来，开始一组新的父节点
                parentNo = menu.getId();
                // 减掉最后一个","
                buff.delete(buff.length() - 1, buff.length());
                buff.append("]},");
            }
            buff.append(this.createNoteStr(menu, linkedId));
        }
        // 减掉最后一个","
        buff.delete(buff.length() - 1, buff.length());
        buff.append("]}]");

        return buff.toString();
    }
    
    private String createNoteStr(Menu menu, List<String> linkedId) {
        String ret = "";
        if(StringUtils.isBlank(menu.getParentNo())) {
            ret = String.format(
                    P_NODE_STR,
                    "\"" + menu.getId() + "\"",
                    "\"" + menu.getMenuName() + "\"",
                    linkedId.contains(menu.getId())
                    );
        } else {
            ret = String.format(
                    C_NODE_STR,
                    "\"" + menu.getId() + "\"",
                    "\"" + menu.getMenuName() + "\"",
                    "\"" + menu.getMenuUrl() + "\"",
                    linkedId.contains(menu.getId())
                    );
        }
        
        return ret;
    }
}
