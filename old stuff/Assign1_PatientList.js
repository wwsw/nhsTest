$(document).on('pageinit', '#settings_assign_behaviours_1', function createAssignPatientList() {
	var htmlString = "<ul id='assign_1_patient_list' data-role='listview' data-filter='true'>";
	for(var i = 0; i<patient_ID_array.length; i++){
		htmlString += "<li><a patient='"+patient_ID_array[i]+","+patient_fname_array[i]+","+patient_lname_array[i]+"' href='./settings_assign_behaviours_2.html'>"+patient_fname_array[i]+" "+patient_lname_array[i]+"</a></li>";
	}
	htmlString += "</ul>";
	$("#assign_1_patient_list_container").append(htmlString);

});