function pageSubmit(type,indexvalue){
	//�����ȷ�������� ��������
	//var searchForm = document.forms[formname];
	//var searchForm = document.getElementById(formname);
	//var searchForm = document.getElementsByName(formname)[0];
	//alert(searchForm.name);
	//alert(searchForm.getAttribute("name"));
	var searchForm = document.forms[indexvalue];
    currentPage=searchForm.elements["pageNumber"].value;
	if("first"==type && currentPage==1){
		alert("�Ѿ��� ��ҳ");
		return  false;
	}
	
	pageCount=searchForm.elements["maxPage"].value;
	if("last"==type && pageCount==currentPage){
		alert("�Ѿ��� βҳ");
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
