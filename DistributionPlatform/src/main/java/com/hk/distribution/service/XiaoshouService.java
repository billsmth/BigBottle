package com.hk.distribution.service;

import java.util.List;
import java.util.Map;

import com.hk.distribution.model.SaleMgt;
import com.hk.distribution.model.Xiaoshou;

public interface XiaoshouService {

    public List<Xiaoshou> getXiaoshouList();
    
    public List<SaleMgt> getSaleMgtList(Map<String,String> map);
    
    public Xiaoshou getXiaoshou(Xiaoshou Xiaoshou);
    
    public Xiaoshou getMaxID();

    public void saveXiaoshou(Xiaoshou kucun);

    public void updateXiaoshou(Xiaoshou kucun);
    public void updateXiaoshouruku(Xiaoshou kucun);

    public void deleteXiaoshouByID(List<String> xiaoshou_id);
}
