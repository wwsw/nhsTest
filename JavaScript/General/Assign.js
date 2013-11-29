/* ***************************** SAVE SELECTED PATIENT ON settings_assign_behaviours_1 ******************************************** */

// on pagecreate on page with ID 'settings_assign_behaviours_1'
$(document).on('pagecreate', '#settings_assign_behaviours_1', function saveAssignPatient(){
    // on click on button (child of <li> which is child of container with ID 'track_1_patient_list')
    $('#assign_1_patient_list').children('li').children('a').on('click', function () {
        // save value of attribute patient to localStorage with key 'patient-to-monitor'
        setStorage('patient-assign', $(this).attr('patient'));
    });
});

$(document).on('pageinit', '#settings_assign_behaviours_2', function displayAssignPatient() {
	var patient = getStorage('patient-assign').split(",");
    $("#patient_name").append('<p>Assign behaviours for '+patient[1]+" "+patient[2]+'</p>');
 });

/* ********** FUNCTION SAVING ASSIGNED BEHAVIOURS ***************** */
$(document).on('click', '#save_assigned_behaviours', function saveAssignedBehavious() {
	var pID = getStorage('patient-assign').split(",")[0];
	var pfname = getStorage('patient-assign').split(",")[1];
	var plname = getStorage('patient-assign').split(",")[2];
	var behavioursArray = new Array();

	// loop getting all the behaviour IDs selectes and pushing them in the array
	for(var i=0;i<6;i++){
		if ($( "#behaviour"+[i] ).val() != "empty") {
			behavioursArray.push($( "#behaviour"+[i] ).val());
		};
	}
	// function which is executed if DB transaction was successful
	var successFunction = function(){
		alert("Assigned behaviours for "+pfname+" "+plname+" updated");
	}
	// write values to DB
	app.userdb.assignBehaviours(pID, behavioursArray, successFunction);
	// refresh patient object in localStorage
	app.userdb.listAllPatients();
});

