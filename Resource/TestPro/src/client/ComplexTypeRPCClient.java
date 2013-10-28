package client;
import javax.xml.namespace.QName;
import org.apache.axis2.addressing.EndpointReference;
import org.apache.axis2.client.Options;
import org.apache.axis2.rpc.client.RPCServiceClient;

public class ComplexTypeRPCClient {

	public static void main(String[] args) throws Exception { 
		RPCServiceClient serviceClient = new RPCServiceClient();
		Options options = serviceClient.getOptions();
		EndpointReference targetEPR = new EndpointReference( "http://localhost:8080/axis2/services/ComplexTypeService");
		options.setTo(targetEPR);
		java.io.File file = new java.io.File("d:\\6lsm_70x70.jpg");
		java.io.FileInputStream fis = new java.io.FileInputStream("d:\\6lsm_70x70.jpg");
		byte[] buffer = new byte[(int) file.length()];
		int n = fis.read(buffer);
		System.out.println("文件长度：" + file.length());
		Object[] opAddEntryArgs = new Object[]{ buffer, n };
		Class[] classes = new Class[]{ Boolean.class };
		QName opAddEntry = new QName("http://ws.apache.org/axis2","uploadImageWithByte");
		fis.close();
		System.out.println(serviceClient.invokeBlocking(opAddEntry,opAddEntryArgs, classes)[0]);
		opAddEntry = new QName("http://ws.apache.org/axis2", "getArray");
		String[] strArray = (String[]) serviceClient.invokeBlocking(opAddEntry, new Object[]{}, new Class[]{String[].class })[0];
		for (String s : strArray) System.out.print(s + " ");
		System.out.println();
		opAddEntry = new QName("http://ws.apache.org/axis2", "getMDArray");
		strArray = (String[]) serviceClient.invokeBlocking(opAddEntry, new Object[]{}, new Class[]{String[].class})[0];
		for (String s : strArray) { 
			String[] array = s.split(",");
			for(String ss: array) System.out.print("<" + ss + "> ");
			System.out.println();
		} 
		System.out.println();
		opAddEntry = new QName("http://ws.apache.org/axis2", "getDataForm");
		data.DataForm df = (data.DataForm) serviceClient.invokeBlocking(opAddEntry, new Object[]{}, new Class[]{data.DataForm.class})[0];
		System.out.println(df.getAge());
		opAddEntry = new QName("http://ws.apache.org/axis2", "getDataFormBytes");
		buffer = (byte[]) serviceClient.invokeBlocking(opAddEntry, new Object[]{}, new Class[]{byte[].class})[0];
		java.io.ObjectInputStream ois = new java.io.ObjectInputStream( new java.io.ByteArrayInputStream(buffer));
		df = (data.DataForm) ois.readObject();
		System.out.println(df.getName());
	}
}
