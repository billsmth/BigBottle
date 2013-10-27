package com.isoftstone.dao.jxc;

import java.util.List;

import com.isoftstone.model.jxc.Kucun;

public interface KucunDao {

	public List<Kucun> getKucunList();

	public List<Kucun> getKucun(Kucun Kucun);
	public List<Kucun> getMaxID();
	
	public List<Kucun> getKucunbyKYC(Kucun Kucun);
	
	public void saveKucun(Kucun kucun);

	public void updateKucun(Kucun kucun);

	public void deleteKucunByKuanhao_id(List<String> kuanhao_id);
}
