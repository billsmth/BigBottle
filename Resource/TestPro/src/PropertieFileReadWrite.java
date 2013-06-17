import java.io.*;
import java.util.*;

public class PropertieFileReadWrite {
	private Properties setting;
	private File file;
	private String userName = "admin"; // 默认属性 用户名和密码
	private String passwd = "123456";

	public PropertieFileReadWrite() {

		setting = new Properties();
		try {
			file = new File("D:\\JavaWorkS\\", "D:\\JavaWorkS\\configTest.txt"); // 创建文件log.txt
															// 自己在D盘把sims_log
															// 文件夹建好
			if (!file.exists()) // 若文件不存在
			{
				File parentDir = new File(file.getParent());
				if (!parentDir.exists()) {
					parentDir.mkdirs();
				}
				file.createNewFile(); // 新建
			}
			setting.load(new FileInputStream(file)); // 载入文件
		} catch (Exception e) {
		}
		setInformation(userName, passwd); // 调用存储属性方法
	}

	public void setInformation(String UserName, String passwd) {
		try {

			setting.setProperty("user name", UserName); // 存储用户名 每个属性对应一个键
														// 例如用户名的键就是 user name
			setting.setProperty("password", passwd); // 存储密码
			setting.store(new FileOutputStream(file), ""); // 保存到文件 "log.txt"
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public String getInformation(String UserNameKey) {
		return setting.getProperty(UserNameKey); // 获得用户名
	}

	public static void main(String args[]) {
		PropertieFileReadWrite info = new PropertieFileReadWrite();

		info.setInformation("wangwu", "12345"); // 设置用户名和密码
		System.out.println("the user name is:"
				+ info.getInformation("user name"));// 这里user name是键名，打印出用户名
		info.setInformation("lisi", "12345"); // 设置用户名和密码
		System.out.println("the user name is:"
				+ info.getInformation("user name"));// 这里user name是键名，打印出用户名
	}
}