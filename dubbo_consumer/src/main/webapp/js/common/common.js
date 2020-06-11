/**
function document.oncontextmenu(){return false;}
function document.onkeydown(){
	if (((event.ctrlKey)&&(event.keyCode==82))//ctrl+r
			||(event.keyCode==116)//F5
			||((event.ctrlKey)&&(event.keyCode==78))//ctrl+n
			){
		event.keyCode=0;event.returnValue = false;return false;
	}
}*/

var ZERO = 0.0001;
var LOAD_IMAGE = "<img src='" + CONTEXT_PATH + "/images/common/ajax_loading.gif' style='margin-left:20px;'/>";
var SAVE_IMAGE = "<img src='" + CONTEXT_PATH + "/images/common/ajax_saving.gif'/>";

var _tracer = null;
var _times = 0;
var _MAX_TIMES = 10; 
var _INTERVAL = 2000; 

var _INVALID_CHAR = "'<>/&";

/* 
 * 对于起止时间的判断，开始日期不能大于结束日期
 * startTimeId 开始日期的id
 * endTimeId   结束日期的id
 * msg0        提示消息，startTime列名
 * msg1        提示消息，endTime列名
 *
 *  格式为yyyy-MM-dd
 */
function timeCompare(startTimeId, endTimeId, msg0, msg1){
	var startTime = document.getElementById(startTimeId).value;
    var endTime = document.getElementById(endTimeId).value;
    var sdate = new Date(startTime.replace(/-/g,"/")).getTime();
    var edate = new Date(endTime.replace(/-/g,"/")).getTime();
    
    if((sdate - edate) > 0){
    	alert(msg0 + "不能大于" + msg1 + "，请修改后再重新尝试。");
    	return false;
    }
    
    if((sdate - edate) == 0){
    	return confirm(msg0 + "与" + msg1 + "相同，是否确定要提交数据？");
    }
    
    return true;
}


/* 
 * 对于起止时间的判断，开始日期不能大于结束日期
 * startTimeId 开始日期的id
 * endTimeId   结束日期的id
 * msg0        提示消息，startTime列名
 * msg1        提示消息，endTime列名
 *
 *  格式为yyyyMMdd
 */
function timeCompare2(startTimeId, endTimeId, msg0, msg1){
	var startTime = (document.getElementById(startTimeId).value)*1;
    var endTime = (document.getElementById(endTimeId).value)*1;
    if((startTime - endTime) > 0){
    	alert(msg0 + "不能大于" + msg1 + "，请修改后再重新尝试。");
    	return false;
    }
    
    if((startTime - endTime) == 0){
    	return confirm(msg0 + "与" + msg1 + "相同，是否确定要提交数据？");
    }
    
    return true;
}

/* 
 * 对于起止时间的判断，开始日期不能大于结束日期
 * startTime 开始日期的对象
 * endTime   结束日期的对象
 * msg0        提示消息，startTime列名
 * msg1        提示消息，endTime列名
 *
 *  格式为yyyyMMdd
 */
function timeCompare22(startTime, endTime, msg0, msg1){
	var startTime = startTime*1;
    var endTime = endTime*1;
    if((startTime - endTime) > 0){
    	alert(msg0 + "不能大于" + msg1 + "，请修改后再重新尝试。");
    	return false;
    }
    
    if((startTime - endTime) == 0){
    	return confirm(msg0 + "与" + msg1 + "相同，是否确定要提交数据？");
    }
    
    return true;
}


/* 
 * 对于起止时间的判断，开始日期不能大于结束日期 且结束日期不能小于当前日期
 * startTimeId 开始日期的id
 * endTimeId   结束日期的id
 * msg0        提示消息，startTime列名
 * msg1        提示消息，endTime列名
 *
 *  格式为yyyyMMdd
 */
