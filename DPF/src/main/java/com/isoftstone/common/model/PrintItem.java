package com.isoftstone.common.model;
import java.awt.Graphics2D;


public class PrintItem {
	private String ItemName;
	private float disX;
	private float disY;
	private String ItemValue;
	
	public String getItemName() {
		return ItemName;
	}
	public void setItemName(String itemName) {
		ItemName = itemName;
	}
	public float getDisX() {
		return disX;
	}
	public void setDisX(float disX) {
		this.disX = disX;
	}
	public float getDisY() {
		return disY;
	}
	public void setDisY(float disY) {
		this.disY = disY;
	}
	public String getItemValue() {
		return ItemValue;
	}
	public void setItemValue(String itemValue) {
		ItemValue = itemValue;
	}
	public void printItem(Graphics2D g, float fontHeight){
		g.drawString(ItemValue, disX, disY-fontHeight);
	}
}
