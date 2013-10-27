package com.isoftstone.service.zjxx.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.model.zjxx.Zjxx;
import com.isoftstone.service.zjxx.ZjxxService;

@Transactional
@Service
public class ZjxxServiceImpl implements ZjxxService {

	@Override
    public List<Zjxx> findAll() {
        // TODO 需要调用ZjxxDao
        List<Zjxx> list = new ArrayList<Zjxx>();
        Zjxx c1 = new Zjxx();
        c1.setIdzjxx(113);
        c1.setName("王五");
        c1.setSex("1");
        c1.setNation("上海");
//        c1.setBirthday
        c1.setAge(39);
        c1.setTitles("副教授");
        c1.setEducation("研究生");
        c1.setDegree("博士");
        c1.setTutor("硕导");
        c1.setSchool("同济大学");
        c1.setCompany("华为集团");
        c1.setEmail("tom@163.com");
        c1.setOfficePhone("12345678");
        c1.setCellphone("1234567890123");
        c1.setAddress("同济大学宿舍楼1号楼101");
        c1.setPostcode("200000");
        c1.setSpecialty("计算机科学");
        c1.setResearchArea("人工智能");
        c1.setPicPath("c:\\test.jpg");
        c1.setResumePath("c:\\myFile.doc");
        c1.setZjStatus("1");
        c1.setCreaterId("001");
        c1.setCreaterNm("张三");
//        c1.setCreateDt(createDt);
        c1.setUpdaterId("002");
        c1.setUpdaterNm("李四");
//        c1.setUpdateDt(updateDt);
        list.add(c1);
        
        Zjxx c2 = new Zjxx();
        c2.setIdzjxx(112);
        c2.setName("赵六");
        c2.setSex("0");
        c2.setNation("北京");
//        c2.setBirthday
        c2.setAge(39);
        c2.setTitles("教授");
        c2.setEducation("研究生");
        c2.setDegree("硕士");
        c2.setTutor("硕导");
        c2.setSchool("北京大学");
        c2.setCompany("华为集团");
        c2.setEmail("123@163.com");
        c2.setOfficePhone("12345678");
        c2.setCellphone("234567890");
        c2.setAddress("北京大学宿舍楼1号楼101");
        c2.setPostcode("100000");
        c2.setSpecialty("计算机科学");
        c2.setResearchArea("人工智能");
        c2.setPicPath("c:\\test.jpg");
        c2.setResumePath("c:\\myFile.doc");
        c2.setZjStatus("1");
        c2.setCreaterId("001");
        c2.setCreaterNm("张三");
//        c2.setCreateDt(createDt);
        c2.setUpdaterId("002");
        c2.setUpdaterNm("李四");
//        c2.setUpdateDt(updateDt);
        
        list.add(c2);
        return list;
    }

	}
