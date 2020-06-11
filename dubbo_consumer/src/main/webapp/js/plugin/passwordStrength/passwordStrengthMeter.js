// Password strength meter
var shortPass = '0' //Week
var badPass = '1' //Week
var goodPass = '2' //Medium
var strongPass = '3' //Strong

//计算密码强度等级
function passwordStrength(password)
{
    score = 0 
    
    //password < 4
    if (password.length < 4 ) { return shortPass }    
   
    //password length
    score += password.length * 4
    score += ( checkRepetition(1,password).length - password.length ) * 1
    score += ( checkRepetition(2,password).length - password.length ) * 1
    score += ( checkRepetition(3,password).length - password.length ) * 1
    score += ( checkRepetition(4,password).length - password.length ) * 1

    //password has 3 numbers 
    if (password.match(/(.*[0-9].*[0-9].*[0-9])/))  score += 5 
    
    //password has 2 sybols
    if (password.match(/(.*[!,@,#,$,%,^,&,*,?,_,.,~].*[!,@,#,$,%,^,&,*,?,_,.,~])/)) score += 5 
    
    //password has Upper and Lower chars
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  score += 10 
    
    //password has number and chars
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  score += 15 
    //
    //password has number and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([0-9])/))  score += 15 
    
    //password has char and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/))  score += 15 
    
    //password is just a nubers or chars
    if (password.match(/^\w+$/) || password.match(/^\d+$/) )  score -= 10 
    
    //verifing 0 < score < 100
    if ( score < 0 )  score = 0 
    if ( score > 100 )  score = 100 
    
    if (score < 34 )  return badPass 
    if (score < 68 )  return goodPass
    return strongPass
}

function passwordStrengthPercent(password)
{
    score = 0 
    //password < 4
    if (password.length < 4 ) { return 0 }   
    //password length
    score += password.length * 4
    score += ( checkRepetition(1,password).length - password.length ) * 1
    score += ( checkRepetition(2,password).length - password.length ) * 1
    score += ( checkRepetition(3,password).length - password.length ) * 1
    score += ( checkRepetition(4,password).length - password.length ) * 1

    //password has 3 numbers
    if (password.match(/(.*[0-9].*[0-9].*[0-9])/))  score += 5 
    
    //password has 2 sybols
    if (password.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/)) score += 5 
    
    //password has Upper and Lower chars
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  score += 10 
    
    //password has number and chars
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  score += 15 
    //
    //password has number and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([0-9])/))  score += 15 
    
    //password has char and symbol
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/))  score += 15 
    
    //password is just a nubers or chars
    if (password.match(/^\w+$/) || password.match(/^\d+$/) )  score -= 10 
    if (score > 100) return 100
  return (score)
 
}


function checkRepetition(pLen,str) {
    res = ""
    for ( i=0; i<str.length ; i++ ) {
        repeated=true
        for (j=0;j < pLen && (j+i+pLen) < str.length;j++)
            repeated=repeated && (str.charAt(j+i)==str.charAt(j+i+pLen))
        if (j<pLen) repeated=false
        if (repeated){
            i+=pLen-1
            repeated=false
        }
        else {
            res+=str.charAt(i)
        }
    }
    return res
}
$(function(){
	var bpos = "";
	var perc = 0;
	var minperc = 0;
	$('#pwdstrongtip').hide();
	$('#password,#businesspw').keyup(function(){
		if($(this).val().length>=6){
		$('#pwdstrongtip').show();
		result = passwordStrength($(this).val()); 
		if(result == '1' || result == '0'){
			$('#colorbar').css({'width':'33%','background-color':'#f00'});	
			//在页面隐藏于写入密码等级：1：强；2：中；3：弱；
			$('#strongtip').html('弱');
		}else if(result == '2'){
			$('#colorbar').css({'width':'66%','background-color':'#ff0'});			
			$('#strongtip').html('中');
		}else if(result == '3'){
			$('#colorbar').css({'width':'100%','background-color':'#0f0'});
			$('#strongtip').html('强');
		}
		}else{
			$('#pwdstrongtip').hide();
		}
	})
})
	
