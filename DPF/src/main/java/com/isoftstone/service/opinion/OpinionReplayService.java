package com.isoftstone.service.opinion;

import java.util.List;

import com.isoftstone.model.opinion.OpinionReplay;

public interface OpinionReplayService {

    public List<OpinionReplay> findAll(String id);

    public List<OpinionReplay> selectTempOpinionReplay(OpinionReplay io);
    
    public void delete(String id);
    
    public void insert(OpinionReplay or);
    
    public void update(OpinionReplay or);
    
}
