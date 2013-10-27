package com.isoftstone.service.opinion;

import java.util.List;

import com.isoftstone.model.opinion.IssueSpecialistLink;

public interface IssueSpecialistLinkService {
    
    public void insert(IssueSpecialistLink link);
    
    public void update(IssueSpecialistLink link);
    
    public void delete(String id);
    
    public int noopinionzj(String id);
    
    public List<IssueSpecialistLink> listAll(String id);
}
