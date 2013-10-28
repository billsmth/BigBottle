import java.io.FileOutputStream;
import data.DataForm;

public class ComplexTypeService {

	public boolean uploadImageWithByte(byte[] imageByte, int length) {
		FileOutputStream fos = null;
		try {
			fos = new FileOutputStream("d:\\test1.jpg");
			fos.write(imageByte, 0, length);
			fos.close();
		} catch (Exception e) {
			return false;
		} finally {
			if (fos != null) {
				try {
					fos.close();
				} catch (Exception e) {
				}
			}
		}
		return true;
	}

	public String[] getArray() {
		String[] strArray = new String[] { "自行车", "飞机", "火箭" };
		return strArray;
	}

	public String[] getMDArray() {
		String[] strArray = new String[] { "自行车,飞机,火箭", "中国,美国,德国",
				"超人,蜘蛛侠,钢铁侠" };
		return strArray;
	}

	public DataForm getDataForm() {
		return new DataForm();
	}

	public byte[] getDataFormBytes() throws Exception {
		java.io.ByteArrayOutputStream baos = new java.io.ByteArrayOutputStream();
		java.io.ObjectOutputStream oos = new java.io.ObjectOutputStream(baos);
		oos.writeObject(new DataForm());
		return baos.toByteArray();
	}
}
