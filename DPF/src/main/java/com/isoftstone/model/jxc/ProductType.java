package com.isoftstone.model.jxc;

public class ProductType {
	
	private Long type_id;
	private String type_name;
	private String type_key;
	private String type_status;
	private String parent_id;
	private String note;
	
	
	public Long getType_id() {
		return type_id;
	}
	public void setType_id(Long type_id) {
		this.type_id = type_id;
	}
	public String getType_name() {
		return type_name;
	}
	public void setType_name(String type_name) {
		this.type_name = type_name;
	}
	public String getType_key() {
		return type_key;
	}
	public void setType_key(String type_key) {
		this.type_key = type_key;
	}
	public String getType_status() {
		return type_status;
	}
	public void setType_status(String type_status) {
		this.type_status = type_status;
	}
	public String getParent_id() {
		return parent_id;
	}
	public void setParent_id(String parent_id) {
		this.parent_id = parent_id;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
}
