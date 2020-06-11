//绑定日期控件
function bindDatePicker(textObject)
{
    //$("#testButton").click(function() {
	$("#"+textObject).addClass('Wdate');
	$("#"+textObject).click(function() 
		{      
			WdatePicker();  
		}
	); 
}
$(function() {
    //绑定事件
	$.fn.extend({     
	   bindDatePicker:function(){     
	       $(this).addClass('Wdate');
	       $(this).click(WdatePicker);
	       //$(this).click(function(){     
	       //     alert($(this).val());     
	       // });     
	    }     
	});   
});