function timeCompare3(startTimeId, endTimeId, msg0, msg1){
	var obj1 = document.getElementById(startTimeId).value;
	var obj2 = document.getElementById(endTimeId).value;
	if(obj1=='' && obj2==''){
		 return true;
	}
	if(obj1!='' && obj2==''){
		 return true;
	}
	if(obj1=='' && obj2!=''){
		 return true;
	}
	var startTime = (obj1)*1;
    var endTime = (obj2)*1;
    var nowdate = new Date().format('yyyyMMdd')*1;
    if((nowdate - endTime) > 0){
    	alert(msg1 + "不能小于当前时间，请修改后再重新尝试。");
    	return false;
    }
    if((startTime - endTime) > 0){
    	alert(msg0 + "不能大于" + msg1 + "，请修改后再重新尝试。");
    	return false;
    }
    if((startTime - endTime) == 0){
    	return confirm(msg0 + "与" + msg1 + "相同，是否确定要提交数据？");
    }
    
    return true;
}


/* 
 * 对于两个金额的比较，金额1不能大于金额2
 * startamountId 金额1
 * endamountId   结束日期的id
 * msg0        提示消息，startamountId列名
 * msg1        提示消息，endamountId列名
 */
function amountCompare(startamountId, endamountId, msg0, msg1){
	var sAmount = document.getElementById(startamountId).value*1;
    var eAmount = document.getElementById(endamountId).value*1;
    if((sAmount - eAmount) > 0){
    	alert(msg0 + "不能大于" + msg1 + "，请修改后再重新尝试。");
    	return false;
    }
    
    if((sAmount - eAmount) == 0){
    	return confirm(msg0 + "等于" + msg1 + "，是否确定要提交数据？");
    }
    
    return true;
}

/* 
 * 对于两个金额的比较，金额1不能大于金额2
 * startamount 金额1
 * endamount   结束日期的id
 * msg0        提示消息，startamountId列名
 * msg1        提示消息，endamountId列名
 */
function amountCompare22(startamount, endamount, msg0, msg1){
	var sAmount = startamount*1;
    var eAmount = endamount*1;
    if((sAmount - eAmount) > 0){
    	alert(msg0 + "不能大于" + msg1 + "，请修改后再重新尝试。");
    	return false;
    }
    
    if((sAmount - eAmount) == 0){
    	return confirm(msg0 + "等于" + msg1 + "，是否确定要提交数据？");
    }
    
    return true;
}

function containsInvalid(s) {
	if (s == null) {
		return false;
	}
	
	for (var i = 0; i < s.length; i++) {
		if (_INVALID_CHAR.indexOf(s.charAt(i)) > -1) {
			return true;
		}
	}
	
	return false;
}

function startTracker(func) {
	_tracer = setInterval(func, _INTERVAL);
	
	return _tracer;
}

function showRightImg(targetId){
	$('#' + targetId).html('<img src="' + CONTEXT_PATH + '/images/right.gif" height="12" width="16" vspace="4"/>');
}

function showFaultImg(targetId){
	$('#' + targetId).html('<img src="' + CONTEXT_PATH + '/images/fault.gif"  height="22" width="17" vspace="0"/>');
}

function isValidate(){
	var bValidate = true;
	$('div[id^="resultImg_"]').each(function(){
		if ($(this).html().indexOf('fault.gif') != -1){
			bValidate = false;
		}
	});
	return bValidate;
}


YToken = {

	callId: function() {
		var random = Math.floor(Math.random() * 10001);
	  	return (random + "_" + new Date().getTime()).toString();
	},

	create: function(jqueryForm) {
		if (jqueryForm.find('input[name="YLINK-KEY"]').length == 0) {
			jqueryForm.append('<input type="hidden" name="YLINK-KEY">');
		}
		
		jqueryForm.find('input[name="YLINK-KEY"]').val(YToken.callId());
	},

	get: function(jqueryForm) {
		return jqueryForm.find('input[name="YLINK-KEY"]').val();
	},

	clear: function(jqueryForm) {
		jqueryForm.find('input[name="YLINK-KEY"]').val('');
	}
}

