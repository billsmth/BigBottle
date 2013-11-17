package com.wg5a.common;

import java.io.File;  
import java.io.FileNotFoundException;  
import java.io.FileOutputStream;  
import java.io.IOException;  
import java.io.InputStream;  
import java.net.HttpURLConnection;  
import java.net.URL;  
  
import org.apache.cordova.api.Plugin;  
import org.apache.cordova.api.PluginResult;  
import org.json.JSONArray;  
import org.json.JSONException;  
import org.json.JSONObject;  
  
import android.os.Environment;  
import android.util.Log;  
  
public class Downloader extends Plugin {  
  
    @Override  
    public PluginResult execute(String action, JSONArray args, String callbackId) {  
  
        if (!action.equals("downloadFile"))  
            return new PluginResult(PluginResult.Status.INVALID_ACTION);  
  
		try {

			String fileUrl = args.getString(0);
			JSONObject params = args.getJSONObject(1);

			String fileName = params.has("fileName") ? params.getString("fileName") : fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
			String pics = params.getString("pics");

			String dirName = params.has("dirName") ? params.getString("dirName") : Environment.getExternalStorageDirectory().getPath() + "/download";

//			Boolean overwrite = params.has("overwrite") ? params.getBoolean("overwrite") : false;
			Boolean overwrite = true;

			return this.downloadUrl(fileUrl, dirName, pics, overwrite, callbackId);

		} catch (JSONException e) {

			e.printStackTrace();
			return new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());

		} catch (InterruptedException e) {
			e.printStackTrace();
			return new PluginResult(PluginResult.Status.ERROR, e.getMessage());
		}
  
    }  
  
    private PluginResult downloadUrl(String fileUrl, String dirName, 
            String pics, Boolean overwrite, String callbackId)  
            throws InterruptedException, JSONException {  
  
        try {  
	            Log.d("PhoneGapLog", "Downloading " + fileUrl + " into " + dirName + "/" + pics);  
	            //dirName=Environment.getExternalStorageDirectory().getPath()+ "/download" + "/" + dirName;
	            File dir = new File(dirName);  
	            if (!dir.exists()) {  
	                Log.d("PhoneGapLog", "directory " + dirName + " created");  
	                dir.mkdirs();  
	            }  
	            String[] picList=pics.split(",");
	            String fileName;
	            File file;
	            JSONObject obj = new JSONObject();
	            obj.put("status", 1);  
                obj.put("total", 0);
                obj.put("newfile", 0);
                obj.put("dir", dirName);  
                obj.put("progress", 0);

                for(int i=0;i<picList.length;i++){
	            	
	            	fileName=picList[i];
	            	
	            	file = new File(dirName, fileName);  
	            	obj.put("total", i+1);
	            	
	                if (overwrite && file.exists()) {
	                    Log.d("DownloaderPlugin", "File already exist");  
	                      
	                    obj.put("progress", 100);  

	                    continue;
	                }  
	      
	                URL url = new URL(fileUrl+fileName);  
	                HttpURLConnection ucon = (HttpURLConnection) url.openConnection();  
	                ucon.setRequestMethod("GET");  
	                ucon.connect();  
	      
	                Log.d("PhoneGapLog", "Download start");  
	      
	                InputStream is = ucon.getInputStream();  
	                byte[] buffer = new byte[1024];  
	                int readed = 0, progress = 0, totalReaded = 0, fileSize = ucon.getContentLength();  
	      
	                FileOutputStream fos = new FileOutputStream(file);  
	      
	                while ((readed = is.read(buffer)) > 0) {
	      
	                    fos.write(buffer, 0, readed);  
	                    totalReaded += readed;  
	      
	                    int newProgress = (int) (totalReaded * 100 / fileSize);  
	                    if (newProgress != progress)  
	                        progress = informProgress(fileSize, newProgress, dirName, fileName, callbackId);  
	      
	                }  
	      
	                fos.close();  
	      
	                Log.d("PhoneGapLog", "Download finished");  
	      
	                obj.put("newfile", (Integer)obj.get("newfile")+1);
	                obj.put("progress", progress);  
	            }
                
                obj.put("status", 1);  
                obj.put("progress", 100);  
	            return new PluginResult(PluginResult.Status.OK, obj);
            
            } catch (FileNotFoundException e) {  
                Log.d("PhoneGapLog", "File Not Found: " + e);  
                return new PluginResult(PluginResult.Status.ERROR, 404);  
            } catch (IOException e) {  
                Log.d("PhoneGapLog", "Error: " + e);
                return new PluginResult(PluginResult.Status.ERROR, e.getMessage());  
            }  
    } 
    
    
    private PluginResult downloadUrl1(String fileUrl, String dirName, 
            String fileName, Boolean overwrite, String callbackId)  
            throws InterruptedException, JSONException {  
  
        try {  
            Log.d("PhoneGapLog", "Downloading " + fileUrl + " into " + dirName + "/" + fileName);  
            //dirName=Environment.getExternalStorageDirectory().getPath()+ "/download" + "/" + dirName;
            File dir = new File(dirName);  
            if (!dir.exists()) {  
                Log.d("PhoneGapLog", "directory " + dirName + " created");  
                dir.mkdirs();  
            }  
  
            File file = new File(dirName, fileName);  
  
            if (!overwrite && file.exists()) {  
                Log.d("DownloaderPlugin", "File already exist");  
  
                JSONObject obj = new JSONObject();  
                obj.put("status", 1);  
                obj.put("total", 0);  
                obj.put("file", fileName);  
                obj.put("dir", dirName);  
                obj.put("progress", 100);  
  
                return new PluginResult(PluginResult.Status.OK, obj);  
            }  
  
            URL url = new URL(fileUrl);  
            HttpURLConnection ucon = (HttpURLConnection) url.openConnection();  
            ucon.setRequestMethod("GET");  
            ucon.connect();  
  
            Log.d("PhoneGapLog", "Download start");  
  
            InputStream is = ucon.getInputStream();  
            byte[] buffer = new byte[1024];  
            int readed = 0, progress = 0, totalReaded = 0, fileSize = ucon.getContentLength();  
  
            FileOutputStream fos = new FileOutputStream(file);  
  
            while ((readed = is.read(buffer)) > 0) {  
  
                fos.write(buffer, 0, readed);  
                totalReaded += readed;  
  
                int newProgress = (int) (totalReaded * 100 / fileSize);  
                if (newProgress != progress)  
                    progress = informProgress(fileSize, newProgress, dirName, fileName, callbackId);  
  
            }  
  
            fos.close();  
  
            Log.d("PhoneGapLog", "Download finished");  
  
            JSONObject obj = new JSONObject();  
            obj.put("status", 1);  
            obj.put("total", fileSize);  
            obj.put("file", fileName);  
            obj.put("dir", dirName);  
            obj.put("progress", progress);  
  
            return new PluginResult(PluginResult.Status.OK, obj);  
  
        } catch (FileNotFoundException e) {  
            Log.d("PhoneGapLog", "File Not Found: " + e);  
            return new PluginResult(PluginResult.Status.ERROR, 404);  
        } catch (IOException e) {  
            Log.d("PhoneGapLog", "Error: " + e);  
            return new PluginResult(PluginResult.Status.ERROR, e.getMessage());  
        }  
  
    }  
  
    private int informProgress(int fileSize, int progress, String dirName,  
            String fileName, String callbackId) throws InterruptedException,  
            JSONException {  
  
        JSONObject obj = new JSONObject();  
        obj.put("status", 0);  
        obj.put("total", fileSize);  
        obj.put("newfile", fileName);
        obj.put("dir", dirName);  
        obj.put("progress", progress);  
  
        PluginResult res = new PluginResult(PluginResult.Status.OK, obj);  
        res.setKeepCallback(true);  
        success(res, callbackId);  
  
        // Give a chance for the progress to be sent to javascript  
        Thread.sleep(100);  
  
        return progress;  
    }  
  
}