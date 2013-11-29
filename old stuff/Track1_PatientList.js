$(document).on('pageinit', '#track_1', function () {
	var htmlString = "<ul id='track_1_patient_list' data-role='listview' data-filter='true'>";
	for(var i = 0; i<patient_ID_array.length; i++){
		htmlString += "<li><a patient='"+patient_ID_array[i]+","+patient_fname_array[i]+","+patient_lname_array[i]+"' href='./track_2.html'>"+patient_fname_array[i]+" "+patient_lname_array[i]+"</a></li>";
	}
	htmlString += "</ul>";
	$("#track_1_patient_list_container").append(htmlString);

});