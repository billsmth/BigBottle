package com.isoftstone.service.jxc;

import java.util.List;

import com.isoftstone.model.jxc.Kucun;

public interface KucunService {

    public List<Kucun> getKucunList();
    public Kucun getKucun(Kucun Kucun);
    
    public Kucun getKucunbyKYC(Kucun Kucun);

    public void saveKucun(Kucun kucun);
    public Kucun getMaxID();
    public void updateKucun(Kucun kucun);

    public void deleteKucunByKuanhao_id(List<String> Kuanhao_id);
}
