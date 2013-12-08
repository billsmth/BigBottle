var currentPage=1, lastFlg=false;
(function shortPullPagePullImplementation($) { 
  "use strict";
  var pullDownGeneratedCount = 0,
    pullUpGeneratedCount = 0,
    listSelector = "div.short-pull-demo-page ul.ui-listview",
    lastItemSelector = listSelector + " > li:last-child";
      
  function gotPullDownData(event, data) {
    var i, newContent = "";
    for (i=0; i<13; i+=1) {
    	newContent = "<li>Pulldown-generated row " + (++pullDownGeneratedCount) + "</li>" + newContent;
	}
    $(listSelector).prepend(newContent).listview("refresh");
		data.iscrollview.refresh();
    }

  function gotPullUpData(event, data) {
	var iscrollview = data.iscrollview,
    newContent = "";
	if(!lastFlg){
		currentPage++;
		$.ajax({
			url: "http://www.wg5a.com/product/getPagedProducts.action",
			data: { 
				type: productType,
				pageId:currentPage
					},
			async: false,
			dataType: "json",
			success: function(data){
				
				lastFlg=data[1].lastFlg;
				
				var i=0;
				for(;i<data[0].PRODUCTLIST.length;i++){
					newContent+='<li><a href="http://www.wg5a.com/product/getProductByID.action?productId='+data[0].PRODUCTLIST[i].product_id+'">'
					+'<img src="http://www.wg5a.com/productlist/'+data[0].PRODUCTLIST[i].product_id+'/indexPic.jpg">'
					+'<h2>'+data[0].PRODUCTLIST[i].product_name+'</h2>'
					+'<p>单价:'+data[0].PRODUCTLIST[i].col2+' 元</p>'
					+'<p class="ui-li-aside">运费:'+data[0].PRODUCTLIST[i].col3+' 元</p></a></li>';
					
				}
				if(lastFlg){
					newContent+='<li>已是最后一页</li>';
				}
				$(listSelector).append(newContent).listview("refresh");  
				iscrollview.refresh(null, null, $.proxy(function afterRefreshCallback() { 
					this.scrollToElement(lastItemSelector, 400);
				}, iscrollview) );
			},  
			error: function(XMLHttpRequest, textStatus, errorThrown) {  
				alert(textStatus);  
			}  
		});
	}
  }
  
  function onPullDown (event, data) { 
  }  
  
  function onPullUp (event, data) {
    setTimeout(function fakeRetrieveDataTimeout() {
      gotPullUpData(event, data);   
      }, 1500); }   
  
  $(document).delegate("div.short-pull-demo-page", "pageinit", 
    function bindShortPullPagePullCallbacks(event) {
      $(".iscroll-wrapper", this).bind( {
      iscroll_onpulldown : onPullDown,
      iscroll_onpullup   : onPullUp
      } );
    }); 
 
  }(jQuery));
