package com.isoftstone.model.meeting;

public class MeetingPeopleLink {
    private String idmpl;

    private String idMeeting;

    private String idPeople;

    private String orMain;
    
    private String name;

    public String getIdmpl() {
        return idmpl;
    }

    public void setIdmpl(String idmpl) {
        this.idmpl = idmpl == null ? null : idmpl.trim();
    }

    public String getIdMeeting() {
        return idMeeting;
    }

    public void setIdMeeting(String idMeeting) {
        this.idMeeting = idMeeting == null ? null : idMeeting.trim();
    }

    public String getIdPeople() {
        return idPeople;
    }

    public void setIdPeople(String idPeople) {
        this.idPeople = idPeople == null ? null : idPeople.trim();
    }

    public String getOrMain() {
        return orMain;
    }

    public void setOrMain(String orMain) {
        this.orMain = orMain == null ? null : orMain.trim();
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}