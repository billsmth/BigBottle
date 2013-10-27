package isoftstone.service;

import com.isoftstone.model.ktxx.BudgetItem;
import com.isoftstone.service.ktxx.impl.KtxxBudgetServiceImpl;

public class TreeTest {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		BudgetItem total = new BudgetItem("合计");
		BudgetItem research = new BudgetItem("一、研究经费");
		BudgetItem res_direct = new BudgetItem("（一）直接费用");
		BudgetItem res_dir_device = new BudgetItem("1.设备费");
		BudgetItem res_dir_dvi_purchase = new BudgetItem("（1）设备购置费");
		BudgetItem res_dir_dvi_experiment = new BudgetItem("（2）试制改造费");
		BudgetItem res_dir_dvi_rent = new BudgetItem("（3）租赁使用费");
		BudgetItem res_dir_material = new BudgetItem("2.材料费");
		BudgetItem res_dir_test = new BudgetItem("3.测试化验加工费");
		BudgetItem res_dir_fuel = new BudgetItem("4.燃料动力费");
		BudgetItem res_dir_trip = new BudgetItem("5.差旅费");
		BudgetItem res_dir_meeting = new BudgetItem("6.会议费");
		BudgetItem res_dir_communication = new BudgetItem("7.国际合作与交流费");
		BudgetItem res_dir_publication = new BudgetItem("8.出版、文献、信息费");
		BudgetItem res_dir_outsourcing = new BudgetItem("9.劳务费");
		BudgetItem res_dir_consultant = new BudgetItem("10.专家咨询费");
		BudgetItem res_dir_construction = new BudgetItem("11.基本建设费");
		BudgetItem res_dir_cst_house = new BudgetItem("（1）房屋建筑构造");
		BudgetItem res_dir_cst_device = new BudgetItem("（2）专用设备购置");
		BudgetItem res_dir_cst_infrastructure = new BudgetItem("（3）基础设施建设");
		BudgetItem res_dir_cst_fixing = new BudgetItem("（4）大型修缮");
		BudgetItem res_dir_cst_network = new BudgetItem("（5）信息网络建设");
		BudgetItem res_dir_cst_other = new BudgetItem("（6）其他基本建设支出");
		BudgetItem res_dir_other = new BudgetItem("12.其他费用");
		BudgetItem res_indirect = new BudgetItem("（二）间接费用");
		BudgetItem res_ind_management = new BudgetItem("1.管理费");
		BudgetItem res_ind_return = new BudgetItem("2.项目收益");
		BudgetItem res_other = new BudgetItem("（三）不可预见费");				
		
		//build tree
		//合计
		total.addChildren(research);
		//一、研究经费
		research.addChildren(res_direct);
		research.addChildren(res_indirect);
		research.addChildren(res_other);
		//（一）直接费用
		res_direct.addChildren(res_dir_device);
		res_direct.addChildren(res_dir_material);
		res_direct.addChildren(res_dir_test);
		res_direct.addChildren(res_dir_fuel);
		res_direct.addChildren(res_dir_trip);
		res_direct.addChildren(res_dir_meeting);
		res_direct.addChildren(res_dir_communication);
		res_direct.addChildren(res_dir_publication);
		res_direct.addChildren(res_dir_outsourcing);
		res_direct.addChildren(res_dir_consultant);
		res_direct.addChildren(res_dir_construction);
		res_direct.addChildren(res_dir_other);
		//1.设备费
		res_dir_device.addChildren(res_dir_dvi_purchase);
		res_dir_device.addChildren(res_dir_dvi_experiment);
		res_dir_device.addChildren(res_dir_dvi_rent);
		
		res_dir_dvi_purchase.setInvestmentCenGov(1);
		res_dir_dvi_purchase.setInvestmentLocGov(1);
		res_dir_dvi_purchase.setInvestmentEnterprise(1);
		
		res_dir_dvi_experiment.setInvestmentCenGov(1);
		res_dir_dvi_experiment.setInvestmentLocGov(1);
		res_dir_dvi_experiment.setInvestmentEnterprise(1);
		
		//11.基本建设费
		res_dir_construction.addChildren(res_dir_cst_house);
		res_dir_construction.addChildren(res_dir_cst_device);
		res_dir_construction.addChildren(res_dir_cst_infrastructure);
		res_dir_construction.addChildren(res_dir_cst_fixing);
		res_dir_construction.addChildren(res_dir_cst_network);
		res_dir_construction.addChildren(res_dir_cst_other);
		
		
		res_dir_cst_network.setInvestmentCenGov(1);
		res_dir_cst_network.setInvestmentLocGov(8);
		res_dir_cst_network.setInvestmentEnterprise(1);
		
		//（二）间接费用
		res_indirect.addChildren(res_ind_management);
		res_indirect.addChildren(res_ind_return);
		
		res_ind_management.setInvestmentCenGov(10);
		
        //System.out.println(total.toJson()); 
		
		KtxxBudgetServiceImpl service = new KtxxBudgetServiceImpl();
		service.iterateTree(total);
		System.out.println(total.toJson());

	}
}
