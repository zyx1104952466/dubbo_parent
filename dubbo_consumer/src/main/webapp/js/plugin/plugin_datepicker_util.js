//�����ڿؼ�
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
    //���¼�
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

