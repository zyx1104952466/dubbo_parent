
	window.onload=function(){
		var trs = document.getElementsByTagName('tr');
		for(var i=0; i<trs.length; i++){
			trs[i].className=(i%2==0)?"eee":"ddd";
			trs[i].onclick=function(){
				this.className = (this.className!='click')?'click':((firePos(trs,this)%2==0)?"eee":"ddd");
			}
			trs[i].onmouseover=function(){
				if(this.className=='click'){}
				else this.className = 'on';
			}
			trs[i].onmouseout=function(){
				if(this.className=='click'){}
				else this.className=(firePos(trs,this)%2==0)?"eee":"ddd";
			}
		}
	}
	
	function firePos(al,curr){
		for(var i=0; i<al.length; i++){
			if(al[i]==curr) return i;
		}
	}

	sfFocus = function() {
		var sfEls = document.getElementsByTagName("INPUT");
		for (var i=0; i<sfEls.length; i++) {
			sfEls[i].onfocus=function() {
				this.className+=" sffocus";
			}
			sfEls[i].onblur=function() {
				this.className=this.className.replace(new RegExp(" sffocus\\b"), "");
			}
		}
	}
	
	if (window.attachEvent) window.attachEvent("onload", sfFocus);