function hasResult(){
	var result = $('input[name="result"]').val();
	if (result == null || result == "" || result == undefined){
		return false;
	}
	return true;
}

function getMessage(){
	return $('input[name="message"]').val();
}

function getResult(){
	return $('input[name="result"]').val();
}

function showTip(result, message, isHide, isReset){
	if (isHide == undefined || isHide == null || isHide == "undefined" || isHide == "null" || isHide == "") {
		isHide = true;
	}
	if (isReset == undefined || isReset == null) {
		isReset = true;
	}
	if (result == "true"){
		$('#tip').slideDown("slow").html('<img src="' + CONTEXT_PATH + '/images/success.gif" align="absmiddle">&nbsp;' + message);
		if (isReset){
			reset();
		}
		if (isHide){
			setTimeout(hideTip, 3000);
		}
	} else if (result == "false") {
		$('#tip').slideDown("slow").html('<img src="' + CONTEXT_PATH + '/images/fault.gif" align="absmiddle">&nbsp;' + message);
	} else if (result == "loading") {
		$('#tip').slideDown("slow").html('<img src="' + CONTEXT_PATH + '/images/loading.gif" align="absmiddle">&nbsp;' + message);
	}
}

function hideTip(){
	$('#tip').slideUp("slow");
}

function finishValidate(tgt, isValid) {
	var tipSpan = tgt.find('+ span');

	if (tipSpan.length == 0) {
		return;
	}
	
	if (isValid) {
		tipSpan.addClass('field-tipinfo');
		tipSpan.removeClass('error-input');
	}
	else {
		tipSpan.addClass('error-input');
		tipSpan.removeClass('field-tipinfo');
	}
}

/**
 * 表单重置通用方法
 */
function reset() {
	clearData($('input:text'));
	clearData($('input:password'));
	clearData($('select'));
	clearData($('textarea'));
}

/**
 * 清空对象
 * @param obj Jquery对象
 */
function clearData(obj) {
	if (obj != null && obj != undefined && obj.length > 0) {
		obj.val('');
	}
}

DataType = {
	STRING: '0',
	NUMBER: '1',
	CURRENCY: '2',
	isValid: function(value, dataType, maxLength) {
		if (this.STRING == dataType) {
			return value.length <= maxLength;
		}

		if (this.NUMBER == dataType || this.CURRENCY == dataType ) {
			return Validator.isDecimal(value);
		}
	}
}

FormUtils = {
	selectAll: function(target, checkboxName) {
		$(':checkbox[name="' + checkboxName + '"]').each(function() {
			$(this).attr('checked', target.checked);
		});
	},

	getCheckedValues: function(checkboxName) {
		return $(':checkbox[name="' + checkboxName + '"][checked]').map(function(){
	  		return $(this).val();
		}).get().join(",");
	},

	getCheckedArrayValues: function(checkboxName) {
		return $(':checkbox[name="' + checkboxName + '"][checked]').map(function(){
	  		return $(this).val();
		}).get();
	},

	hasSelected: function(checkboxName) {
		return $(':checkbox[name="' + checkboxName + '"][checked]').length > 0;
	},

	getSelectedCount: function(checkboxName) {
		return $(':checkbox[name="' + checkboxName + '"][checked]').length;
	},

	getHiddenTextValuesStr: function(textName) {
		return $('input:hidden[name="' + textName + '"]').map(function(){return $(this).val();}).get().join(",");
	},

	hasRadio: function(radioboxName) {
		return $(':radio[name="' + radioboxName + '"][checked]').length > 0;
	},

	getRadioedValue: function(radioboxName) {
		return $(':radio[name="' + radioboxName + '"][checked]').val();
	},

	reset: function(formId) {
		this.clearData($('#' + formId + ' input:text'));
		this.clearData($('#' + formId + ' input:password'));
		this.clearData($('#' + formId + ' select'));
		this.clearData($('#' + formId + ' textarea'));
	},

	clearData: function(obj) {
		if (obj != null && obj != undefined && obj.length > 0){
			obj.val('');
		}
	},

	submitFirstTokenForm: function() {
		this.submitTokenForm(0);
	},
	
	submitTokenForm: function(formIndex) {
		var form = $('form:eq(' + formIndex + ')');
		
		if ((form.hasClass('validate') && form.valid()) || !form.hasClass('validate')) {
			form.find(':button').attr('disabled', true);
			form.find(':submit').attr('disabled', true);
			form.find(':reset').attr('disabled', true);
			YToken.create(form);
			form.submit();
		}
	}
};

