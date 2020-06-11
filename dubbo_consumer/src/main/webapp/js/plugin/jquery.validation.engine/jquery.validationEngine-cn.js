(function($) {   
    $.fn.validationEngineLanguage = function() {};   
    $.validationEngineLanguage = {   
        newLang: function() {   
            $.validationEngineLanguage.allRules =   {"required":{               // Add your regex rules here, you can take telephone as an example   
                        "regex":"none",   
                        "alertText":"* �ǿ�ѡ��.",   
                        "alertTextCheckboxMultiple":"* ��ѡ��һ����ѡ��.",   
                        "alertTextCheckboxe":"* ��ѡ��һ����ѡ��."},   
                    "length":{   
                        "regex":"none",   
                        "alertText":"* ���ȱ����� ",   
                        "alertText2":" �� ",   
                        "alertText3": " ֮��."},   
                    "maxCheckbox":{   
                        "regex":"none",   
                        "alertText":"* ���ѡ�� ",//�ٷ��ĵ�����������   
                        "alertText2":" ��."},       
                    "minCheckbox":{   
                        "regex":"none",   
                        "alertText":"* ����ѡ�� ",   
                        "alertText2":" ��."},       
                    "confirm":{   
                        "regex":"none",   
                        "alertText":"* �������벻һ��,����������."},           
                    "telephone":{   
                        "regex":"/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/",   
                        "alertText":"* ��������Ч�ĵ绰����,��:010-29292929."},   
                    "mobilephone":{   
                        "regex":"/(^0?[1][358][0-9]{9}$)/",   
                        "alertText":"* ��������Ч���ֻ�����."},      
                    "email":{   
                        "regex":"/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/",   
                        "alertText":"* ��������Ч���ʼ���ַ."},      
                    "date":{   
                         "regex":"/^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/",   
                         "alertText":"* ��������Ч������,��:2008-08-08."},   
                    "ip":{   
                         "regex":"/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/",   
                         "alertText":"* ��������Ч��IP."},   
                    "chinese":{   
                        "regex":"/^[\u4e00-\u9fa5]+$/",   
                        "alertText":"* ����������."},   
                    "url":{   
                        "regex":"/^[a-zA-z]:\\/\\/[^s]$/",//��Щ��֤���Լ���ǿ   
                        "alertText":"* ��������Ч����ַ."},   
                    "zipcode":{   
                        "regex":"/^[1-9]\d{5}$/",   
                        "alertText":"* ��������Ч����������."},   
                    "qq":{   
                        "regex":"/^[1-9]\d{4,9}$/",   
                        "alertText":"* ��������Ч��QQ����."},   
                    "onlyNumber":{   
                        "regex":"/^[0-9]+$/",   
                        "alertText":"* ����������."},   
                    "onlyLetter":{   
                        "regex":"/^[a-zA-Z]+$/",   
                        "alertText":"* ������Ӣ����ĸ."},   
                    "noSpecialCaracters":{   
                        "regex":"/^[0-9a-zA-Z]+$/",   
                        "alertText":"* ������Ӣ����ĸ������."},      
                    "ajaxUser":{   
                        "file":"validate.action",//ajax��֤�û�������post���²�����validateError    ajaxUser��validateId user��validateValue  cccc   
                        "alertTextOk":"* �ʺſ���ʹ��.",     
                        "alertTextLoad":"* �����, ���Ժ�...",   
                        "alertText":"* �ʺŲ���ʹ��."},      
                    "ajaxName":{   
                        "file":"validateUser.php",   
                        "alertText":"* This name is already taken",   
                        "alertTextOk":"* This name is available",      
                        "alertTextLoad":"* Loading, please wait"}                      
                    }      
        }   
    }   
})(jQuery);   
  
$(document).ready(function() {     
    $.validationEngineLanguage.newLang()   
});  
