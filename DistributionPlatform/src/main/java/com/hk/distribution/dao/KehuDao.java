package com.hk.distribution.dao;

import java.util.List;

import com.hk.distribution.model.Kehu;

public interface KehuDao {

	public List<Kehu> getKehuList();
	public List<Kehu> searchKehuList(Kehu kehu);
	public List<Kehu> getKehu(Kehu Kehu);
	public List<Kehu> getMaxID();
	
	public List<Kehu> getKehubyKYC(Kehu Kehu);
	
	public void saveKehu(Kehu kehu);

	public void updateKehu(Kehu kehu);

	public void deleteKehuByKuanhao_id(List<String> kuanhao_id);
}
