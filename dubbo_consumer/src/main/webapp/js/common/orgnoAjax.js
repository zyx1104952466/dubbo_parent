 function getOrg1(){
        	var orgLvl = parseInt($("#orgLvl").val())+1;
        	if($("#orgNo").val()=='') {
        		$("#orgNo1").empty();
        		$("#orgNo1").val("0");
        		$("#orgNo1").append("<option value='1'>--全部--</option>");
        		$("#orgNo1").append("<option value=''>--请选择--</option>");
        		
        		$("#orgNo2").empty();
        		$("#orgNo2").val("");
        		$("#orgNo2").append("<option value='1'>--全部--</option>");
        		$("#orgNo2").append("<option value=''>--请选择--</option>");
        		
        		$("#orgNo3").empty();
        		$("#orgNo3").val("");
        		$("#orgNo3").append("<option value='1'>--全部--</option>");
        		$("#orgNo3").append("<option value=''>--请选择--</option>");
        		
        		$("#orgNo4").empty();
        		$("#orgNo4").val("");
        		$("#orgNo4").append("<option value='1'>--全部--</option>");
        		$("#orgNo4").append("<option value=''>--请选择--</option>");
        	} 
        	else {
        		$.ajax({
        			url: 'orderInfoquery.do?method=getCmmtinorgListOne',
        			cache: false,
        			data: {'orgNo': $("#orgNo").val(),'orgLvl':orgLvl},
        			dataType:'json',
        			success: function(data) {
        				$("#orgNo1").empty();
        				$("#orgNo1").val("1");
        				$("#orgNo1").append("<option value='1'>--全部--</option>");
        				$("#orgNo1").append("<option value=''>--请选择--</option>");
        				$.each(data,function(idx,item){
        			       	$("#orgNo1").append("<option value='"+item[0]+"'>"+item[1]+"</option>");
        			    });
        				$("#orgNo2").empty();
        				$("#orgNo2").val("1");
                		$("#orgNo2").append("<option value='1'>--全部--</option>");
                		$("#orgNo2").append("<option value=''>--请选择--</option>");
                		$("#orgNo3").empty();
                		$("#orgNo3").val("1");
                		$("#orgNo3").append("<option value='1'>--全部--</option>");
                		$("#orgNo3").append("<option value=''>--请选择--</option>");
                		$("#orgNo4").empty();
                		$("#orgNo4").val("1");
                		$("#orgNo4").append("<option value='1'>--全部--</option>");
                		$("#orgNo4").append("<option value=''>--请选择--</option>");
        			}});
        	}    		
    	}
        function getOrg2(){
        	var orgLvl = parseInt($("#orgLvl").val())+2;
        	if($("#orgNo1").val()=='') {
        		$("#orgNo2").empty();
        		$("#orgNo2").val("");
        		$("#orgNo2").append("<option value=''>--请选择--</option>");
        		$("#orgNo2").append("<option value='1'>--全部--</option>");
        		
        		$("#orgNo3").empty();
        		$("#orgNo3").val("");
        		$("#orgNo3").append("<option value=''>--请选择--</option>");
        		$("#orgNo3").append("<option value='1'>--全部--</option>");
        		
        		
        		$("#orgNo4").empty();
        		$("#orgNo4").val("");
        		$("#orgNo4").append("<option value=''>--请选择--</option>");
        		$("#orgNo4").append("<option value='1'>--全部--</option>");
        		
        	} else if($("#orgNo1").val()=='1') {
        		$("#orgNo2").empty();
        		$("#orgNo2").val("1");
        		$("#orgNo2").append("<option value='1'>--全部--</option>");
        		$("#orgNo2").append("<option value=''>--请选择--</option>");
        		$("#orgNo3").empty();
        		$("#orgNo3").val("1");
        		$("#orgNo3").append("<option value='1'>--全部--</option>");
        		$("#orgNo3").append("<option value=''>--请选择--</option>");
        		$("#orgNo4").empty();
        		$("#orgNo4").val("1");
        		$("#orgNo4").append("<option value='1'>--全部--</option>");
        		$("#orgNo4").append("<option value=''>--请选择--</option>");
        	}else {
        		$.ajax({
        			url: 'orderInfoquery.do?method=getCmmtinorgListOne',
        			cache: false,
        			data: {'orgNo': $("#orgNo1").val(),'orgLvl':orgLvl},
        			dataType:'json',
        			success: function(data) {
        				$("#orgNo2").empty();
        				$("#orgNo2").val("1");
        				$("#orgNo2").append("<option value='1'>--全部--</option>");
        				$("#orgNo2").append("<option value=''>--请选择--</option>");
        				$.each(data,function(idx,item){
        			       	$("#orgNo2").append("<option value='"+item[0]+"'>"+item[1]+"</option>");
        			    });
        				$("#orgNo3").empty();
        				$("#orgNo3").val("1");
                		$("#orgNo3").append("<option value='1'>--全部--</option>");
                		$("#orgNo3").append("<option value=''>--请选择--</option>");
                		$("#orgNo4").empty();
                		$("#orgNo4").val("1");
                		$("#orgNo4").append("<option value='1'>--全部--</option>");
                		$("#orgNo4").append("<option value=''>--请选择--</option>");
        			}});
        	}    		
    	}
        function getOrg3(){
        	var orgLvl = parseInt($("#orgLvl").val())+3;
        	if($("#orgNo2").val()=='') {
        		$("#orgNo3").empty();
        		$("#orgNo3").val("");
        		$("#orgNo3").append("<option value=''>--请选择--</option>");
        		$("#orgNo3").append("<option value='1'>--全部--</option>");
        		
        		
        		$("#orgNo4").empty();
        		$("#orgNo4").val("");
        		$("#orgNo4").append("<option value=''>--请选择--</option>");
        		$("#orgNo4").append("<option value='1'>--全部--</option>");
        		
        	}  else if($("#orgNo2").val()=='1') {
        		$("#orgNo3").empty();
        		$("#orgNo3").val("1");
        		$("#orgNo3").append("<option value='1'>--全部--</option>");
        		$("#orgNo3").append("<option value=''>--请选择--</option>");
        		$("#orgNo4").empty();
        		$("#orgNo4").val("1");
        		$("#orgNo4").append("<option value='1'>--全部--</option>");
        		$("#orgNo4").append("<option value=''>--请选择--</option>");
        	}
        	else {
        		$.ajax({
        			url: 'orderInfoquery.do?method=getCmmtinorgListOne',
        			cache: false,
        			data: {'orgNo': $("#orgNo2").val(),'orgLvl':orgLvl},
        			dataType:'json',
        			success: function(data) {
        				$("#orgNo3").empty();
        				$("#orgNo3").val("1");
        				$("#orgNo3").append("<option value='1'>--全部--</option>");
        				$("#orgNo3").append("<option value=''>--请选择--</option>");
        				$.each(data,function(idx,item){
        			       	$("#orgNo3").append("<option value='"+item[0]+"'>"+item[1]+"</option>");
        			    });
        				$("#orgNo4").empty();
        				$("#orgNo4").val("1");
                		$("#orgNo4").append("<option value='1'>--全部--</option>");
                		$("#orgNo4").append("<option value=''>--请选择--</option>");
        				
        			}});
        	}    		
    	}
        function getOrg4(){
        	var orgLvl = parseInt($("#orgLvl").val())+4;
        	if($("#orgNo3").val()=='') {
        		$("#orgNo4").empty();
        		$("#orgNo4").val("");
        		$("#orgNo4").append("<option value=''>--请选择--</option>");
        		$("#orgNo4").append("<option value='1'>--全部--</option>");
        		
        	}else if($("#orgNo3").val()=='1') {
        		$("#orgNo4").empty();
        		$("#orgNo4").val("1");
        		$("#orgNo4").append("<option value='1'>--全部--</option>");
        		$("#orgNo4").append("<option value=''>--请选择--</option>");
        	}else {
        		$.ajax({
        			url: 'orderInfoquery.do?method=getCmmtinorgListOne',
        			cache: false,
        			data: {'orgNo': $("#orgNo3").val(),'orgLvl':orgLvl},
        			dataType:'json',
        			success: function(data) {
        				$("#orgNo4").empty();
        				$("#orgNo4").val("1");
        				$("#orgNo4").append("<option value='1'>--全部--</option>");
        				$("#orgNo4").append("<option value=''>--请选择--</option>");
        				$.each(data,function(idx,item){
        			       	$("#orgNo4").append("<option value='"+item[0]+"'>"+item[1]+"</option>");
        			    });
        			}});
        	}    		
    	}