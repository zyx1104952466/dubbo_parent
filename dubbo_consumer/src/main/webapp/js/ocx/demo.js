function get_time(){
return new Date().getTime();
}
function _$(v){
	return document.getElementById(v);
}
//判断密码强度
function SetPWDStrength(n){

            _$("passwd_level_1").style.background="url("+CONTEXT_PATH+"/images/bgPwd.gif)";
            _$("passwd_level_2").style.background="url("+CONTEXT_PATH+"/images/bgPwd.gif)";
            _$("passwd_level_3").style.background="url("+CONTEXT_PATH+"/images/bgPwd.gif)";
     	    if(n==2){
				_$("passwd_level_1").style.background="url("+CONTEXT_PATH+"/images/bg1.gif)";
			}
			if(n==3){
			   _$("passwd_level_1").style.background="url("+CONTEXT_PATH+"/images/bg1.gif)";
			   _$("passwd_level_2").style.background="url("+CONTEXT_PATH+"/images/bg1.gif)";
			}
			if(n==4){
			   _$("passwd_level_1").style.background="url("+CONTEXT_PATH+"/images/bg1.gif)";
			   _$("passwd_level_2").style.background="url("+CONTEXT_PATH+"/images/bg1.gif)";
			   _$("passwd_level_3").style.background="url("+CONTEXT_PATH+"/images/bg1.gif)";
			}

}

function EntertoTab(){
	document.getElementById("input2").focus();
}

function FormSubmit(){
	$.ajax({
		url: "./srand_num.jsp?"+get_time(),
		type: "GET",
		async: false,
		success: function(srand_num){
		    pgeditor.pwdSetSk(srand_num);
		}
	 });
	var PwdResult=pgeditor.pwdResult();
	var machineNetwork=pgeditor.machineNetwork();
	var machineDisk=pgeditor.machineDisk();
	var machineCPU=pgeditor.machineCPU();


	if(pgeditor.pwdLength()==0){
	     alert("密码不能为空");
		 _$("_ocx_password").focus();
		 return false;
	}

	if(pgeditor.pwdValid()==1){
		alert("密码不符合要求");
		 _$("_ocx_password").focus();
		 return false;
	}
	//var l=_$("_ocx_password").get_output3();
	//var n=_$("_ocx_password").get_output4();
	//alert(l+"--"+n);

	_$("password").value=PwdResult;//获得密码密文,赋值给表单
	_$("local_network").value=machineNetwork;//获得网卡和MAC信息,赋值给表单
	_$("local_disk").value=machineDisk;//获得硬盘信息,赋值给表单
	_$("local_nic").value=machineCPU;//获得CPU信息,赋值给表单

	document.form1.submit();

}

function FormSubmit1(){
	$.ajax({
		url: "./srand_num.jsp?"+get_time(),
		type: "GET",
		async: false,
		success: function(srand_num){
			pgeditorcvn.pwdSetSk(srand_num);
		}
	 });
	var PwdResult=pgeditorcvn.pwdResult();
	var machineNetwork=pgeditorcvn.machineNetwork();
	var machineDisk=pgeditorcvn.machineDisk();
	var machineCPU=pgeditorcvn.machineCPU();
	if(pgeditorcvn.pwdLength()==0){
	     alert("密码不能为空");
		 _$("_ocx_password").focus();
		 return false;
	}
	if(pgeditorcvn.pwdValid()==1){
		alert("密码不符合要求");
		 _$("_ocx_password").focus();
		 return false;
	}

	_$("password").value=PwdResult;//获得密码密文,赋值给表单
	_$("local_network").value=machineNetwork;//获得网卡和MAC信息,赋值给表单
	_$("local_disk").value=machineDisk;//获得硬盘信息,赋值给表单
	_$("local_nic").value=machineCPU;//获得CPU信息,赋值给表单

	document.form1.submit();
}