function equalArray(array1, array2) {
	if (!$.isArray(array1) || !$.isArray(array2)) {
		return false;
	}

	if (array1.length != array2.length) {
		return false;
	}

	var eq = true;
	
	$.each(array1, function(i, n) {
		if ($.inArray(n, array2) < 0) {
			eq = false;
			return false;
		}
	});
	
	return eq;
}

function gotoUrl(url){
	window.location.href= CONTEXT_PATH + url;
}

/**
 * 生成一个随机数;
 * 1.防止ajax不提交
 * 2.防止重复提交
 */
function callId(){
	var random = Math.floor(Math.random() * 10001);
  	var id = (random + "_" + new Date().getTime()).toString();
  	return id;
}

function createTokenParameter(){
	 return "&YS-MANAGER-KEY=" + callId();
}

function createToken(){
	$('input[name="YS-MANAGER-KEY"]').val(callId());
}

function getToken(){
	return $('input[name="YS-MANAGER-KEY"]').val();
}

function clearToken(){
	$('input[name="YS-MANAGER-KEY"]').val('');
}

function readonly(){
	$("input[readonly='true']").css({border:"#CCC 1px solid","background-color": "#F0F0F0" }).attr({title:"只读文本框"});
}

function forward(url) {
	window.location = url;
}

/*
 * @return {TypeName} 
 */
function eConfirm(){
	return confirm('您真的要删除吗?');
}

function setTrCss(tr, className){
	tr.className=className;
}

function checkAll(e, itemName){
  var aa = document.getElementsByName(itemName);
  for (var i=0; i<aa.length; i++)
   aa[i].checked = e.checked;
}

function getChecked(os) {
	var o = null;
	if (os != null) {
		var length = os.length;
		if (length == null) {
			if (os.checked) o = os;
		} else {
			for (var i = 0; i < length; i ++) {
				if (os[i].checked) {
					o = os[i];
					break;
				}
			}
		}
	}
	return o;
}

function isChecked(os) {
	if (os == null) return false;
	var length = os.length;
	if (length == null) return os.checked;
	for (var i = 0; i < length; i ++) {
		if (os[i].checked) return true;
	}
	return false;
}

/*
 * 点击行的样式
 * @param {Object} tr
 */
/*function clkTr(tr){
	if(tr.className=='curr_beha_bgcolor'){
		setTrCss(tr,'beha_bgcolor');
		tr.id="";
	}else{
		setTrCss(tr,'curr_beha_bgcolor');
		tr.id="flag";
	}
}*/
/*
 * 鼠标移动到行的样式
 * @param {Object} tr
 */
function mouseoverTr(tr){
	setTrCss(tr,'curr_beha_bgcolor');
}

/*
 * 鼠标移出行的样式
 * @param {Object} tr
 */
function mouseoutTr(tr, cssname){
	if (typeof cssname != 'undefined'){
		setTrCss(tr,cssname);
	}else if(tr.id!="flag"){
		setTrCss(tr,'beha_bgcolor');
	} 
	
		
}

