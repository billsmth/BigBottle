package com.isoftstone.service.jxc;

import java.util.List;

import com.isoftstone.model.jxc.Jinhuo;

public interface JinhuoService {

    public List<Jinhuo> getJinhuoList();
    public Jinhuo getJinhuo(Jinhuo Jinhuo);
    public Jinhuo getMaxID();
    
    public void saveJinhuo(Jinhuo jinhuo);

    public void updateJinhuo(Jinhuo jinhuo);
    
    public void updateJinhuoruku(Jinhuo jinhuo);

    public void deleteJinhuoByKuanhao_id(List<String> Kuanhao_id);
    public void deleteJinhuoByID(List<String> jinhuo_id);
}
