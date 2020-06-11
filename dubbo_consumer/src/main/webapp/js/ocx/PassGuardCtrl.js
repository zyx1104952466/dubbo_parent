var PGEdit_IE32_CLASSID="3A2C8BC3-5B68-4AE5-81D6-6DC378708F3E";
var PGEdit_IE32_CAB="PassGuardCtrl.cab#version=1,0,1,5";
var PGEdit_IE32_EXE="PassGuardSetupIE.exe";

var PGEdit_IE64_CLASSID="206F48A0-61BB-48C8-B54C-7700B7923CFD";
var PGEdit_IE64_CAB="PassGuardX64.cab#version=1,0,0,4";
var PGEdit_IE64_EXE="PassGuardSetupX64.exe";

var PGEdit_FF="PassGuardSetupFF.exe";
var PGEdit_Linux32="";
var PGEdit_Linux64="";
var PGEdit_FF_VERSION="3.0.0.10";
var PGEdit_Linux_VERSION="";

var PGEdit_MacOs="";
var PGEdit_MacOs_VERSION="";

var PGEdit_MacOs_Safari="";
var PGEdit_MacOs_Safari_VERSION="";


var UPEdit_Update="0";//非IE控件是否强制升级 1强制升级,0不强制升级

var PGECert="";
if(navigator.userAgent.indexOf("MSIE")<0){
	   navigator.plugins.refresh();
}

