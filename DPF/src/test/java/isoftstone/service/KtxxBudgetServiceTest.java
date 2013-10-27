package isoftstone.service;

import java.util.Iterator;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

import com.isoftstone.model.ktxx.BudgetItem;
import com.isoftstone.service.ktxx.KtxxBudgetService;


@TransactionConfiguration(defaultRollback = true)
@ContextConfiguration({ "classpath:/spring/applicationContext.xml" })
@Transactional
@RunWith(SpringJUnit4ClassRunner.class)

public class KtxxBudgetServiceTest {

	@Autowired
	private KtxxBudgetService service; 
	
	@org.junit.Test
	public void testInsert() {
		BudgetItem item = new BudgetItem("直接费用");
		item.setId("df223dfddfd");
		item.setBudgetID("res_direct");
		item.setIssueID("8u8hfdfdkfjd");
		
		this.service.insert(item);
		
		BudgetItem bi = this.service.listAll(null).get(0);
		
		System.out.println(bi);
	}
	
	@Test
	public void testSelectByKT(){
		BudgetItem item = new BudgetItem();
		item.setIssueID("25333w4esessd");
		
		List<BudgetItem> list = this.service.selectBudgetByKT("25333w4esessd");
		
		System.out.println(list.get(0).toJson());
	}
	
	@Test
	public void testBuildJsonTree(){
		BudgetItem item = new BudgetItem();
		item.setIssueID("25333w4esessd");
		
		List<BudgetItem> list = this.service.selectBudgetByKT("25333w4esessd");
		
		System.out.println(list.size());
		
		System.out.println(list.get(0).toJson());
		
	}
	
}

