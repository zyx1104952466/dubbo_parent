
function overIt() {

	var the_obj = event.srcElement;
	if (the_obj.tagName.toLowerCase() == "td") {
		the_obj = the_obj.parentElement;
		the_obj.oldclassName = the_obj.className;
		the_obj.className+="tr_over";
	}
	if (the_obj.tagName.toLowerCase() == "a") {
		the_obj.style.textDecoration = "underline";
	}
}
function outIt() {
	var the_obj = event.srcElement;
	if (the_obj.tagName.toLowerCase() == "td") {
		the_obj = the_obj.parentElement;
		the_obj.className=the_obj.oldclassName;
	}
	if (the_obj.tagName.toLowerCase() == "a") {
		the_obj.style.textDecoration = "underline";
	}
}

