<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="Content-type" name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width">

	<link rel="stylesheet" href="../css/jquery.mobile-1.3.2.css" />
	
	<script src="../js/cordova.js"></script>
	<script src="../js/jquery-1.9.1.min.js"></script>
	<script src="../js/jquery.mobile-1.3.2.min.js"></script>
	<script src="../js/common.js"></script>
	<script type="text/javascript">
			var db;
		document.addEventListener("deviceready", onDeviceReady, false);
        
        function onDeviceReady(){
	        if (db == null) {
		    	db = window.openDatabase("wg5adb", "1.0", "database", 200000);
	    	}
	    	db.transaction(function(tx) {
	            tx.executeSql('SELECT * FROM EXIST_TABLE ',[], function(tx, results) {
                        if (results.rows.length <= 0) {
                        	onConfirm;
                        }
                    }, onConfirm);
             });
		}
	</script>
</head>
<body>
	<div data-role="page" id="main">
		
	 	<div data-role="header" data-position="fixed">
			<h1>微购供货菜单</h1>
		</div>
		<div data-role="content" id="main1Content" >
			
			<div class="ui-grid-b">
				<div class="ui-block-a">
					<center>
						<a href="./getProductsByType.action?type=1" data-icon="info"  rel="external">
							<img src="../images/newProduct.png" width="80%"/>
						</a>
					</center>
					<p><center>新品上市</center></p>
				</div>
				<div class="ui-block-b">
					<center>
						<a href="./getProductsByType.action?type=2" data-icon="info"  rel="external">
							<img src="../images/dztj.png" width="80%"/>
						</a>
					</center>
					<p><center>店长推荐</center></p>
				</div>
				<div class="ui-block-c">
					<center>
						<a href="./getProductsByType.action?type=3" data-icon="info"  rel="external">
							<img src="../images/salesProduct.jpg" width="80%"/>
						</a>
					</center>
					<p><center>折扣商品</center></p>
				</div>
			</div>
			<div class="ui-grid-b">
				<div class="ui-block-a">
					<center>
						<a href="./getProductsByType.action?type=5" data-icon="info"  rel="external">
							<img src="../images/orderSale.png" width="80%"/>
						</a>
					</center>
					<p><center>预约定做</center></p>
				</div>
				<div class="ui-block-b">
					<center>
						<a href="#" data-icon="info"  rel="external">
							<img src="../images/product.jpg" width="80%"/>
						</a>
					</center>
					<p><center>商品分类</center></p>
				</div>
				<div class="ui-block-c">
					<center>
						<a href="./myOrderList.jsp" data-icon="info"  rel="external">
							<img src="../images/order.png" width="80%"/>
						</a>
					</center>
					<p><center>订单快查</center></p>
				</div>
			</div>
			<div class="ui-grid-b">
				<div class="ui-block-a">
					<center>
						<a href="#" data-icon="info"  rel="external">
							<img src="../images/profile.png" width="80%"/>
						</a>
					</center>
					<p><center>个人信息</center></p>
				</div>
				<div class="ui-block-b"></div>
				<div class="ui-block-c"></div>
			</div>
		</div>
		<div data-role="footer" data-position="fixed">
			<div data-role="navbar">
				<ul>
					<li><a href="#" data-icon="grid" class="ui-btn-active">主菜单</a></li>
					<li><a href="./setting.jsp" data-icon="gear" rel="external">设置</a></li>
				</ul>
			</div>		
		</div>
	</div>
</body>
</html>