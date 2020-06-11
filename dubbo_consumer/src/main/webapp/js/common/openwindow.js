function openwindow(url){
	  var iWidth=600;                          //弹出窗口的宽度;
	  var iHeight=800;                        //弹出窗口的高度;
	  var iTop = (window.screen.availHeight-30-iHeight)/2;       //获得窗口的垂直位置;
	  var iLeft = (window.screen.availWidth-10-iWidth)/2;           //获得窗口的水平位置;
	  window.open(url,'','height='+iHeight+',innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=yes,resizeable=no,location=no,status=yes');
}

function openwindowBy(url,iWidth,iHeight){
		  var iTop = (window.screen.availHeight-30-iHeight)/2;       //获得窗口的垂直位置;
		  var iLeft = (window.screen.availWidth-10-iWidth)/2;           //获得窗口的水平位置;
		  window.open(url,'','height='+iHeight+',innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=yes,resizeable=no,location=no,status=yes');
}	  
function openModalDialog(url){
	  var iWidth=900;                          //弹出窗口的宽度;
	  var iHeight=800;                        //弹出窗口的高度;
	  var iTop = (window.screen.availHeight-30-iHeight)/2;       //获得窗口的垂直位置;
	  var iLeft = (window.screen.availWidth-10-iWidth)/2;           //获得窗口的水平位置;
	  window.open(url,'','height='+iHeight+',innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=yes,resizeable=no,location=no,status=yes');
}

function ShowModal(url,width,height){  
        var returnValue=window.showModalDialog(url,window,'dialogHeight:'+height+'px;dialogWidth:'+width+'px;center:yes;edge:raised;status:no;unadorned:yes');
		return returnValue;
}
	
function ShowModalNoReturn(url,width,height){  
       window.showModalDialog(url,window,'dialogHeight:'+height+'px;dialogWidth:'+width+'px;center:yes;edge:raised;status:no;unadorned:yes');
}


function m_over(tr){   
    tr.className=tr.className + " " + "fixH";   
}   
function m_out(tr){   
    var cn = tr.className.replace(/\s+fixH/,'');   
    tr.className = cn;   
}  