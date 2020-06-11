
//function window.onbeforeunload()
function window.onunload()
{
    if( (window.screenLeft>=10000 && window.screenTop>=10000)||event.altKey) 
    {
        logout();
    }   
}

function  logout()
{   
	alert("logout()");
    try
    {   
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");   
    }
    catch(e)
    {   
        xmlHttp = new XMLHttpRequest();   
    }   
    xmlHttp.open("post","enter.asp?Active=Logout",true);   
    xmlHttp.send(null);   
}   


