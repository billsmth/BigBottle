package com.isoftstone.common;

public class StringUtil {
	
	/*字符串去null*/
	public static String nvl(String values){
		
		if(values==null){
			
			return"";
		}
		
		return values;
	}

}