//去除左右边空格
function lTrim(str) {
    if (str.charAt(0) == " ") {
        //如果字串左边第一个字符为空格 
        str = str.slice(1); //将空格从字串中去掉 
        //这一句也可改成 str = str.substring(1, str.length); 
        str = lTrim(str);    //递归调用 
    }
    return str;
}
//rTrim()去掉字串右边的空格 
function rTrim(str) {
    var iLength;
    iLength = str.length;
    if (str.charAt(iLength - 1) == " ") {
        //如果字串右边第一个字符为空格 
        str = str.slice(0, iLength - 1); //将空格从字串中去掉 
        //这一句也可改成 str = str.substring(0, iLength - 1); 
        str = rTrim(str);    //递归调用 
    }
    return str;
}
//trim() 去掉字串两边的空格 
function trim(str) {
    return lTrim(rTrim(str));
}

Date.prototype.format = function(format){
	var o = {
	"M+" : this.getMonth()+1, //month
	"d+" : this.getDate(), //day
	"h+" : this.getHours(), //hour
	"m+" : this.getMinutes(), //minute
	"s+" : this.getSeconds(), //second
	"q+" : Math.floor((this.getMonth()+3)/3), //quarter
	"S" : this.getMilliseconds() //millisecond
	}
	if(/(y+)/.test(format)) {
	format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
	}
	for(var k in o) {
		if(new RegExp("("+ k +")").test(format)) {
		format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
		}
	}
	return format;
}
function formsubmitforTime(type,starttime,endtime){
	var enddate=new Date().getTime();
	var starTime=enddate-type*30.5*24*3600*1000;
	var ed=new Date().format("yyyy-MM-dd hh:mm:ss");
	var st=new Date(starTime).format("yyyy-MM-dd hh:mm:ss");
	//var form = $('#queryTransForm');
	if($("#"+endtime))
		$("#"+endtime).attr("value",ed);
	if($("#"+starttime))
		$("#"+starttime).attr("value",st);
	//form.submit();
} 

//新开一个子窗口，pageurl:子窗口的路径
function openwindow(pageurl){
	var iWidth = 800; //弹出窗口的宽度;
	var iHeight = 600; //弹出窗口的高度;
	var iTop = (window.screen.availHeight-30-iHeight)/2; //获得窗口的垂直位置;
	var iLeft = (window.screen.availWidth-10-iWidth)/2; //获得窗口的水平位置;
	window.open(pageurl,'cust','width=800,height=600,top='+ iTop +',left='+ iLeft +',menubar=no,toolbar=yes,scrollbars=yes')
}

//根据行别的下拉列表来联动支付网关下拉列表
function getPaygateByBanktype(){
	$("#banktype").change(function(){
		var val = $("#banktype").val();
		if(val == '' || val == 'undefined'){
			return false;
		}else{
			var url = "ajax.do?method=getPaygateByBanktype";
			var params={'banktype':val};
			$.post(url, params, function(data){
				//下拉框
				var paygatesel = $("#paygate").empty().html("<option></option>");
				$.each(data,function(idx,items){
					$("<option value='"+ items.paygateNo +"'>"+ items.paygateName +"</option>").appendTo(paygatesel);
				})
			}, "json");	
		}
	});	
}

 /**
 * @ return :version type (Data Type: String)
 *		IE6=>MSIE6.0
 *		IE7=>MSIE7.0
 *		Firefox=>Firefox
 *		Safari=>Safari
 *		Camino=>Camino
 *		Gecko=>Gecko
 * @ author: LDW
 * @ create date: 2009-3-31
 */
function getBrowserVersion(){
	var browser=navigator.appName; 
	var b_version=navigator.appVersion 
	var version=b_version.split(";");
	var trim_Version="";
	try{
		trim_Version=version[1].replace(/[ ]/g,"");
	}catch(e){
		
	}
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") { 
		return trim_Version;
	}else
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") { 
		return trim_Version;
	}else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0"){ 
		return trim_Version;
	}else if(navigator.userAgent.indexOf("Firefox")>0){ 
	    return "Firefox"; 
	}else if(navigator.userAgent.indexOf("Safari")>0) { 
		return "Safari";
	}else if(navigator.userAgent.indexOf("Camino")>0){ 
		return "Camino"; 
	}else if(navigator.userAgent.indexOf("Gecko/")>0){ 
		return "Gecko"; 
	}
	return "";
}

