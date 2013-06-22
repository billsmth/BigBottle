package com.hk.distribution.service;

import java.util.List;

import com.hk.distribution.model.Baobiao;

public interface BaobiaoService {

    public List<Baobiao> getBaobiaoList();
    public List<Baobiao> getBaobiaoList(Baobiao baobiao);
    public Baobiao getBaobiao(Baobiao Baobiao);
    
    public Baobiao getBaobiaobyKYC(Baobiao Baobiao);

    public void saveBaobiao(Baobiao baobiao);
    public Baobiao getMaxID();
    public void updateBaobiao(Baobiao baobiao);

    public void deleteBaobiaoByKuanhao_id(List<String> Kuanhao_id);
}
