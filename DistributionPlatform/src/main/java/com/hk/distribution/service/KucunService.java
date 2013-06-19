package com.hk.distribution.service;

import java.util.List;

import com.hk.distribution.model.Kucun;
import com.hk.distribution.model.Xiaoshou;

public interface KucunService {

    public List<Kucun> getKucunList();
    public Kucun getKucun(Kucun Kucun);
    
    public Kucun getKucunbyKYC(Kucun Kucun);

    public void saveKucun(Kucun kucun);
    public Kucun getMaxID();
    public void updateKucun(Kucun kucun);

    public void deleteKucunByKuanhao_id(List<String> Kuanhao_id);
}
