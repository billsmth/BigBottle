package com.isoftstone.service.cddw;

import java.util.List;

import com.isoftstone.model.cddw.Cddw;

public interface CddwService {

    public List<Cddw> findAll(Cddw cddw) throws Exception;

    public void saveCddw(Cddw cddw)throws Exception;
    
    public void updateCddw(Cddw cddw)throws Exception;

	public void delCddw(String idorg)throws Exception;

	
}
