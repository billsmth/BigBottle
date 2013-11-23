var db;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	document.addEventListener("resume", onResume, false);
    document.addEventListener("backbutton", onBackKeyDown, false);
	if (db == null) {
		db = window.openDatabase("wg5adb", "1.0", "database", 200000);
	}
	window.localStorage.setItem("id", null);
	
	//$("#resetLink").css("display", "block");
}

function reset() {
	showConfirm('确定要重置系统吗？', onConfirm);
}

function onConfirm() {
	if (db == null) {
		db = window.openDatabase("wg5adb", "1.0", "database", 200000);
	}
	db.transaction(function(tx) {
		tx.executeSql('DROP TABLE IF EXISTS USER_TABLE');
		tx.executeSql('DROP TABLE IF EXISTS USER_ADD');
		tx.executeSql('DROP TABLE IF EXISTS EXIST_TABLE');
		tx.executeSql('CREATE TABLE IF NOT EXISTS USER_TABLE (ID TEXT, NAME TEXT, PWD TEXT)');
		tx.executeSql("CREATE TABLE IF NOT EXISTS USER_ADD (ID INTEGER PRIMARY KEY AUTOINCREMENT, POST_FROM TEXT, DEPARTURE TEXT, PROVINCE_FROM TEXT, "
				+"CITY_FROM TEXT, DISTRICT_FROM TEXT, COMPANY_NAME_FROM TEXT, CONTACT_NUMBER_FROM TEXT, POST_FROM_NOTE TEXT, DEF TEXT) ");
		tx.executeSql("INSERT INTO USER_ADD (POST_FROM, DEPARTURE, PROVINCE_FROM, CITY_FROM, DISTRICT_FROM, COMPANY_NAME_FROM, CONTACT_NUMBER_FROM, DEF) "
				+"VALUES (\"苏苏\", \"北京\", \"北京\", \"北京\", \"东城区\", \"安德路55号院2门106室\", \"13810840866\", \"1\")");
		tx.executeSql('CREATE TABLE IF NOT EXISTS EXIST_TABLE (EXIST_FLG TEXT)');
		tx.executeSql("INSERT INTO EXIST_TABLE (EXIST_FLG) VALUES (\"1\")");
	}, function(err) {
		alert("重置系统创建数据库出错: " + err);
	}, function() {
		showInfor('重置系统成功！');
		navigator.notification.beep(1);
		onResume();
	});
}

function onResume() {
	window.localStorage.setItem("id", null);
}

function onBackKeyDown() {
	var currentPageId = $.mobile.activePage.attr("id");

	if (currentPageId != "main") {
		$.mobile.changePage('./main.jsp', {transition: "flip"});
	} else {
		showConfirm('退出系统吗？', function() {
			navigator.app.exitApp();
		});
	}
}

function showConfirm(message, confirmCallback) {
	navigator.notification.confirm(
        message,
        function (buttonIndex) {
        	if (buttonIndex == 1) {
        		confirmCallback();
        	}
        },
        '提示',
        '确定,取消'
    );
}
function showInfor(message) {
	navigator.notification.alert(
		message,
		function() {},
		'提示信息',
		'确定'
	);
}
function showWarning(message) {
	navigator.notification.alert(
		message,
		function() {},
		'警告信息',
		'确定'
	);
}
function errorCB(err) {
    alert("数据库操作错误: " + err);
}