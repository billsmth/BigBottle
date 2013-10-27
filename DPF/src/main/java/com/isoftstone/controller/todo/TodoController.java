package com.isoftstone.controller.todo;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.isoftstone.model.acl.User;
import com.isoftstone.model.todo.Todo;
import com.isoftstone.service.todo.TodoService;

@Controller
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    private TodoService todoService;

    public TodoService getTodoService() {
        return todoService;
    }

    public void setTodoService(TodoService todoService) {
        this.todoService = todoService;
    }

    @RequestMapping("/listall")
    @ResponseBody
    public List<Todo> findAll(HttpServletRequest request) {
        User user = (User) request.getSession().getAttribute("user");
        List<Todo> list = null;

        // 如果有过滤器的话，user为null时就会转到登录，正常流程里，不会为null
        if (user != null) {
            list = todoService.findAll(user);
        } else {
            list = new ArrayList<Todo>();
        }

        return list;
    }
}
