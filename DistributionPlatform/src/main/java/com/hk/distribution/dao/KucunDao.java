package com.hk.distribution.dao;

import java.util.List;

import com.hk.distribution.model.Kucun;

public interface KucunDao {

	public List<Kucun> getKucunList();

	public List<Kucun> getKucun(Kucun Kucun);

	public void saveKucun(Kucun kucun);

	public void updateKucun(Kucun kucun);

	public void deleteKucunByKuanhao_id(List<String> kuanhao_id);
}
