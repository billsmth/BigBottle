package com.hk.distribution.service;

import java.util.List;

import com.hk.distribution.model.Xiaoshou;

public interface XiaoshouService {

    public List<Xiaoshou> getXiaoshouList();
    public List<Xiaoshou> getXiaoshou(Xiaoshou Xiaoshou);
    public Xiaoshou getMaxID();

    public void saveXiaoshou(Xiaoshou kucun);

    public void updateXiaoshou(Xiaoshou kucun);

    public void deleteXiaoshouByKuanhao_id(List<String> Kuanhao_id);
}
