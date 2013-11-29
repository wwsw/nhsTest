// patient list for assign page
$(document).on('pageinit', '#settings_assign_behaviours_1', function createAssignPatientList() {
	var href = './settings_assign_behaviours_2.html';
	var datafilter = true;
	var listID = 'assign_1_patient_list';
	var delBtn = false;
	$("#assign_1_patient_list_container").append(createPatientList(href, listID, datafilter, delBtn));

});

// patient list for monitoring page
$(document).on('pageinit', '#track_1', function createTrackPatientList() {
	var href='./track_2.html';
	var datafilter = true;
	var listID = 'track_1_patient_list';
	var delBtn = false;
	$("#track_1_patient_list_container").append(createPatientList(href, listID, datafilter, delBtn));

});

// patient list for edit name page
$(document).on('pageinit', '#settings_edit_patients_edit_1', function createEditPatientList() {
	var href='./settings_edit_patients_edit_2.html';
	var datafilter = true;
	var listID = 'editPatient_list';
	var delBtn = false;
	$("#editPatient_container").append(createPatientList(href, listID, datafilter, delBtn));
});

// patient list for delete patient page
$(document).on('pageinit', '#settings_edit_patients_delete', function createDeletePatientList() {
	var href='';
	var datafilter = true;
	var listID = 'deletePatient_list';
	var delBtn = true;
	$("#deletePatient_container").append(createPatientList(href, listID, datafilter, delBtn));
});

/**
*
* function creating a list of all patients in DB
* 
* @param {String} href - link which should be open if on item is clicked
* @param {String} listID - id of HTML element
* @param {boolean} datafilter - true if list should have a search option
* @param {boolean} delBtn - true if list should have a delete button
*/


function createPatientList(href, listID, datafilter, delBtn) {
	//create patient object
	var patient = new getStorage('listAllPatients');
	var htmlString = "<ul id='"+listID+"' data-role='listview' data-filter='"+datafilter+"'"
	if (delBtn==true) {
		htmlString+= "data-split-icon='delete'  data-split-theme='d'";
	}
	htmlString+= ">";
	for(var i = 0; i<patient.pID.length; i++){
		htmlString += "<li><a class='patientListText' patient='"+patient.pID[i]+","+patient.pfname[i]+","+patient.plname[i]+"'"+
						" href='"+href+"'>"+patient.pfname[i]+" "+patient.plname[i]+"</a>";
		if (delBtn==true) {
			htmlString+= "<a delete='"+patient.pID[i]+"' class='deletePatient'></a>";
		}
		htmlString += "</li>";
	}
	htmlString += "</ul>";
	return htmlString;
}