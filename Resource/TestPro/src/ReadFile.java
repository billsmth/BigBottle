import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

public class ReadFile {
	/*
	 * ∂¡»°char
	 */
	private String readtxt1() throws IOException {
		BufferedReader br = new BufferedReader(new FileReader("d:/sql.txt"));
		String str = "";
		String r = br.readLine();
		while (r != null) {
			str += r;
			r = br.readLine();
		}
		return str;
	}

	/*
	 * ∂¡»°char
	 */
	private String readtxt2() throws IOException {
		String str = "";
		FileReader fr = new FileReader("d:/sql.txt");
		char[] chars = new char[1024];
		int b = 0;
		while ((b = fr.read(chars)) != -1) {
			str += String.valueOf(chars);
		}
		return str;
	}

	/*
	 * ∂¡»°bytes
	 */
	private Byte[] readtxt3() throws IOException {
		InputStream input = new FileInputStream("d:/sql.txt");
		byte[] b = new byte[1024];
		ArrayList<Byte> lsbytes = new ArrayList<Byte>();
		int n = 0;
		while ((n = input.read(b)) != -1) {
			for (int i = 0; i < n; i++) {
				lsbytes.add(b[i]);
			}
		}
		return (Byte[]) (lsbytes.toArray());
	}

}
