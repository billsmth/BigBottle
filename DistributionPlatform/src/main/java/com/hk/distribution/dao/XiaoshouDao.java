package com.hk.distribution.dao;

import java.util.List;

import com.hk.distribution.model.Xiaoshou;

public interface XiaoshouDao {

	public List<Xiaoshou> getXiaoshouList();

	public List<Xiaoshou> getXiaoshou(Xiaoshou Xiaoshou);

	public void saveXiaoshou(Xiaoshou xiaoshou);

	public void updateXiaoshou(Xiaoshou xiaoshou);

	public void deleteXiaoshouByKuanhao_id(List<String> kuanhao_id);
}
