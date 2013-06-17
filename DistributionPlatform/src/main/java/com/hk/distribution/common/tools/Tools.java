package com.hk.distribution.common.tools;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Tools {
	public static String WEIHAO_0001="0001";
	public static SimpleDateFormat FORMATTER = new SimpleDateFormat("yyyyMMdd");
	public static Long getDataStr(){
    	return Long.parseLong(FORMATTER.format(new Date()));
	}
}
