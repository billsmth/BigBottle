package com.isoftstone.common;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

public class Tools {
	public static String WEIHAO_0001="0001";
	public static String WEIHAO_0000="0000";
	public static String WEIHAO_9999="9999";
	public static String COM_BLANK="";
	public static String COM_NULL=null;
	public static SimpleDateFormat FORMATTER1 = new SimpleDateFormat("yyyyMMdd");
	public static SimpleDateFormat FORMATTER2 = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	public static SimpleDateFormat FORMATTER3 = new SimpleDateFormat("yyyy-MM-dd");
	
	public static String PROUDCT_INDEX_PIC_NAME = "indexPic.jpg";
	public static int PRODUCT_DESP_HEIGHT = 640;
	public static int PRODUCT_DESP_WIDTH = 480;
	public static int PAGE_SIZE=15;
	
	public static Long getDataStr(){
    	return Long.parseLong(FORMATTER1.format(new Date()));
	}
	
	public static String getDataTime(){
    	return String.valueOf(FORMATTER2.format(new Date()));
	}
	
	public static String getData(){
    	return String.valueOf(FORMATTER3.format(new Date()));
	}
	
	public static boolean isBlank(String str){
		if(null==str||str.equals("")||str.trim().equals("")){
			return true;
		}
		return false;
	}
	
	public static String getReqPram(HttpServletRequest request, String param){
		String val=null;
		if(isBlank(request.getParameter(param))){
			return val;
		}
//		try {
//			val= new String(request.getParameter(param).getBytes("ISO-8859-1"), "utf-8");
//		} catch (UnsupportedEncodingException e) {
//			e.printStackTrace();
//		}
		val=request.getParameter(param);
		return val;
	}
	
	public static void addParam(HttpServletRequest request, Map<String, String> map,String paramStr){
		String tmpParam = getReqPram(request, paramStr);
		if (isBlank(tmpParam)) {
			map.put(paramStr, COM_NULL);
		} else {
			map.put(paramStr, tmpParam);
		}
	}
	
	public static SimpleDateFormat getDateFormat(){
		return FORMATTER3;
	}
}
