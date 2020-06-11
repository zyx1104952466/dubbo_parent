//扩展校验规则
$(function() {
	//老马的四个校验规则
	jQuery.validator.addMethod("letter", function(value, element) {
	     var tel = /^([a-zA-Z]*)$/;
	     return this.optional(element) || (tel.test(value));
	 }, "只能输入字母");
	
	jQuery.validator.addMethod("digitOrLetter", function(value, element) {
	     var tel = /^([0-9a-zA-Z]*)$/;
	     return this.optional(element) || (tel.test(value));
	 }, "只能输入字母或数字");
	
	jQuery.validator.addMethod("digit", function(value, element) {
	     var tel = /^([0-9]*)$/;
	     return this.optional(element) || (tel.test(value));
	 }, "只能输入整数");
	
	jQuery.validator.addMethod("num", function(value, element) {
	     var tel = /^\d*(\.\d+)?$/;
	     return this.optional(element) || (tel.test(value));
	 }, "只能输入数字");
	 
	//value是元素的值,element是元素本身 param是参数 
	// 中文字两个字节    
	jQuery.validator.addMethod("byteRangeLength", function(value, element, param) {    
		var length = value.length;    
		for(var i = 0; i < value.length; i++){    
		    if(value.charCodeAt(i) > 127){    
		   		length++;    
		    }    
		}    
		return this.optional(element) || ( length >= param[0] && length <= param[1] );    
	}, "请确保输入[{0}-{1}]个字节(一个汉字=2个字节)");    
	
	// 手机号码验证
	 jQuery.validator.addMethod("isMobile", function(value, element) {
	     var length = value.length;
	     var mobile = /^((([-]{})|([-]{}))+\d{})$/;
	     return this.optional(element) || (length == mobile.test(value));
	 }, "请正确填写您的手机号码");
	// 电话号码验证
	 jQuery.validator.addMethod("isTel", function(value, element) {
	     var tel = /^\d{,}-?\d{,}$/;    //电话号码格式-
	     return this.optional(element) || (tel.test(value));
	 }, "请正确填写您的电话号码");
	   
	 // 联系电话(手机/电话皆可)验证
	 jQuery.validator.addMethod("isPhone", function(value,element) {
	     var mobile = /^((([-]{})|([-]{}))+\d{})$/;
	     var tel = /^\d{,}-?\d{,}$/;
	     return this.optional(element) || (tel.test(value) || mobile.test(value));
	 }, "请正确填写您的联系电话");   
	
	 // 邮政编码验证
	 jQuery.validator.addMethod("isZipCode", function(value, element) {
	     var tel = /^[0-9]{6}$/;
	     return this.optional(element) || (tel.test(value));
	 }, "请正确填写您的邮政编码");

});
