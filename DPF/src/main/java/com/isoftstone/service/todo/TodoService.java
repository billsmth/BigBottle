package com.isoftstone.service.todo;

import java.util.List;

import com.isoftstone.model.acl.User;
import com.isoftstone.model.todo.Todo;

public interface TodoService {

    public List<Todo> findAll(User user);
}
