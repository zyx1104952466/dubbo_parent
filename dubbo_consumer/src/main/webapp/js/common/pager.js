function pageSubmit(type,indexvalue){
	//如果是确定是名字 可以如下
	//var searchForm = document.forms[formname];
	//var searchForm = document.getElementById(formname);
	//var searchForm = document.getElementsByName(formname)[0];
	//alert(searchForm.name);
	//alert(searchForm.getAttribute("name"));
	var searchForm = document.forms[indexvalue];
    currentPage=searchForm.elements["pageNumber"].value;
	if("first"==type && currentPage==1){
		alert("已经是 首页");
		return  false;
	}
	
	pageCount=searchForm.elements["maxPage"].value;
	if("last"==type && pageCount==currentPage){
		alert("已经是 尾页");
		return false;
	}
	
	if("first"==type){
		searchForm.elements["pageNumber"].value=1;
	}
	
	if("prev"==type){
		searchForm.elements["pageNumber"].value=(parseInt(currentPage)-1);
	}
	
	if("next"==type){
		searchForm.elements["pageNumber"].value=(parseInt(currentPage)+1);
	}
	
	pageCount=searchForm.elements["maxPage"].value;
	if("last"==type){
		searchForm.elements["pageNumber"].value=(parseInt(pageCount)-1);
	}
	
	searchForm.submit();
}
