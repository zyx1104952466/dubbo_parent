//四舍五入1 支持位数12345678901234.67
function round(v,e)   
{   
	var   t=1;   
	for(;e>0;t*=10,e--);   
	for(;e<0;t/=10,e++);   
	return   Math.round(v*t)/t;   
} 

/*    
*    ForDight(Dight,How):数值格式化函数，Dight要    
*    格式化的  数字，How要保留的小数位数。    
*/  
//四舍五入2  支持位数12345678901234.67 
function  ForDight(Dight,How)     
{     
   Dight  =  Math.round(Dight*Math.pow(10,How))/Math.pow(10,How);     
   return  Dight;     
}  
function round(v,e) 
{
	return Number(v).toFixed(e);
}