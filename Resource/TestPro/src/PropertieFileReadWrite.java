import java.io.*;
import java.util.*;

public class PropertieFileReadWrite {
	private Properties setting;
	private File file;
	private String userName = "admin"; // Ĭ������ �û���������
	private String passwd = "123456";

	public PropertieFileReadWrite() {

		setting = new Properties();
		try {
			file = new File("D:\\JavaWorkS\\", "D:\\JavaWorkS\\configTest.txt"); // �����ļ�log.txt
															// �Լ���D�̰�sims_log
															// �ļ��н���
			if (!file.exists()) // ���ļ�������
			{
				File parentDir = new File(file.getParent());
				if (!parentDir.exists()) {
					parentDir.mkdirs();
				}
				file.createNewFile(); // �½�
			}
			setting.load(new FileInputStream(file)); // �����ļ�
		} catch (Exception e) {
		}
		setInformation(userName, passwd); // ���ô洢���Է���
	}

	public void setInformation(String UserName, String passwd) {
		try {

			setting.setProperty("user name", UserName); // �洢�û��� ÿ�����Զ�Ӧһ����
														// �����û����ļ����� user name
			setting.setProperty("password", passwd); // �洢����
			setting.store(new FileOutputStream(file), ""); // ���浽�ļ� "log.txt"
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public String getInformation(String UserNameKey) {
		return setting.getProperty(UserNameKey); // ����û���
	}

	public static void main(String args[]) {
		PropertieFileReadWrite info = new PropertieFileReadWrite();

		info.setInformation("wangwu", "12345"); // �����û���������
		System.out.println("the user name is:"
				+ info.getInformation("user name"));// ����user name�Ǽ�������ӡ���û���
		info.setInformation("lisi", "12345"); // �����û���������
		System.out.println("the user name is:"
				+ info.getInformation("user name"));// ����user name�Ǽ�������ӡ���û���
	}
}