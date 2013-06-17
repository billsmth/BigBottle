package com.hk.distribution.dao;

import java.util.List;

import com.hk.distribution.model.Jinhuo;

public interface JinhuoDao {

	public List<Jinhuo> getJinhuoList();

	public List<Jinhuo> getJinhuo(Jinhuo Jinhuo);

	public List<Jinhuo> getMaxID();
	
	public void saveJinhuo(Jinhuo jinhuo);

	public void updateJinhuo(Jinhuo jinhuo);
	
	public void updateJinhuoruku(Jinhuo jinhuo);
	

	public void deleteJinhuoByKuanhao_id(List<String> kuanhao_id);
}
