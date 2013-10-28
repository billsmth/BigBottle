package client;

public class TestClient {
	public static void main(String[] args) throws Exception {
		MyServiceStub stub = new MyServiceStub();
		MyServiceStub.GetGreeting gg = new MyServiceStub.GetGreeting();
		client.MyServiceStub.GetPrice gp = new client.MyServiceStub.GetPrice();
		gg.setName("±È¶û");
		System.out.println(stub.getGreeting(gg).get_return());
		System.out.println(stub.getPrice(gp).get_return());
	}
}