function showWindow(){ 		
		var objWin=document.getElementById("divWin"); 
		var browserName = getBrowserVersion();
		objWin.style.zIndex=999;  
		objWin.style.display=""; 
		objWin.style.visibility = 'visible';
		if(browserName=='MSIE6.0'||browserName=='MSIE7.0'||browserName=='MSIE8.0'){
			objWin.style.top=(document.documentElement.scrollTop+(document.documentElement.clientHeight-objWin.offsetHeight)/2)+250+"px";
			objWin.style.left=(document.documentElement.scrollLeft+(document.documentElement.clientWidth-objWin.offsetWidth)/2)+400+"px";
		}else{
			objWin.style.top=(document.documentElement.scrollTop+(document.documentElement.clientHeight-objWin.offsetHeight)/2)+"px";
			objWin.style.left=(document.documentElement.scrollLeft+(document.documentElement.clientWidth-objWin.offsetWidth)/2)+"px";
		}
		if(document.getElementById("win_bg").style.display!=''){
			var obj_bg=document.getElementById("win_bg"); 
			obj_bg.style.display="";	
			obj_bg.style.visibility = 'visible';
			if(browserName=='MSIE6.0'){
				obj_bg.className="win_bgIE6";	
			}else{
				obj_bg.className="win_bg";
			}
			if(browserName=='Firefox')
				obj_bg.style.height=window.screen.availHeight+"px";		
			else
				obj_bg.style.height=document.body.scrollHeight+"px";	
		}
	} 
	
function showWindowInIndex(){ 		
		var objWin=document.getElementById("divWin"); 
		var browserName = getBrowserVersion();
		objWin.style.zIndex=999;  
		objWin.style.display=""; 
		objWin.style.visibility = 'visible';
		if(browserName=='MSIE6.0'||browserName=='MSIE7.0'||browserName=='MSIE8.0'){
			objWin.style.top=(document.documentElement.scrollTop+(document.documentElement.clientHeight-objWin.offsetHeight)/2)+100+"px";
			objWin.style.left=(document.documentElement.scrollLeft+(document.documentElement.clientWidth-objWin.offsetWidth)/2)+50+"px";
		}else{
			objWin.style.top=(document.documentElement.scrollTop+(document.documentElement.clientHeight-objWin.offsetHeight)/2)+"px";
			objWin.style.left=(document.documentElement.scrollLeft+(document.documentElement.clientWidth-objWin.offsetWidth)/2)+"px";
		}
		if(document.getElementById("win_bg").style.display!=''){
			var obj_bg=document.getElementById("win_bg"); 
			obj_bg.style.display="";	
			obj_bg.style.visibility = 'visible';
			if(browserName=='MSIE6.0'){
				obj_bg.className="win_bgIE6";	
			}else{
				obj_bg.className="win_bg";
			}
			if(browserName=='Firefox')
				obj_bg.style.height=window.screen.availHeight+"px";		
			else
				obj_bg.style.height=document.body.scrollHeight+"px";	
		}
	} 
	
	function closeWindow(){ 
		document.getElementById("divWin").style.display="none"; 
		document.getElementById("divWin").style.visibility="hidden"; 
		document.getElementById("win_bg").style.display="none"; 
		document.getElementById("win_bg").style.visibility="hidden"; 
	} 
	
