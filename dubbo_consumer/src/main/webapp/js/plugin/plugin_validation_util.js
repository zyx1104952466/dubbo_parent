//��չУ�����
$(function() {
	//������ĸ�У�����
	jQuery.validator.addMethod("letter", function(value, element) {
	     var tel = /^([a-zA-Z]*)$/;
	     return this.optional(element) || (tel.test(value));
	 }, "ֻ��������ĸ");
	
	jQuery.validator.addMethod("digitOrLetter", function(value, element) {
	     var tel = /^([0-9a-zA-Z]*)$/;
	     return this.optional(element) || (tel.test(value));
	 }, "ֻ��������ĸ������");
	
	jQuery.validator.addMethod("digit", function(value, element) {
	     var tel = /^([0-9]*)$/;
	     return this.optional(element) || (tel.test(value));
	 }, "ֻ����������");
	
	jQuery.validator.addMethod("num", function(value, element) {
	     var tel = /^\d*(\.\d+)?$/;
	     return this.optional(element) || (tel.test(value));
	 }, "ֻ����������");
	 
	//value��Ԫ�ص�ֵ,element��Ԫ�ر��� param�ǲ��� 
	// �����������ֽ�    
	jQuery.validator.addMethod("byteRangeLength", function(value, element, param) {    
		var length = value.length;    
		for(var i = 0; i < value.length; i++){    
		    if(value.charCodeAt(i) > 127){    
		   		length++;    
		    }    
		}    
		return this.optional(element) || ( length >= param[0] && length <= param[1] );    
	}, "��ȷ������[{0}-{1}]���ֽ�(һ������=2���ֽ�)");    
	
	// �ֻ�������֤
	 jQuery.validator.addMethod("isMobile", function(value, element) {
	     var length = value.length;
	     var mobile = /^((([-]{})|([-]{}))+\d{})$/;
	     return this.optional(element) || (length == mobile.test(value));
	 }, "����ȷ��д�����ֻ�����");
	// �绰������֤
	 jQuery.validator.addMethod("isTel", function(value, element) {
	     var tel = /^\d{,}-?\d{,}$/;    //�绰�����ʽ-
	     return this.optional(element) || (tel.test(value));
	 }, "����ȷ��д���ĵ绰����");
	   
	 // ��ϵ�绰(�ֻ�/�绰�Կ�)��֤
	 jQuery.validator.addMethod("isPhone", function(value,element) {
	     var mobile = /^((([-]{})|([-]{}))+\d{})$/;
	     var tel = /^\d{,}-?\d{,}$/;
	     return this.optional(element) || (tel.test(value) || mobile.test(value));
	 }, "����ȷ��д������ϵ�绰");   
	
	 // ����������֤
	 jQuery.validator.addMethod("isZipCode", function(value, element) {
	     var tel = /^[0-9]{6}$/;
	     return this.optional(element) || (tel.test(value));
	 }, "����ȷ��д������������");

});
