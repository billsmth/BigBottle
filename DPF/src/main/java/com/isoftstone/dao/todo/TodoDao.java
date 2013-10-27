package com.isoftstone.dao.todo;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.todo.Todo;

public interface TodoDao {

    public List<Todo> findAll(Map<String, String> params);
}