function FormSubmit2(){
	$.ajax({
		url: "./srand_num.jsp?"+get_time(),
		type: "GET",
		async: false,
		success: function(srand_num){
		   pgeditoratm.pwdSetSk(srand_num);
		}
	 });
	var PwdResult=pgeditoratm.pwdResult();
	var machineNetwork=pgeditoratm.machineNetwork();
	var machineDisk=pgeditoratm.machineDisk();
	var machineCPU=pgeditoratm.machineCPU();
	if(pgeditoratm.pwdLength()==0){
	     alert("密码不能为空");
		 _$("_ocx_password2").focus();
		 return false;
	}
	if(pgeditoratm.pwdValid()==1){
		alert("密码不符合要求");
		 _$("_ocx_password2").focus();
		 return false;
	}

	_$("password").value=PwdResult;//获得密码密文,赋值给表单
	_$("local_network").value=machineNetwork;//获得网卡和MAC信息,赋值给表单
	_$("local_disk").value=machineDisk;//获得硬盘信息,赋值给表单
	_$("local_nic").value=machineCPU;//获得CPU信息,赋值给表单

	document.form1.submit();
}
//清除密码强度
function ClearLevel(){
    _$("passwd_level_1").style.background="url("+CONTEXT_PATH+"/images/bgPwd.gif)";
    _$("passwd_level_2").style.background="url("+CONTEXT_PATH+"/images/bgPwd.gif)";
    _$("passwd_level_3").style.background="url("+CONTEXT_PATH+"/images/bgPwd.gif)";
}
var _sn = 0;
var temp_mcrypt="";
//获取密码强度
function GetLevel(){
  var n=pgeditor.pwdStrength();
  if(n>1){
  	  SetPWDStrength(n);
  }else{
       ClearLevel();
  }
  $("#lbl_psw").css("color","#6A6A6A");
		    $("#lbl_psw").html('<img src="'+CONTEXT_PATH+'/images/onShow.gif" /> 请输入8到20位密码，需包含数字和字母');
			if(pgeditor.pwdLength()>=8 && pgeditor.pwdLength()<=20){
					$("#lbl_psw").css("color","#6A6A6A");
				  //   $("#lbl_psw").html('<img src="'+CONTEXT_PATH+'/images/onSuccess.gif" /> 输入正确');
					$("#lbl_psw").html('');
			}

  if(pgeditor1.pwdLength()<8 || pgeditor1.pwdLength()>20){
  	$("#lbl_psw1").css("color","#6A6A6A");
	$("#lbl_psw1").html('<img src="'+CONTEXT_PATH+'/images/onShow.gif" /> 请输入8到20位密码，需包含数字和字母');
  }else if(pgeditor1.pwdLength()>=0 && _sn==0){
    _sn=1;
  	$.ajax({
					url: CONTEXT_PATH+"/ocx/srand_num.jsp?"+get_time(),
					type: "GET",
					async: false,
					success: function(srand_num){
						temp_mcrypt = srand_num;
					    pgeditor.pwdSetSk(srand_num);
					    pgeditor1.pwdSetSk(srand_num);
					}
				 });
				_$("password").value=pgeditor.pwdResult();
				_$("password1").value=pgeditor1.pwdResult();
  }else if(_$("password").value !="" &&_$("password").value == _$("password1").value){
  	$("#lbl_psw1").css("color","#6A6A6A");
	//$("#lbl_psw1").html('<img src="'+CONTEXT_PATH+'/images/onSuccess.gif" /> 输入正确');
  	$("#lbl_psw1").html('');
  }else if(_$("password").value != _$("password1").value){
  	$("#lbl_psw1").css("color","red");
	$("#lbl_psw1").html('<img src="'+CONTEXT_PATH+'/images/onError.gif" /> 2次输入密码不一致');
  }

  if(_sn==1){
  	 pgeditor1.pwdSetSk(temp_mcrypt);
  	 _$("password1").value=pgeditor1.pwdResult();
  }
}