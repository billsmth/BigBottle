import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;


public class TestURLXML {

	public static void main(String[] args) throws IOException {
		//test4();
		test2();
		//test();
	}
	public static void test4() throws IOException {
		URL url = new URL("http://localhost:8080/DistributionPlatform/test/testxml.action");  
		Object obj = url.getContent();
		System.out.println(obj.getClass().getName()); 
	}
	public static void test2() throws IOException {
		URL url = new URL("http://localhost:8080/DistributionPlatform/test/testxml.action");
		//�򿪵��� URL �����Ӳ�����һ�����ڴӸ����Ӷ���� InputStream��                   
		Reader reader = new InputStreamReader(new BufferedInputStream(url.openStream())); 
		int c;                   
		while ((c = reader.read()) != -1) {
			System.out.print((char) c);                  
			}                   
		reader.close();         
	}
	public static void test() throws IOException {
		URL url = new URL("http://localhost:8080/DistributionPlatform/test/testxml.action");
		//�򿪵��� URL �����Ӳ�����һ�����ڴӸ����Ӷ���� InputStream��
		InputStream in = url.openStream();
		int c;
		while ((c = in.read()) != -1)
			System.out.print(c);
			in.close();
	}
}
