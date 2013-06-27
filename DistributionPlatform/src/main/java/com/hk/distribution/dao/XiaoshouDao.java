package com.hk.distribution.dao;

import java.util.List;
import java.util.Map;

import com.hk.distribution.model.SaleMgt;
import com.hk.distribution.model.Xiaoshou;

public interface XiaoshouDao {

	public List<Xiaoshou> getXiaoshouList();
	
	public List<SaleMgt> getSaleMgtList(Map<String,String> map);
	
	public List<Xiaoshou> getMaxID();

	public List<Xiaoshou> getXiaoshou(Xiaoshou Xiaoshou);

	public void saveXiaoshou(Xiaoshou xiaoshou);

	public void updateXiaoshou(Xiaoshou xiaoshou);
	
	public void updateXiaoshouruku(Xiaoshou xiaoshou);
	
	public void deleteXiaoshouByID(List<String> xiaoshou_id);
}
