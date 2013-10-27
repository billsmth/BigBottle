package com.isoftstone.dao.opinion;

import java.util.List;

import com.isoftstone.model.opinion.IssueSpecialistLink;

public interface IssueSpecialistLinkDao {
    
    public void insert(IssueSpecialistLink link);
    public void update(IssueSpecialistLink link);
    public void delete(String id);
    public List<IssueSpecialistLink> getNoUpdate(String id);
    public List<IssueSpecialistLink> listAll(String id);
}
