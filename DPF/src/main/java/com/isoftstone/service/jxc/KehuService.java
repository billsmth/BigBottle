package com.isoftstone.service.jxc;

import java.util.List;

import com.isoftstone.model.jxc.Kehu;

public interface KehuService {

	public List<Kehu> getKehuList();
    public List<Kehu> getKehuList(Kehu kehu);
    public Kehu getKehu(Kehu Kehu);
    
    public Kehu getKehubyKYC(Kehu Kehu);

    public void saveKehu(Kehu kehu);
    public Kehu getMaxID();
    public void updateKehu(Kehu kehu);

    public void deleteKehuByKuanhao_id(List<String> Kuanhao_id);
}