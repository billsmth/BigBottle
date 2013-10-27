package com.isoftstone.service.cddw.impl;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.dao.CddwMapper;
import com.isoftstone.model.cddw.Cddw;
import com.isoftstone.service.cddw.CddwService;

@Transactional
@Service
public class CddwServiceImpl implements CddwService {
	
private CddwMapper cddwMapper;
	
	
	@Autowired
    public void setCddwMapper(CddwMapper cddwMapper) {
		this.cddwMapper = cddwMapper;
	}


	@Override
    public List<Cddw> findAll(Cddw cddw) throws Exception{
        return cddwMapper.findAllCddw(cddw);
    }



	@Override
	public void saveCddw(Cddw cddw) throws Exception {
		cddw.setIdorg(UUID.randomUUID()+"");
		cddw.setCreateDate(new Date());
		cddw.setCreateUser(1);
		cddw.setSoftDel("1");
		cddw.setModifyDate(new Date());
		this.cddwMapper.insertSelective(cddw);
	}



	@Override
	public void updateCddw(Cddw cddw) throws Exception {
		Cddw orderCddw =this.cddwMapper.selectByPrimaryKey(cddw.getIdorg());
		cddw.setCreateDate(orderCddw.getCreateDate());
		cddw.setCreateUser(orderCddw.getCreateUser());
		cddw.setModifyDate(new Date());
		cddw.setModifyUser(2);
		cddw.setSoftDel(orderCddw.getSoftDel());
		this.cddwMapper.updateByPrimaryKeySelective(cddw);
	}



	@Override
	public void delCddw(String idorg) throws Exception {
		/*Cddw cddw =this.cddwMapper.selectByPrimaryKey(idorg);
		cddw.setSoftDel("0");
		this.cddwMapper.updateByPrimaryKeySelective(cddw);*/
		this.cddwMapper.deleteByPrimaryKey(idorg);
	}


	
}
