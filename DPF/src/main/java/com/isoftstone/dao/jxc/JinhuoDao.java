package com.isoftstone.dao.jxc;

import java.util.List;

import com.isoftstone.model.jxc.Jinhuo;

public interface JinhuoDao {

	public List<Jinhuo> getJinhuoList();

	public List<Jinhuo> getJinhuo(Jinhuo Jinhuo);

	public List<Jinhuo> getMaxID();
	
	public void saveJinhuo(Jinhuo jinhuo);

	public void updateJinhuo(Jinhuo jinhuo);
	
	public void updateJinhuoruku(Jinhuo jinhuo);
	

	public void deleteJinhuoByKuanhao_id(List<String> kuanhao_id);
	
	public void deleteJinhuoByID(List<String> jinhuo_id);
}
