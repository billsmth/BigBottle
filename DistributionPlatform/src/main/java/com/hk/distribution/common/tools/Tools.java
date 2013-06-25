package com.hk.distribution.common.tools;

import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

public class Tools {
	public static String WEIHAO_0001="0001";
	public static SimpleDateFormat FORMATTER1 = new SimpleDateFormat("yyyyMMdd");
	public static SimpleDateFormat FORMATTER2 = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	public static Long getDataStr(){
    	return Long.parseLong(FORMATTER1.format(new Date()));
	}
	
	public static String getDataTime(){
    	return String.valueOf(FORMATTER2.format(new Date()));
	}
	
	public static boolean isBlank(String str){
		if(null==str||str.equals("")||str.trim().equals("")){
			return true;
		}
		return false;
	}
	
	public static String getReqPram(HttpServletRequest request, String param){
		try {
			return new String(request.getParameter(param).getBytes("ISO-8859-1"), "utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return null;
	}
}
