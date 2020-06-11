<%@page language="java" pageEncoding="utf-8" import="ocx.GetRandom"%>
<%@page import="hikefa.core.web.util.CookiesSessionManager"%>
<%
 String  mcrypt_key=GetRandom.generateString(32);
 CookiesSessionManager.setSession(request,response,"mcrypt_key",mcrypt_key);
 out.clear();
 out.print(mcrypt_key);
 //mcrypt_key = "lgka8xhexzp50xexyxxgmkx5xlhxvxj5";
%>