package com.wg5a.ui;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;

import android.os.Bundle;

public class MainActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
    	super.onCreate(savedInstanceState);
    	super.setIntegerProperty("splashscreen", R.drawable.loading);
        super.loadUrl(Config.getStartUrl(),3500);
    }
}
