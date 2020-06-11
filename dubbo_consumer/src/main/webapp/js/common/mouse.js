
function overIt() {
	var the_obj = event.srcElement;
	if (the_obj.tagName.toLowerCase() == "td") {
		the_obj = the_obj.parentElement;
		the_obj.oBgc = the_obj.currentStyle.backgroundColor;
		the_obj.oFc = the_obj.currentStyle.color;
		the_obj.style.backgroundColor = "khaki";
		the_obj.style.color = "limegreen";
	}
	if (the_obj.tagName.toLowerCase() == "a") {
		the_obj.style.textDecoration = "underline";
	}
}
function outIt() {
	var the_obj = event.srcElement;
	if (the_obj.tagName.toLowerCase() == "td") {
		the_obj = the_obj.parentElement;
		the_obj.style.backgroundColor = the_obj.oBgc;
		the_obj.style.color = the_obj.oFc;
	}
	if (the_obj.tagName.toLowerCase() == "a") {
		the_obj.style.textDecoration = "underline";
	}
}

