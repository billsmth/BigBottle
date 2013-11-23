package com.isoftstone.common;
import java.awt.print.PageFormat;
import java.util.List;

import com.isoftstone.common.model.PrintItem;


public class ExpressFormat extends PageFormat{
	
	private List<PrintItem> itemList;
	
	private String expressType;
	
	private int fontSize;

	public List<PrintItem> getItemList() {
		return itemList;
	}

	public void setItemList(List<PrintItem> itemList) {
		this.itemList = itemList;
	}

	public String getExpressType() {
		return expressType;
	}

	public void setExpressType(String expressType) {
		this.expressType = expressType;
	}

	public int getFontSize() {
		return fontSize;
	}

	public void setFontSize(int fontSize) {
		this.fontSize = fontSize;
	}
}
