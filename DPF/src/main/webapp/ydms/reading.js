/**
 * 经费预算数数据展示js
 */
function showBudget(){
	var jsonDataArray = eval("("+document.getElementById('budgetData').innerHTML+")").children;
	//1 显示“合计”数据
	myShowData(jsonDataArray[0]);
	//2 显示“一、研究经费”数据
	myShowData(jsonDataArray[0].children[0]);
	//3 显示“（一）直接费用”数据
	myShowData(jsonDataArray[0].children[0].children[0]);
	var myTempVar = jsonDataArray[0].children[0].children[0].children[0];
	//4 显示“1.设备费”数据
	myShowData(myTempVar);
	for(var i=0;i<3;i++){
		//5 显示“（1）设备购置费”数据
		//6 显示“（2）试制改造费”数据
		//7 显示“（3）租赁使用费”数据
		myShowData(myTempVar.children[i]);
	}
	myTempVar=jsonDataArray[0].children[0].children[0];
	for(var i=1;i<11;i++){
		//8 显示“2.材料费”数据
		//9 显示“3.测试化验加工费”数据
		//10 显示“4.燃料动力费”数据
		//11 显示“5.差旅费”数据
		//12 显示“6.会议费”数据
		//13 显示“7.国际合作与交流费”数据
		//14 显示“8.出版、文献、信息费”数据
		//15 显示“9.劳务费”数据
		//16 显示“10.专家咨询费”数据
		//17 显示“11.基本建设费”数据
		myShowData(myTempVar.children[i]);
	}
	for(var i=0;i<6;i++){
		//18 显示“（1）房屋建筑构造”数据
		//19 显示“（2）专用设备购置”数据
		//20 显示“（3）基础设施建设”数据
		//21 显示“（4）大型修缮”数据
		//22 显示“（5）信息网络建设”数据
		//23 显示“（6）其他基本建设支出”数据
		myShowData(myTempVar.children[10].children[i]);
	}
	//24 显示“12.其他费用”数据
	myShowData(jsonDataArray[0].children[0].children[0].children[11]);		
	//25 显示“（二）间接费用”数据
	myShowData(jsonDataArray[0].children[0].children[1]);		
	//26 显示“1.管理费”数据
	myShowData(jsonDataArray[0].children[0].children[1].children[0]);		
	//27 显示“2.项目收益”数据
	myShowData(jsonDataArray[0].children[0].children[1].children[1]);		
	//28 显示“（三）不可预见费”数据
	myShowData(jsonDataArray[0].children[0].children[2]);
}

function myShowData(jsonData){
	var rowHtml='<td bgcolor="#e2e2e2"><div align="left"><strong>'+jsonData.budgetName+'</strong></div></td>'+
				((jsonData.investmentCenGov>0)?('<td bgcolor="#FFFFFF"><div align="center"  class="STYLE5" >'+jsonData.investmentCenGov+'</div></td>'):('<td><div align="center" >'+jsonData.investmentCenGov+'</div></td>'))+
				((jsonData.investmentLocGov>0)?('<td bgcolor="#FFFFFF"><div align="center"  class="STYLE5" >'+jsonData.investmentLocGov+'</div></td>'):('<td><div align="center" >'+jsonData.investmentLocGov+'</div></td>'))+
				((jsonData.investmentEnterprise>0)?('<td bgcolor="#FFFFFF"><div align="center"  class="STYLE5" >'+jsonData.investmentEnterprise+'</div></td>'):('<td><div align="center" >'+jsonData.investmentEnterprise+'</div></td>'))+
				((jsonData.investmentBank>0)?('<td bgcolor="#FFFFFF"><div align="center"  class="STYLE5" >'+jsonData.investmentBank+'</div></td>'):('<td><div align="center" >'+jsonData.investmentBank+'</div></td>'))+
				((jsonData.investmentOther>0)?('<td bgcolor="#FFFFFF"><div align="center"  class="STYLE5" >'+jsonData.investmentOther+'</div></td>'):('<td><div align="center" >'+jsonData.investmentOther+'</div></td>'))+
				'<td height="64" bgcolor="#FFFFFF" ><div align="center" class="STYLE5">'+jsonData.investmentSum+'</div></td>';
	document.getElementById("table_budget").insertRow(document.getElementById("table_budget").rows.length).innerHTML=rowHtml;
}
	