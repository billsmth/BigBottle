package com.isoftstone.dao.jxc;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.jxc.Kehu;

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