;(function($) {
	$.pge = function (options) {
		this.settings = $.extend(true, {}, $.pge.defaults, options);
		this.init();
	};

	$.extend($.pge, {
		defaults: {
			pgePath: "./ocx/",
			pgeId: "",
			pgeEdittype: 0,
			pgeEreg1: "",
			pgeEreg2: "",
			pgeCert: "",
			pgeMaxlength: 12,
			pgeTabindex: 2,
			pgeClass: "ocx_style",
			pgeInstallClass: "ocx_style",
			pgeOnkeydown:"",
			pgeFontName:"",
			pgeFontSize:"",
			pgeOnblur:"",
			pgeOnfocus:"",
			tabCallback:"",
			pgeBackColor:"",
			pgeForeColor:"",
			pgeCapsLKOn:"",
			pgeCapsLKOff:""
		},

		prototype: {
			init: function() {				
			    this.pgeDownText="请点此安装控件";
			    this.osBrowser = this.checkOsBrowser();
				this.pgeVersion = this.getVersion();			    			
				this.isInstalled = this.checkInstall();
				if(this.settings.pgeCert=="") this.settings.pgeCert=PGECert;
			},

			checkOsBrowser: function() {
				var userosbrowser;
				if((navigator.platform =="Win32") || (navigator.platform =="Windows")){
					if(navigator.userAgent.indexOf("MSIE")>0 || navigator.userAgent.indexOf("msie")>0 || navigator.userAgent.indexOf("Trident")>0 || navigator.userAgent.indexOf("trident")>0){
						if(navigator.userAgent.indexOf("ARM")>0){
							userosbrowser=9; //win8 RAM Touch
							this.pgeditIEExe="";
						}else{
							userosbrowser=1;//windows32ie32
							this.pgeditIEClassid=PGEdit_IE32_CLASSID;
							this.pgeditIECab=PGEdit_IE32_CAB;
							this.pgeditIEExe=PGEdit_IE32_EXE;
						}
					}else{
						userosbrowser=2; //windowsff
						this.pgeditFFExe=PGEdit_FF;
					}
				}else if((navigator.platform=="Win64")){
					if(navigator.userAgent.indexOf("Windows NT 6.2")>0 || navigator.userAgent.indexOf("windows nt 6.2")>0){		
						userosbrowser=1;//windows32ie32
						this.pgeditIEClassid=PGEdit_IE32_CLASSID;
						this.pgeditIECab=PGEdit_IE32_CAB;
						this.pgeditIEExe=PGEdit_IE32_EXE;						
					}else if(navigator.userAgent.indexOf("MSIE")>0 || navigator.userAgent.indexOf("msie")>0 || navigator.userAgent.indexOf("Trident")>0 || navigator.userAgent.indexOf("trident")>0){
						userosbrowser=3;//windows64ie64
						this.pgeditIEClassid=PGEdit_IE64_CLASSID;
						this.pgeditIECab=PGEdit_IE64_CAB;
						this.pgeditIEExe=PGEdit_IE64_EXE;			
					}else{
						userosbrowser=2;//windowsff
						this.pgeditFFExe=PGEdit_FF;
					}
				}else if(navigator.userAgent.indexOf("Linux")>0){
					if(navigator.userAgent.indexOf("_64")>0){
						userosbrowser=4;//linux64
						this.pgeditFFExe=PGEdit_Linux64;
					}else{
						userosbrowser=5;//linux32
						this.pgeditFFExe=PGEdit_Linux32;
					}
					if(navigator.userAgent.indexOf("Android")>0){
                        userosbrowser=7;//Android
                     }					
				}else if(navigator.userAgent.indexOf("Macintosh")>0){
					if(navigator.userAgent.indexOf("Safari")>0 && (navigator.userAgent.indexOf("Version/5.1")>0 || navigator.userAgent.indexOf("Version/5.2")>0 || navigator.userAgent.indexOf("Version/6")>0)){
						userosbrowser=8;//macos Safari 5.1 more
						this.pgeditFFExe=PGEdit_MacOs_Safari;
					}else if(navigator.userAgent.indexOf("Firefox")>0 || navigator.userAgent.indexOf("Chrome")>0){
						userosbrowser=6;//macos
						this.pgeditFFExe=PGEdit_MacOs;						
					}else if(navigator.userAgent.indexOf("Opera")>=0){
						userosbrowser=6;//macos
						this.pgeditFFExe=PGEdit_MacOs;						
					}else if(navigator.userAgent.indexOf("Safari")>=0){
						userosbrowser=6;//macos
						this.pgeditFFExe=PGEdit_MacOs;			
					}else{
						userosbrowser=0;//macos
						this.pgeditFFExe="";
					}
				}
				return userosbrowser;
			},
			
			getpgeHtml: function() {
				if (this.osBrowser==1 || this.osBrowser==3) {

					var pgeOcx='<span id="'+this.settings.pgeId+'_pge" style="z-index: 1;display:none;"><OBJECT ID="' + this.settings.pgeId + '" CLASSID="CLSID:' + this.pgeditIEClassid + '" codebase="' +this.settings.pgePath+ this.pgeditIECab + '"'; 
					         
					if(this.settings.pgeOnkeydown!=undefined && this.settings.pgeOnkeydown!="") pgeOcx+=' onkeydown="if(13==event.keyCode || 27==event.keyCode)'+this.settings.pgeOnkeydown+';"';
					 
					if(this.settings.pgeOnblur!=undefined && this.settings.pgeOnblur!="") pgeOcx+=' onblur="' + this.settings.pgeOnblur + '"';
					if(this.settings.pgeKeyup!=undefined && this.settings.pgeKeyup!="") pgeOcx+=' keyup="' + this.settings.pgeKeyup + '"';
					
					if(this.settings.pgeOnfocus!=undefined && this.settings.pgeOnfocus!="") pgeOcx+=' onfocus="' + this.settings.pgeOnfocus + '"';
					
					if(this.settings.pgeTabindex!=undefined && this.settings.pgeTabindex!="") pgeOcx+=' tabindex="'+this.settings.pgeTabindex+'" ';
					
					if(this.settings.pgeClass!=undefined && this.settings.pgeClass!="") pgeOcx+=' class="' + this.settings.pgeClass + '"';
					
					pgeOcx+='>';
					        
					if(this.settings.pgeEdittype!=undefined && this.settings.pgeEdittype!="") pgeOcx+='<param name="edittype" value="'+ this.settings.pgeEdittype + '">';
					
					if(this.settings.pgeMaxlength!=undefined && this.settings.pgeMaxlength!="") pgeOcx+='<param name="maxlength" value="' + this.settings.pgeMaxlength +'">';

					if(this.settings.pgeEreg1!=undefined && this.settings.pgeEreg1!="") pgeOcx+='<param name="input2" value="'+ this.settings.pgeEreg1 + '">';
					
					if(this.settings.pgeEreg2!=undefined && this.settings.pgeEreg2!="") pgeOcx+='<param name="input3" value="'+ this.settings.pgeEreg2 + '">';
					
					if(this.settings.pgeCapsLKOn!=undefined && this.settings.pgeCapsLKOn!="") pgeOcx+= '<param name="input52" value="'+ this.settings.pgeCapsLKOn + '">' 
					
					if(this.settings.pgeCapsLKOff!=undefined && this.settings.pgeCapsLKOff!="") pgeOcx+= '<param name="input53" value="'+ this.settings.pgeCapsLKOff + '">' 
					
					pgeOcx+='</OBJECT></span>';
							
					pgeOcx+='<span id="'+this.settings.pgeId+'_down" class="'+this.settings.pgeInstallClass+'" style="text-align:center;display:none;"><a href="'+this.settings.pgePath+this.pgeditIEExe+'">'+this.pgeDownText+'</a></span>';


					var div = document.createElement("div");
					div.innerHTML = pgeOcx;
					var name = this.settings.pgeId+"_td";
					document.getElementById(name).appendChild(div);
					return 	"";
				
				} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
					
					var pgeOcx='<embed ID="' + this.settings.pgeId + '"  maxlength="'+this.settings.pgeMaxlength+'" input_2="'+this.settings.pgeEreg1+'" input_3="'+this.settings.pgeEreg2+'" edittype="'+this.settings.pgeEdittype+'" type="application/x-pass-guard" tabindex="'+this.settings.pgeTabindex+'" class="' + this.settings.pgeClass + '" ';
					if(this.settings.pgeKeyup!=undefined && this.settings.pgeKeyup!="") pgeOcx+=' onkeyup="' + this.settings.pgeKeyup + '"';
					
					if(this.settings.pgeOnblur!=undefined && this.settings.pgeOnblur!="") pgeOcx+=' onblur="' + this.settings.pgeOnblur + '"';
					
					if(this.settings.pgeOnkeydown!=undefined && this.settings.pgeOnkeydown!="") pgeOcx+=' input_1013="'+this.settings.pgeOnkeydown+'"';
					
					if(this.settings.tabCallback!=undefined && this.settings.tabCallback!="") pgeOcx+=' input_1009="document.getElementById(\''+this.settings.tabCallback+'\').focus()"';
					
					if(this.settings.pgeOnfocus!=undefined && this.settings.pgeOnfocus!="") pgeOcx+=' onfocus="' + this.settings.pgeOnfocus + '"';
					
					if(this.settings.pgeFontName!=undefined && this.settings.pgeFontName!="") pgeOcx+=' FontName="'+this.settings.pgeFontName+'"';
					
					if(this.settings.pgeFontSize!=undefined && this.settings.pgeFontSize!="") pgeOcx+=' FontSize='+Number(this.settings.pgeFontSize)+'';					
					
					if(this.settings.pgeCapsLKOn!=undefined && this.settings.pgeCapsLKOn!="") pgeOcx+=' input_1020='+this.settings.pgeCapsLKOn+'';
					
					if(this.settings.pgeCapsLKOff!=undefined && this.settings.pgeCapsLKOff!="") pgeOcx+=' input_1016='+this.settings.pgeCapsLKOff+'';
					
					pgeOcx+=' >';
					
					var div = document.createElement("div");
					div.innerHTML = pgeOcx;
					var name = this.settings.pgeId+"_td";
					document.getElementById(name).appendChild(div);
					return 	"";

				} else if (this.osBrowser==6) {
					
					var  pgeOcx  = '<embed ID="' + this.settings.pgeId + '" input2="'+ this.settings.pgeEreg1 + '" input3="'+ this.settings.pgeEreg2 + '" input4="'+Number(this.settings.pgeMaxlength)+'" input0="'+Number(this.settings.pgeEdittype)+'" type="application/microdone-passguard-safari-plugin" version="'+PGEdit_MacOs_VERSION+'" tabindex="'+this.settings.pgeTabindex+'" class="' + this.settings.pgeClass + '">';
					var div = document.createElement("div");
					div.innerHTML = pgeOcx;
					var name = this.settings.pgeId+"_td";
					document.getElementById(name).appendChild(div);
					return 	"";
				
				} else if (this.osBrowser==8) {

					var  pgeOcx  = '<embed ID="' + this.settings.pgeId + '" input2="'+ this.settings.pgeEreg1 + '" input3="'+ this.settings.pgeEreg2 + '" input4="'+Number(this.settings.pgeMaxlength)+'" input0="'+Number(this.settings.pgeEdittype)+'" type="application/microdone-passguard-safari-plugin" version="'+PGEdit_MacOs_Safari_VERSION+'" tabindex="'+this.settings.pgeTabindex+'" class="' + this.settings.pgeClass + '">';
					var div = document.createElement("div");
					div.innerHTML = pgeOcx;
					var name = this.settings.pgeId+"_td";
					document.getElementById(name).appendChild(div);
					return 	"";
				} else {

					var  pgeOcx  = '<div id="'+this.settings.pgeId+'_down" class="'+this.settings.pgeInstallClass+'" style="text-align:center;">暂不支持此浏览器</div>';
					var div = document.createElement("div");
					div.innerHTML = pgeOcx;
					var name = this.settings.pgeId+"_td";
					document.getElementById(name).appendChild(div);
					return 	"";
				}				
			},
			
			getDownHtml: function() {
				if (this.osBrowser==1 || this.osBrowser==3) {
					var pgeOcx =  '<div id="'+this.settings.pgeId+'_down" class="'+this.settings.pgeInstallClass+'" style="text-align:center;"><a href="'+this.settings.pgePath+this.pgeditIEExe+'">'+this.pgeDownText+' </a></div>';
					var div = document.createElement("div");
					div.innerHTML = pgeOcx;
					var name = this.settings.pgeId+"_td";
					document.getElementById(name).appendChild(div);
					return 	"";
				} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5 || this.osBrowser==6 || this.osBrowser==8) {

					var pgeOcx =  '<div id="'+this.settings.pgeId+'_down" class="'+this.settings.pgeInstallClass+'" style="text-align:center;"><a href="'+this.settings.pgePath+this.pgeditFFExe+'">'+this.pgeDownText+'</a></div>';
					var div = document.createElement("div");
					div.innerHTML = pgeOcx;
					var name = this.settings.pgeId+"_td";
					document.getElementById(name).appendChild(div);
					return 	"";
				} else {

					var pgeOcx = '<div id="'+this.settings.pgeId+'_down" class="'+this.settings.pgeInstallClass+'" style="text-align:center;">暂不支持此浏览器</div>';
					var div = document.createElement("div");
					div.innerHTML = pgeOcx;
					var name = this.settings.pgeId+"_td";
					document.getElementById(name).appendChild(div);
					return 	"";
				}				
			},
			
			load: function() {				
				if (!this.checkInstall()) {
					return this.getDownHtml();
				}else{		
				   if(this.osBrowser==2){  
						if(this.pgeVersion!=PGEdit_FF_VERSION && UPEdit_Update==1){
							this.setDownText();
							return this.getDownHtml();	
						}				    
				   }else if(this.osBrowser==4 || this.osBrowser==5){
						if(this.pgeVersion!=PGEdit_Linux_VERSION && UPEdit_Update==1){
							this.setDownText();
							return this.getDownHtml();	
						}
					} else if (this.osBrowser==6) {
						if(this.pgeVersion!=PGEdit_MacOs_VERSION && UPEdit_Update==1){
							this.setDownText();
							return this.getDownHtml();	
						}
					}else if (this.osBrowser==8) {
						if(this.pgeVersion!=PGEdit_MacOs_Safari_VERSION && UPEdit_Update==1){
							this.setDownText();
							return this.getDownHtml();	
						}
					}					
					return this.getpgeHtml();
				}
			},
			
			generate: function() {

				   if(this.osBrowser==2){
					   if(this.isInstalled==false){
						   return document.write(this.getDownHtml());	 
					   }else if(this.pgeVersion!=PGEdit_FF_VERSION && UPEdit_Update==1){
							this.setDownText();
							return document.write(this.getDownHtml());	
						}
			       }else if(this.osBrowser==4 || this.osBrowser==5){   
			    	   if(this.isInstalled==false){
						   return document.write(this.getDownHtml());	
					   }else if(this.pgeVersion!=PGEdit_Linux_VERSION && UPEdit_Update==1){
							this.setDownText();
							return document.write(this.getDownHtml());	
						}
					} else if (this.osBrowser==6) {
						if(this.isInstalled==false){
							return document.write(this.getDownHtml());	
						}else if(this.pgeVersion!=PGEdit_MacOs_VERSION && UPEdit_Update==1){
							this.setDownText();
							return document.write(this.getDownHtml());	
						}
					}else if (this.osBrowser==8) {
						if(this.isInstalled==false){
							return document.write(this.getDownHtml());	
						}else if(this.pgeVersion!=PGEdit_MacOs_Safari_VERSION && UPEdit_Update==1){
							this.setDownText();
							return document.write(this.getDownHtml());
						}
					}
					return document.write(this.getpgeHtml());				
			},
			
			pwdclear: function() {
				if (this.checkInstall()) {
					var control = document.getElementById(this.settings.pgeId);
					if(control){
						control.ClearSeCtrl() ;
					}
				}				
			},
			pwdSetSk: function(s) {
				if (this.checkInstall()) {
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3 || this.osBrowser==6 || this.osBrowser==8) {
							control.input1=s;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							control.input(1,s);
						}					
					} catch (err) {
					}
				}				
			},
			
			pwdResultHash: function() {

				var code = '';

				if (!this.checkInstall()) {

					code = '01';
				}
				else{	
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.output;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(7);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							//code = control.get_output1();
						}					
					} catch (err) {
						code = '02';
					}
				}
				//alert(code);
				return code;
			},
			
			pwdResult: function() {

				var code = '';

				if (!this.checkInstall()) {

					code = '01';
				}
				else{	
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.output1;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(7);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output1();
						}					
					} catch (err) {
						code = '02';
					}
				}
				//alert(code);
				return code;
			},

			machineNetwork: function() {
				var code = '';

				if (!this.checkInstall()) {

					code = '01';
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.GetIPMacList();
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							control.package=0;
							code = control.output(9);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output7(0);
						}
					} catch (err) {

						code = '02';

					}
				}
				return code;
			},
			machineDisk: function() {
				var code = '';

				if (!this.checkInstall()) {

					code = '01';
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.GetNicPhAddr(1);
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							control.package=0;
							code = control.output(11);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output7(2);
						}
					} catch (err) {

						code = '02';

					}
				}
				return code;
			},
			machineCPU: function() {
				var code = '';

				if (!this.checkInstall()) {

					code = '01';
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.GetNicPhAddr(2);
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							control.package=0;
							code = control.output(10);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output7(1);
						}
					} catch (err) {
						code = '02';
					}
				}
				return code;
			},
			pwdSimple: function() {
				var code = '';

				if (!this.checkInstall()) {

					code = '';
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.output44;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(13);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output10();
						}
					} catch (err) {
						code = '';
					}
				}
				return code;
			},			
			pwdValid: function() {
				var code = '';

				if (!this.checkInstall()) {

					code = 1;
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							if(control.output1) code = control.output5;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(5);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output5();
						}
					} catch (err) {

						code = 1;

					}
				}
				return code;
			},				
			pwdHash: function() {
				var code = '';

				if (!this.checkInstall()) {

					code = 0;
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.output2;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(2);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output2();
						}
					} catch (err) {

						code = 0;

					}
				}
				return code;
			},			
			pwdLength: function() {
				var code = '';

				if (!this.checkInstall()) {

					code = 0;
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if (this.osBrowser==1 || this.osBrowser==3) {
							code = control.output3;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							code = control.output(3);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							code = control.get_output3();
						}
					} catch (err) {

						code = 0;

					}
				}
				return code;
			},				
			pwdStrength: function() {
				var code = 0;

				if (!this.checkInstall()) {

					code = 0;

				}

				else{

					try {

						var control = document.getElementById(this.settings.pgeId);

						if (this.osBrowser==1 || this.osBrowser==3) {
							var l=control.output3;
							var n=control.output4;
							var z=control.output54;
						} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5) {
							
							var l=control.output(3);
							var n=control.output(4);
							var z=control.output(4,1);
						}else if (this.osBrowser==6 || this.osBrowser==8) {
							var l=control.get_output3();
							var n=control.get_output4();
							var z=control.get_output16();
						}
						
						if(l==0){
							code = 0;
						}else{
							if(l>=6&&n==1){
								code=1;
							}else if(l>=6&&n==2){
								code=2;
							}else if(l>=6&&n==3){
								code=3;
							}
							
						}

					} catch (err) {
						code = 0;

					}

				}		
				return code;
								
			},	
			checkInstall: function() {
				try {
					if (this.osBrowser==1) {

						var comActiveX = new ActiveXObject("PassGuardCtrl.PassGuard.1");
						if(comActiveX.output54==undefined){
							return false;
						}
					} else if (this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5 || this.osBrowser==6 || this.osBrowser==8) {

					    var arr=new Array();
					    if(this.osBrowser==6){
					    	var pge_info=navigator.plugins['PassGuard Safari 1G'].description;
					    }else if(this.osBrowser==8){
					    	var pge_info=navigator.plugins['PassGuard Safari 1G'].description;
					    }else{
					    	var pge_info=navigator.plugins['PassGuard'].description;
					    }
					    
						if(pge_info.indexOf(":")>0){
							arr=pge_info.split(":");
							var pge_version = arr[1];
						}else{
							var pge_version = "";
						}
						
						if(this.osBrowser==2 || this.osBrowser==4 || this.osBrowser==5){
							if(pge_version!="3.1.0.2"){
								return false;
							}
						}else if(this.osBrowser==6 || this.osBrowser==8){
							if(pge_version!="1.0.0.2"){
								return false;
							}
						}
					} else if (this.osBrowser==3) {
						var comActiveX = new ActiveXObject("PassGuardX64.PassGuard.1");
						if(comActiveX.output54==undefined){
							return false;
						}
					}
				}catch(e){
					return false;
				}
				return true;
			},
			getVersion: function() {
				try {
					if(navigator.userAgent.indexOf("MSIE")<0){
						var arr=new Array();
					    if(this.osBrowser==6){
					    	var pge_info=navigator.plugins['PassGuard Safari 1G'].description;
					    }else if(this.osBrowser==8){
					    	var pge_info=navigator.plugins['PassGuard Safari 1G'].description;					    	
					    }else{
					    	var pge_info=navigator.plugins['PassGuard'].description;
					    }
						if(pge_info.indexOf(":")>0){
							arr=pge_info.split(":");
							var pge_version = arr[1];
						}else{
							var pge_version = "";
						}
					}
					return pge_version;
				}catch(e){
					return "";
				}					
			},
			setColor: function() {
				var code = '';

				if (!this.checkInstall()) {

					code = '';
				}
				else{
					try {
						var control = document.getElementById(this.settings.pgeId);
						if(this.settings.pgeBackColor!=undefined && this.settings.pgeBackColor!="") control.BackColor=this.settings.pgeBackColor;
						if(this.settings.pgeForeColor!=undefined && this.settings.pgeForeColor!="") control.ForeColor=this.settings.pgeForeColor;
					} catch (err) {

						code = '';

					}
				}
			},			
			setDownText:function(){
				if(this.pgeVersion!=undefined && this.pgeVersion!=""){
						this.pgeDownText="请点此升级控件";
				}
			},			
			pgInitialize:function(){
				if(this.checkInstall()){
					if(this.osBrowser==1 || this.osBrowser==3){ 
			            $('#'+this.settings.pgeId+'_pge').show(); 
					}
					
					var control = document.getElementById(this.settings.pgeId);
					
					if(this.settings.pgeBackColor!=undefined && this.settings.pgeBackColor!="") control.BackColor=this.settings.pgeBackColor;
					if(this.settings.pgeForeColor!=undefined && this.settings.pgeForeColor!="") control.ForeColor=this.settings.pgeForeColor;
					
				}else{
					if(this.osBrowser==1 || this.osBrowser==3){
						$('#'+this.settings.pgeId+'_down').show();
					}	
					
				}
				
			}
		}
	});	
	
})(jQuery);
function notifycallback(arg){}