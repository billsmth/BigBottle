package com.isoftstone.service.jxc;

import java.util.List;
import java.util.Map;

import com.isoftstone.model.jxc.SaleMgt;
import com.isoftstone.model.jxc.Xiaoshou;

public interface XiaoshouService {

    public List<Xiaoshou> getXiaoshouList(Map<String,String> map);
    
    public List<SaleMgt> getSaleMgtList(Map<String,String> map);
    
    public Xiaoshou getXiaoshou(Xiaoshou Xiaoshou);
    
    public Xiaoshou getMaxID();

    public void saveXiaoshou(Xiaoshou kucun);

    public void updateXiaoshou(Xiaoshou kucun);
    public void updateXiaoshouruku(Xiaoshou kucun);

    public void deleteXiaoshouByID(List<String> xiaoshou_id);
}
