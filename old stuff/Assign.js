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