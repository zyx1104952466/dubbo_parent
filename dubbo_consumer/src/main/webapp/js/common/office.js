//指定页面区域内容导入Word
function copyTableToWord(tableid) {
	var oWD = new ActiveXObject("Word.Application");
	var oDC = oWD.Documents.Add("",0,1);
	var oRange =oDC.Range(0,1);
	var sel = document.body.createTextRange();
	sel.moveToElementText(tableid);//PrintB
	sel.select();
	sel.execCommand("Copy");
	oRange.Paste();
	oWD.Application.Visible = true;
	//oDC.saveAs("c:\\ba.doc");     
	//window.close();
}



//导出到office2000版本的word或excel中
//tableid 是字符串'tableid' 不是object
function copyTableToExcel(tableidstring) 
{
    window.clipboardData.setData("Text",document.all(tableidstring).outerHTML);//'theObjTable'
    try {
      var ExApp = new ActiveXObject("Excel.Application");
      var ExWBk = ExApp.workbooks.add();
      var ExWSh = ExWBk.worksheets(1);
      ExApp.DisplayAlerts = false;
      ExApp.visible = true;
    }
    catch(e) {
      alert("您的电脑没有安装Microsoft Excel软件！");
      return false;
    }
    ExWBk.worksheets(1).Paste;
}

//指定页面区域内容导入Excel
function copyTableToExcel2(tableid) {
	var oXL = new ActiveXObject("Excel.Application"); 
	var oWB = oXL.Workbooks.Add(); 
	var oSheet = oWB.ActiveSheet; 
	var sel=document.body.createTextRange();
	sel.moveToElementText(tableid);//PrintA
	sel.select();
	sel.execCommand("Copy");
	oSheet.Paste();
	oXL.Visible = true;
}
//指定页面区域“单元格”内容导入Excel
function CreateExcelFromCell(tableid) {
	var oXL = new ActiveXObject("Excel.Application"); 
	var oWB = oXL.Workbooks.Add(); 
	var oSheet = oWB.ActiveSheet; 
	var Lenr = tableid.rows.length;//PrintA
	for (i=0;i<Lenr;i++) 
	{ 
		var Lenc = PrintA.rows(i).cells.length; 
		for (j=0;j<Lenc;j++) { 
			oSheet.Cells(i+1,j+1).value = PrintA.rows(i).cells(j).innerText; 
		} 
	} 
	oXL.Visible = true; 
}

