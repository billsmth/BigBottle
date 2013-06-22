package com.hk.distribution.dao;

import java.util.List;

import com.hk.distribution.model.Baobiao;

public interface BaobiaoDao {

	public List<Baobiao> getBaobiaoList();
	public List<Baobiao> searchBaobiaoList(Baobiao baobiao);
	public List<Baobiao> getBaobiao(Baobiao Baobiao);
	public List<Baobiao> getMaxID();
	
	public List<Baobiao> getBaobiaobyKYC(Baobiao Baobiao);
	
	public void saveBaobiao(Baobiao baobiao);

	public void updateBaobiao(Baobiao baobiao);

	public void deleteBaobiaoByKuanhao_id(List<String> kuanhao_id);
}