var browserName = getBrowserVersion();
var arrList = new Array("state","status");//需要隐藏的下拉框，在IE6的情况下有效。
function compatibleIE6(type){
	if(browserName=="MSIE6.0"){
		if(type=='show'){
			for(var i=0;i<arrList.length;i++){
				$("#"+arrList[i]).hide();				
			}
		}else{
			for(var i=0;i<arrList.length;i++){
				$("#"+arrList[i]).show();
			}
		}
	}
}
	//autocomplete调用
	//isB B 企业用户 C 个人 可为空  isM 0 商户 1非商户 可为空
	function autoSearchContent(obj,resid, isB, isM) {
	  var url = CONTEXT_PATH+'/ajax.do?method=findCust';
	  if(isB != ''&& isB != undefined){
	  		url = url + "&isB="+isB;
	  }
	  if(isM != ''&& isM != undefined){
	  		url = url + "&isM="+isM;
	  }
	  $(obj).autocomplete(url, {
	       minChars: 1,
	       width:360,
	       max:20,
	       autoFill: false,
	       mustMatch: false,
	       matchContains: false,
	       extraParams: {basicProductLine:function(){return 'paramsTemp';}},   
	       dataType: 'json',  
	            parse: function(data) {   
	                return $.map(eval(data), function(row) {   
	                    return {   
	                        data: row,   
	                        //value: '<a href="#'+row.code+'">' +row.searchKey + '</a>',   
	                        //result:'<a href="#'+row.code+'">' + row.searchKey + '</a>'
	                        value: row.CUSTID,   
	                        result:row.DESCKEY
	                    }   
	                });   
	            }, 
	                formatItem: function(row, i, max) {     
	                    return row.DESCKEY;
	            		//return '<a href="#'+row.code+'">' +row.searchKey + '</a>';
	                }
	                ,
	                formatMatch: function(row, i, max) {     
	                    return row.DESCKEY;
	                	//return '<a href="#'+row.code+'">' +row.searchKey + '</a>';
	                } 
	                , 
	                formatResult: function(row) {     
	                    return row.DESCKEY;
	                    //return '<a href="#'+row.code+'">' +row.searchKey + '</a>';
	                }
	 
	        });  
		 	$(obj).result(function(event, row, formatted) {
		 			if(resid == 'agentusercode'){
				     	var custid=document.getElementById('custid');
				     	var ucode=document.getElementById("agentusercode");
				        ucode.value=row.USERCODE;
		 			}else{
	 					 if(resid=='' || resid == undefined){
			 				resid = 'custid';
			 			}
				     	var custid=document.getElementById(resid);
				        custid.value=row.CUSTID;
		 			}
		     });
	         
	 	}
	/**
		获得当前对象的左边间距
	*/
	function getL(id){
		var e=document.getElementById(id);
		var l=e.offsetLeft;
		while(e=e.offsetParent){
			l+=e.offsetLeft;
		}
		return l;
	}
	/**
		获得当前对象的上边间距
	*/	
	function getT(id){
		var e=document.getElementById(id);
		var t=e.offsetTop;
		while(e=e.offsetParent){
			t+=e.offsetTop;
		}
		return t;
	}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//////////////////////////////////////////////////////////////////////科目号或科目名称////////////////////////////////////////////////////////////////////
	function autoSearchContent_subject(obj,objid) {
	  var url = CONTEXT_PATH+'/ajax.do?method=findSubject';
	  $(obj).autocompleteSubject(url, {
	       minChars: 1,
	       width:360,
	       max:20,
	       autoFill: false,
	       mustMatch: false,
	       matchContains: false,
	       extraParams: {basicProductLine:function(){return 'paramsTemp';}},   
	       dataType: 'json',  
	            parse: function(data) {   
	                return $.map(eval(data), function(row) {   
	                    return {   
	                        data: row,   
	                        value: row.subjectcode,   
	                        result:row.subjectcode
	                    }   
	                });   
	            }, 
                formatItem: function(row, i, max) {     
                    return "("+row.subjectcode+")"+row.subjectname;
                }
                ,
                formatMatch: function(row, i, max) {     
                    return "("+row.subjectcode+")"+row.subjectname;
                } 
                , 
                formatResult: function(row) {     
                    return "("+row.subjectcode+")"+row.subjectname;
                }
	        });  
		 	$(obj).result(function(event, row, formatted) {
		     	var temp=document.getElementById(objid);
		        temp.value=row.subjectcode;
		        if(objid=='subjectCodeJ'){
		        	$("#jSubjectLabel").html("科目名:"+row.subjectname);
		        }
		        if(objid=='subjectCodeD'){
		        	$("#dSubjectLabel").html("科目名:"+row.subjectname);
		        }
		     });
	         
	 	}
	 	
	 	
	//////////////////////////////////////////////////////////////////////账户ID////////////////////////////////////////////////////////////////////
	function autoSearchContent_Account(obj,objid) {
	  var url = CONTEXT_PATH+'/ajax.do?method=findAccountId';
	  $(obj).autocompleteAccount(url, {
	       minChars: 1,
	       width:360,
	       max:20,
	       autoFill: false,
	       mustMatch: false,
	       matchContains: false,
	       extraParams: {basicProductLine:function(){return 'paramsTemp';}},   
	       dataType: 'json',  
	            parse: function(data) {   
	                return $.map(eval(data), function(row) {   
	                    return {   
	                        data: row,   
	                        value: row.accountid,   
	                        result:row.accountid
	                    }   
	                });   
	            }, 
                formatItem: function(row, i, max) {     
                    return row.accountid;
                }
                ,
                formatMatch: function(row, i, max) {     
                    return row.accountid;
                } 
                , 
                formatResult: function(row) {     
                    return row.accountid;
                }
	        });  
		 	$(obj).result(function(event, row, formatted) {
		     	var temp=document.getElementById(objid);
		        temp.value=row.accountid;
		        $("#currency").val(row.currency);
		        $("#currency1").val(row.currency);
		        if(objid=='accountJ'){
		        	$("#jAccountLabel").html("客户名:"+row.accountName+" 币种:"+row.currency);
		        }
		        if(objid=='accountD'){
		        	$("#dAccountLabel").html("客户名:"+row.accountName+" 币种:"+row.currency);
		        }		        
		     });
	         
	 	}

     function detail(url,wtitle){
    	$("#iframe").attr("src",url);
    	$('#w').window({modal:true,title:wtitle});	            
    	$('#w').window('open');
    }
     function detailOther(url,wtitle,divid,frameid){
     	$("#"+frameid).attr("src",url);
     	$('#'+divid).window({modal:true,title:wtitle});	            
     	$('#'+divid).window('open');
     }
     //加载等待样式  msg : 正在加载，请稍后...
     function createWait(msg) {
    	 var h = document.body.clientHeight; 
		 $("<div class=\"datagrid-mask\"></div>").css({display:"block",width:"100%",height:h}).appendTo("body"); 
		 $("<div class=\"datagrid-mask-msg\"></div>").html(msg).appendTo("body").css({display:"block",
		  left:($(document.body).outerWidth(true) - 190) / 2,
		  top:(h - 45) / 2});    	 
     }
     //加载完成关闭
     function closeWait() {
    	 $('.datagrid-mask-msg').remove();
	     $('.datagrid-mask').remove();
     }
     
     function addTabs(title,url){
         _setDomain();
         parent.closeTab(title);
         parent.addTab(title,BASE_PATH + url);
     }
   //iframe自适应宽度
     function SetWinHeight(obj) {
			var win = obj;
			if (document.getElementById) {
				if (win && !window.opera) {
					if (win.contentDocument
							&& win.contentDocument.body.offsetHeight)
						win.height = win.contentDocument.body.offsetHeight;
					else if (win.Document
							&& win.Document.body.scrollHeight)
						win.height = win.Document.body.scrollHeight;
				}
			}
		}