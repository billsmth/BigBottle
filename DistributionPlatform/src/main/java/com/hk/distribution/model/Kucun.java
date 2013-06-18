package com.hk.distribution.model;

public class Kucun {

    private Long kucun_id;
    private String kuanhao_id;
    private String yanse;
    private String chima;
    private Integer shuliang;
    private float jinjia;
    private float chengbenjia;
    private float shoujia;
    private String beizhu;
    
    public Kucun(){}
    public Kucun(Jinhuo jinhuo){
    	this.kuanhao_id=jinhuo.getKuanhao_id();
    	this.yanse=jinhuo.getYanse();
    	this.chima=jinhuo.getChima();
    	this.shuliang=jinhuo.getShuliang();
    	this.jinjia=jinhuo.getJinjia();
    	this.chengbenjia=jinhuo.getChengbenjia();
    	this.shoujia=jinhuo.getShoujia();
    	this.beizhu=jinhuo.getBeizhu();
    }
    
    public Kucun(Xiaoshou xiaoshou){
    	this.kucun_id=xiaoshou.getKucun_id();
    }
    
	public Long getKucun_id() {
		return kucun_id;
	}
	public void setKucun_id(Long kucun_id) {
		this.kucun_id = kucun_id;
	}
	public String getKuanhao_id() {
		return kuanhao_id;
	}
	public void setKuanhao_id(String kuanhao_id) {
		this.kuanhao_id = kuanhao_id;
	}
	public String getYanse() {
		return yanse;
	}
	public void setYanse(String yanse) {
		this.yanse = yanse;
	}
	public String getChima() {
		return chima;
	}
	public void setChima(String chima) {
		this.chima = chima;
	}
	public Integer getShuliang() {
		return shuliang;
	}
	public void setShuliang(Integer shuliang) {
		this.shuliang = shuliang;
	}
	public float getJinjia() {
		return jinjia;
	}
	public void setJinjia(float jinjia) {
		this.jinjia = jinjia;
	}
	public float getChengbenjia() {
		return chengbenjia;
	}
	public void setChengbenjia(float chengbenjia) {
		this.chengbenjia = chengbenjia;
	}
	public float getShoujia() {
		return shoujia;
	}
	public void setShoujia(float shoujia) {
		this.shoujia = shoujia;
	}
	public String getBeizhu() {
		return beizhu;
	}
	public void setBeizhu(String beizhu) {
		this.beizhu = beizhu;
	}
}
