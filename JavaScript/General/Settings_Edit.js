/******************************* ADD NEW PATIENT *********************************** */
$(document).on('click','#save_new_patient', function newPatient() {
	// get values from input forms
	var pfname = $('#firstname').val();
	var plname = $('#lastname').val();
	var pID = $('#patient_id').val();
	var behavioursArray = "";
	// function which is executed if DB transaction was successful
	var successFunction = function(){
		alert(pfname+" "+plname+" saved to database");
	}
	// save values to DB
	app.userdb.addPatient(pID, pfname, plname, behavioursArray, successFunction);
	// update patients object in localStorage
	app.userdb.listAllPatients();
});

/******************************* ADD NEW BEHAVIOUR *********************************** */
$(document).on('click','#save_new_behaviour', function newBehaviour() {
	// get values from input forms
	var bname = $('#behaviour_name').val();
	var bdescription = $('#behaviour_description').val();
	var bTimeout = $('#behaviour_timeout').val();
	// function which is executed if DB transaction was successful
	var successFunction = function(){
		alert(bname+" saved to database");
	}
	// save values to DB
	app.userdb.addBehaviour(bname, bdescription, bTimeout, successFunction);
	// update behaviours object in localStorage
	app.userdb.listAllBehaviours();
});

/******************************* DELETE A PATIENT *********************************** */
$(document).on('click', '.deletePatient', function removePatient() {
	// pop-up user has to confirm
    var secQuestion = confirm('Are you sure you want to delete ' +$(this).parent().find('.patientListText').text()+ ' from your list of patient? \nThis action cannot be undone.');
    // if confirmed delete patient
    if (secQuestion) {
    	// get patient element to be removed
    	var patientElement = $(this).parent();
    	// function which is executed if DB transaction was successful(remove patient from list)
    	var successFunction = function(){
			patientElement.remove();
		}
    	app.userdb.deletePatient($(this).attr('delete'), successFunction);
    	// update patients object in localStorage
		app.userdb.listAllPatients();
		
    }
});

/******************************* DELETE A BEHAVIOUR *********************************** */
$(document).on('click', '.deleteBehaviour', function removePatient() {
	// pop-up user has to confirm
    var secQuestion = confirm('Are you sure you want to delete ' +$(this).parent().find('.behaviourListText').text()+ ' from your list of behaviours? \nThis action cannot be undone.');
    // if confirmed delete behaviour
    if (secQuestion) {
    	// get behaviour element to be removed
    	var behaviourElement = $(this).parent();
    	// function which is executed if DB transaction was successful (remove behaviour from list)
    	var successFunction = function(){
			behaviourElement.remove();
		}
    	app.userdb.deleteBehaviour($(this).attr('delete'), successFunction);
    	// update behaviours object in localStorage
		app.userdb.listAllBehaviours();
		//remove from list
		$(this).parent().remove();
    }
});

/******************************* EDIT A PATIENT NAME *********************************** */

/**
*	save patient for whom name should be changed to localStorage
*/

$(document).on('pagecreate', '#settings_edit_patients_edit_1', function saveEditPatient(){
    // on click on button (child of <li> which is child of container with ID 'track_1_patient_list')
    $('#editPatient_list').children('li').children('a').on('click', function () {
        // save value of attribute patient to localStorage with key 'patient-edit'
        setStorage('patient-edit', $(this).attr('patient'));
    });
});

/**
*	set values of input fields to current ones
*/

$(document).on('pagebeforeshow', '#settings_edit_patients_edit_2', function setEditPatient(){
	var pID = getStorage('patient-edit').split(',')[0];
	var pfname = getStorage('patient-edit').split(',')[1];
	var plname = getStorage('patient-edit').split(',')[2];
	// set input field to current values
	$('#patient_id').val(pID);
	$('#firstname').val(pfname);
	$('#lastname').val(plname);
});

/**
*	save new patient details to DB
*/

$(document).on('click', '#save_edit_patient', function editPatient() {
	// get values from input fields
	var pID = $('#patient_id').val();
	var pfname = $('#firstname').val();
	var plname = $('#lastname').val();
	// function which is executed if DB transaction was successful
	var successFunction = function(){
		alert("Details for "+pfname+" "+plname+" updated");
	}
	// update patient details in DB
	app.userdb.editPatientName(pID, pfname, plname, successFunction);    	
	// update patients object in localStorage
	app.userdb.listAllPatients();
});


/******************************* EDIT BEHAVIOUR DETAILS *********************************** */

/**
*	save behaviour for which details should be changed to localStorage
*/

$(document).on('pagecreate', '#settings_edit_behaviour_edit_1', function saveEditBehaviour(){
    // on click on button (child of <li> which is child of container with ID 'track_1_patient_list')
    $('#editBehaviour_list').children('li').children('a').on('click', function () {
        // save value of attribute behaviour to localStorage with key 'behaviour-array'
        setStorage('behaviour-edit', $(this).attr('behaviour'));
    });
});

/**
*	set values of input fields to current ones
*/

$(document).on('pagebeforeshow', '#settings_edit_behaviour_edit_2', function setEditBehaviour(){
	// get ID of selected behaviour from localStorage
	var bID = getStorage('behaviour-edit').split(',')[0];

	// create behaviours object
    var behaviours = new getStorage('listAllBehaviours');
    // get the index of this behaviour in the behaviour pbject
	var index = behaviours.bID.indexOf(parseInt(bID));
	// get all the values for selected behaviour
	var bName = behaviours.bName[index];
	var bDescription = behaviours.bDescription[index];
	var bTimeout = behaviours.bTimeout[index];

	// set input field to current values
	$('#behaviour_name').val(bName);
	$('#behaviour_description').val(bDescription);
	$('#behaviour_timeout').val(bTimeout).slider("refresh");
});

/**
*	save new patient details to DB
*/

$(document).on('click', '#save_edit_behaviour', function editBehaviourDetails() {
	// get values from input fields
	var bID = getStorage('behaviour-edit').split(',')[0];
	var bName = $('#behaviour_name').val();
	var bDescription = $('#behaviour_description').val();
	var bTimeout = $('#behaviour_timeout').val();
	// function which is executed if DB transaction was successful
	var successFunction = function(){
		alert("Details for "+bName+" updated");
	}

	// update patient details in DB
	app.userdb.editBehaviour(bID, bName, bDescription, bTimeout, successFunction) 	
	// update patients object in localStorage
	app.userdb.listAllBehaviours();
});