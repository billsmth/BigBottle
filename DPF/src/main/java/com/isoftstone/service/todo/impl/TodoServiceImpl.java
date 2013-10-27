package com.isoftstone.service.todo.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isoftstone.dao.todo.TodoDao;
import com.isoftstone.model.acl.User;
import com.isoftstone.model.todo.Todo;
import com.isoftstone.service.todo.TodoService;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoDao todoDao;

    public TodoDao getTodoDao() {
        return todoDao;
    }

    public void setTodoDao(TodoDao todoDao) {
        this.todoDao = todoDao;
    }

    @Override
    public List<Todo> findAll(User user) {
        Map<String, String> params = new HashMap<String, String>();
        params.put("orgId", user.getOrgId());
        params.put("peopleId", user.getPeopleId());
        List<Todo> list = todoDao.findAll(params);
        return list;
    }

}
