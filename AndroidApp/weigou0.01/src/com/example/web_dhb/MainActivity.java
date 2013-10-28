package com.example.web_dhb;

import android.os.Bundle;

import org.apache.cordova.*;

public class MainActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
    	super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
    	super.setIntegerProperty("splashscreen", R.drawable.bg_loading);
        super.loadUrl(Config.getStartUrl(),5000);
//        super.loadUrl("file:///android_asset/www/login.html");
    }

    
}
