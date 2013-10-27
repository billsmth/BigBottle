package com.isoftstone.controller.meeting;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.isoftstone.model.meeting.Meeting;
import com.isoftstone.model.meeting.MeetingSummary;
import com.isoftstone.service.meeting.MeetingService;

@Controller
@RequestMapping("/meeting")
public class MeetingController {

	@Autowired
	private MeetingService meetingServ;
	
	



	@RequestMapping("/listall")
    @ResponseBody
    public List<Meeting> findAll(Meeting meeting) {
        List<Meeting> list = meetingServ.findAll(meeting);
//        meeting=list.get(3);
//        meeting.setMainPeople("3bc366cd-2b58-4abb-b3f3-7cc2bd9b4a30,0952ec20-0144-4bc5-a344-67cd9ebe769e");
//        list.set(3, meeting);
        
        return list;
    }
	
	@RequestMapping("/del")
    @ResponseBody
    public String delMeeting(String idmeeting) {
        meetingServ.delMeeting(idmeeting);
        return "{'success':true}";
    }
	
    @RequestMapping("/add")
    @ResponseBody
    public String add(Meeting meeting) {
    	
    	try {
    		meeting=this.meetingServ.saveMeeting(meeting);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return "{'success':true,'idmeeting':'"+meeting.getIdmeeting()+"'}";
    }
	
    @RequestMapping("/update")
    @ResponseBody
    public String update(Meeting meeting) {
    	try {
			this.meetingServ.updMeeting(meeting);
		} catch (Exception e) {
			e.printStackTrace();
		}
        return "{'success':true}";
    }
    
    @RequestMapping("/updMainContent")
    @ResponseBody
    public String updMainContent(Meeting meeting) {
    	this.meetingServ.updMainContent(meeting);
        return "{'success':true}";
    }
	
    @RequestMapping("/findSummary")
    @ResponseBody
    public MeetingSummary findSummary(MeetingSummary ms) {
    	ms.setIdPeople("1");									//待改
    	ms = meetingServ.findSummary(ms);
        return ms;
    }
    
    @RequestMapping("/updSummary")
    @ResponseBody
    public String updSummary(MeetingSummary ms) {
    	ms.setIdPeople("1");									//待改
    	this.meetingServ.updSummary(ms);
        return "{'success':true}";
    }

    @RequestMapping("/upfile")
    @ResponseBody
    public String upfile(HttpServletRequest request, Meeting meeting) {
    	System.out.println("upfile");
    	 if(meeting.getFiletest().getSize()>0){                    
             try {     
                 SaveFileFromInputStream(meeting.getFiletest().getInputStream(),"D://",meeting.getFiletest().getOriginalFilename(), request);     
             } catch (IOException e) {     
                 System.out.println(e.getMessage());     
                 return null;     
             }     
         }     
        return "{'success':true}";
    }
	
	
	public void SaveFileFromInputStream(InputStream stream, String path,String filename, HttpServletRequest request) throws IOException {
		String savePath = request.getSession().getServletContext().getRealPath("/MeetingData/");  
//		savePath = savePath.replace("\\", "/");
        String fileName = java.util.UUID.randomUUID().toString();
        fileName += " "+filename;  
        File toFile = new File(savePath, fileName);  
        OutputStream os = new FileOutputStream(toFile);     
        byte[] buffer = new byte[1024];     
        int length = 0;  
        while ((length = stream.read(buffer)) > 0) {     
            os.write(buffer, 0, length);     
        }     
        stream.close();  
        os.close();  
	}    
	
//	@RequestMapping("/downfile")
//    @ResponseBody
//    public String downfile(HttpServletRequest request, HttpServletResponse response,Meeting meeting) {
//    	System.out.println("downfile");
//    	
//		String savePath = request.getSession().getServletContext().getRealPath("/MeetingData/b355ae0f-233b-4cd0-a4ed-a741f4608ff3 test upfile.txt");  
//	    String filename = "b355ae0f-233b-4cd0-a4ed-a741f4608ff3 test upfile.txt";
//        try {
//			OutputStream o = response.getOutputStream();
//			byte b[] = new byte[1024];  
//	        File fileLoad = new File(savePath);  
//	        response.setHeader("Content-disposition", "attachment;filename="  
//	             + filename);  
//	        response.setContentType("text/html");  
//	        long fileLength = fileLoad.length();  
//	        String length = String.valueOf(fileLength);  
//	        response.setHeader("Content_Length", length);  
//            FileInputStream in = new FileInputStream(fileLoad);  
//            int n = 0;  
//            while ((n = in.read(b)) != -1) {  
//                o.write(b, 0, n);  
//            }  
//		} catch (IOException e) {
//			e.printStackTrace();
//		}  
//        return "{'success':true}";
//    }
	
//	@RequestMapping("/delfile")
//    @ResponseBody
//    public String delfile(HttpServletRequest request, HttpServletResponse response,Meeting meeting) {
//		System.out.println("delfile");
//		try {
//			String savePath = request.getSession().getServletContext().getRealPath("/MeetingData/0b6050d6-5e4f-494b-950b-961ecd06f432 test upfile.txt");
//			File f = new File(savePath);
//			f.deleteOnExit();
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		
//        return "{'success':true}";
//    }

	
    @RequestMapping("/test")
    @ResponseBody
    public String test(HttpServletRequest request, HttpServletResponse response,Meeting meeting) {
		System.out.println("test");
		meetingServ.addrole();
        return "{'success':true}";
    }
	
	public MeetingService getMeetingServ() {
		return meetingServ;
	}
	public void setMeetingServ(MeetingService meetingServ) {
		this.meetingServ = meetingServ;
	}
}
