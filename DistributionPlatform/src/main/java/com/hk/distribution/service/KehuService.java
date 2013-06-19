package com.hk.distribution.service;

import java.util.List;

import com.hk.distribution.model.Kehu;

public interface KehuService {

    public List<Kehu> getKehuList();
    public Kehu getKehu(Kehu Kehu);
    
    public Kehu getKehubyKYC(Kehu Kehu);

    public void saveKehu(Kehu kehu);
    public Kehu getMaxID();
    public void updateKehu(Kehu kehu);

    public void deleteKehuByKuanhao_id(List<String> Kuanhao_id);
}
