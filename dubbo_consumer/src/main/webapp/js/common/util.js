function getElementsByTagClassName(tagName,className)
{
	var sfEls = document.getElementsByTagName(tagName);//"INPUT"
	var rets = [];
	for (var i=0; i<sfEls.length; i++) 
	{
		if (hasClass(sfEls[i],className))
			rets.push(sfEls[i]);
	}
	return rets;
	
}
function hasClass(node,className)
{  
    var classNames = node.className.split(/\s+/);  
    for(var i = 0; i < classNames.length; i++){  
         if(classNames[i] == className){  
             return true;  
         }  
     }  
     return false;  
}    
