package com.isoftstone.dao;

import java.util.List;

import com.isoftstone.model.cddw.Cddw;

public interface CddwMapper {
    int deleteByPrimaryKey(String idorg);

    int insert(Cddw record);

    int insertSelective(Cddw record);

    Cddw selectByPrimaryKey(String idorg);

    int updateByPrimaryKeySelective(Cddw record);

    int updateByPrimaryKey(Cddw record);

	List<Cddw> findAllCddw(Cddw cddw);

	List<Cddw> findCddwForCompanyLinkById(String issueId);
}