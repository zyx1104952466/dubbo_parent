//��������1 ֧��λ��12345678901234.67
function round(v,e)   
{   
	var   t=1;   
	for(;e>0;t*=10,e--);   
	for(;e<0;t/=10,e++);   
	return   Math.round(v*t)/t;   
} 

/*    
*    ForDight(Dight,How):��ֵ��ʽ��������DightҪ    
*    ��ʽ����  ���֣�HowҪ������С��λ����    
*/  
//��������2  ֧��λ��12345678901234.67 
function  ForDight(Dight,How)     
{     
   Dight  =  Math.round(Dight*Math.pow(10,How))/Math.pow(10,How);     
   return  Dight;     
}  
function round(v,e) 
{
	return Number(v).toFixed(e);
}