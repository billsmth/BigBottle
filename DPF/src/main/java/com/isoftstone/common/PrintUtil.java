package com.isoftstone.common;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.print.Book;
import java.awt.print.PageFormat;
import java.awt.print.Paper;
import java.awt.print.Printable;
import java.awt.print.PrinterException;
import java.awt.print.PrinterJob;
import java.util.ArrayList;
import java.util.List;

import com.isoftstone.common.model.PrintItem;


public class PrintUtil implements Printable{
	
	public static boolean printForm(List<PrintItem> piList, int fontSize){
		// 通俗理解就是书、文档
	    Book book = new Book();
	    // 设置成竖打
	    ExpressFormat pf = new ExpressFormat();
	    pf.setFontSize(fontSize);
	    pf.setItemList(piList);
	    
	    pf.setOrientation(PageFormat.PORTRAIT);
	    // 通过Paper设置页面的空白边距和可打印区域。必须与实际打印纸张大小相符。
	    Paper p = new Paper();
	    p.setSize(590,840);// 纸张大小 
	    p.setImageableArea(10,10, 590,840);// A4(595 X 842)设置打印区域，其实0，0应该是72，72，因为A4纸的默认X,Y边距是72
	    pf.setPaper(p);
	    // 把 PageFormat 和 Printable 添加到书中，组成一个页面
	    book.append(new PrintUtil(), pf);

	     // 获取打印服务对象
	     PrinterJob job = PrinterJob.getPrinterJob();      
	     // 设置打印类
	     job.setPageable(book);
	     
	     try {
	         job.print();
	         return true;
	     } catch (PrinterException e) {
	         e.printStackTrace();
	         return false;
	     }
	}
	
	public static void main(String[] args) {
	    
	    // 通俗理解就是书、文档
	    Book book = new Book();
	    // 设置成竖打
	    ExpressFormat pf = new ExpressFormat();
	    pf.setFontSize(16);
	    List<PrintItem> piList=new ArrayList<PrintItem>();
	    
	    // from
	    PrintItem pi=new PrintItem();
	    pi.setDisX(99.15f);
	    pi.setDisY(96.32f);
	    pi.setItemValue("苏苏");
	    piList.add(pi);
	    
	    // departure
	    pi=new PrintItem();
	    pi.setDisX(212.48f);
	    pi.setDisY(96.32f);
	    pi.setItemValue("北京");
	    piList.add(pi);
	    
	    // company
	    pi=new PrintItem();
	    pi.setDisX(102f);
	    pi.setDisY(118.99f);
	    pi.setItemValue("爱美工作室");
	    piList.add(pi);
	    
	    // province
	    pi=new PrintItem();
	    pi.setDisX(87.82f);
	    pi.setDisY(147.32f);
	    pi.setItemValue("北京");
	    piList.add(pi);

	    // city
	    pi=new PrintItem();
	    pi.setDisX(152.98f);
	    pi.setDisY(147.32f);
	    pi.setItemValue("北京");
	    piList.add(pi);

	    // district
	    pi=new PrintItem();
	    pi.setDisX(218.14f);
	    pi.setDisY(147.32f);
	    pi.setItemValue("东城区");
	    piList.add(pi);

	    // detail
	    pi=new PrintItem();
	    pi.setDisX(70.83f);
	    pi.setDisY(172.81f);
	    pi.setItemValue("安德路55号院16号楼2-106");
	    piList.add(pi);

	    // contact
	    pi=new PrintItem();
	    pi.setDisX(127.49f);
	    pi.setDisY(198.31f);
	    pi.setItemValue("13810840866");
	    piList.add(pi);

	    // neijian
	    pi=new PrintItem();
	    pi.setDisX(113.32f);
	    pi.setDisY(215.31f);
	    pi.setItemValue("服装");
	    piList.add(pi);
	    // -----------------------------------------

	    // to
	    pi=new PrintItem();
	    pi.setDisX(371.12f);
	    pi.setDisY(96.32f);
	    pi.setItemValue("康禄海");
	    piList.add(pi);

	    // destination
	    pi=new PrintItem();
	    pi.setDisX(498.61f);
	    pi.setDisY(96.32f);
	    pi.setItemValue("云南");
	    piList.add(pi);	    

	    // company
	    pi=new PrintItem();
	    pi.setDisX(379.62f);
	    pi.setDisY(118.99f);
	    pi.setItemValue("长虹集团");
	    piList.add(pi);
	    
	    // province
	    pi=new PrintItem();
	    pi.setDisX(362.62f);
	    pi.setDisY(147.32f);
	    pi.setItemValue("云南");
	    piList.add(pi);

	    // city
	    pi=new PrintItem();
	    pi.setDisX(433.45f);
	    pi.setDisY(147.32f);
	    pi.setItemValue("桂林");
	    piList.add(pi);

	    // district
	    pi=new PrintItem();
	    pi.setDisX(498.61f);
	    pi.setDisY(147.32f);
	    pi.setItemValue("临桂县");
	    piList.add(pi);

	    // detail
	    pi=new PrintItem();
	    pi.setDisX(339.96f);
	    pi.setDisY(172.81f);
	    pi.setItemValue("二塘老街48号 23号楼 2-408");
	    piList.add(pi);

	    // contact
	    pi=new PrintItem();
	    pi.setDisX(405.12f);
	    pi.setDisY(198.31f);
	    pi.setItemValue("15468746245");
	    piList.add(pi);
	    
	    pf.setItemList(piList);
	    
	    pf.setOrientation(PageFormat.PORTRAIT);
	    // 通过Paper设置页面的空白边距和可打印区域。必须与实际打印纸张大小相符。
	    Paper p = new Paper();
	    p.setSize(590,840);// 纸张大小 
	    p.setImageableArea(10,10, 590,840);// A4(595 X 842)设置打印区域，其实0，0应该是72，72，因为A4纸的默认X,Y边距是72
	    pf.setPaper(p);
	    // 把 PageFormat 和 Printable 添加到书中，组成一个页面
	    book.append(new PrintUtil(), pf);

	     // 获取打印服务对象
	     PrinterJob job = PrinterJob.getPrinterJob();      
	     // 设置打印类
	     job.setPageable(book);
	     
	     try {
	         job.print();
	     } catch (PrinterException e) {
	         e.printStackTrace();
	     }
	   }

	/**
	 * @param Graphic指明打印的图形环境
	 * @param PageFormat指明打印页格式（页面大小以点为计量单位，1点为1英才的1/72，1英寸为25.4毫米。A4纸大致为595×842点）
	 * @param pageIndex指明页号
	 **/
	 public int print(Graphics gra, PageFormat pf, int pageIndex) throws PrinterException {
	    // 转换成Graphics2D
	    Graphics2D g2 = (Graphics2D) gra;
	    // 设置打印颜色为黑色
	    g2.setColor(Color.black);
	    ExpressFormat ef=(ExpressFormat)pf;
	    switch(pageIndex){
	    	case 0:
				Font fontK=g2.getFont();
				Font font = new Font("新宋体", Font.PLAIN, ef.getFontSize());
				float heigth = font.getSize2D();// 字体高度
				g2.setFont(font);// 设置字体
				
				for(PrintItem pi:ef.getItemList()){
					pi.printItem(g2,heigth);
				}
				g2.setFont(fontK);
				return PAGE_EXISTS;
	       default:
	    	   return NO_SUCH_PAGE;
	    }
	 }
}
