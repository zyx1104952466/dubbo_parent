function _setDomain(){
	if(document.domain.indexOf('.com.cn')>0 || document.domain.indexOf('.com')>0){
		var k = document.domain.split(".");
		if (k.length > 2) {
			if (document.domain.indexOf('.com.cn')>0) {
				document.domain = k[k.length-3] + '.com.cn';
			} else if(document.domain.indexOf('.com.hk')>0){
				document.domain = k[k.length-3] + '.com.hk';
			}	
			 else {
				document.domain = k[k.length-2] +'.'+ k[k.length-1];
			}
		}
  }
  else if(DOMIAN_IP != ''){
	  document.domain = DOMIAN_IP;
  }
}