$(document).on('pagebeforeshow', '#about', function createAbout(){

	var arr = getFile("../Resources/about.txt", "#");
	var stringAppend = "";
	stringAppend += "<div data-role='collapsible-set'>"

	for (var i=0;i<arr.length;i++) {
		var pdata = arr[i].split("*");
		stringAppend += ("<div data-role='collapsible'><h3>" + pdata[0] + "</h3><p>" + pdata[1] + "</p></div>");
	}

	stringAppend += "</div>";

	$("#aboutcontent").append(stringAppend);
	$("#aboutcontent").trigger('create');

});