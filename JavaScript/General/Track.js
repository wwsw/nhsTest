/* 
*
* save patient selected on track_1 to localStorage
* 
*/

// on pagecreate on page with ID 'track_1'
$(document).on('pagecreate', '#track_1', function(){
    // on click on button (child of <li> which is child of container with ID 'track_1_patient_list')
    $('#track_1_patient_list').children('li').children('a').on('click', function () {
        // save value of attribute patient to localStorage with key 'patient-to-monitor'
        setStorage('patient-to-monitor', $(this).attr('patient'));
    });
});

/* 
*
* write logged behaviour to DB
* 
*/

$(document).on('click','.monitor_buttons', function newPatient() {
	var pID = getStorage('patient-to-monitor').split(",")[0];
	var bID = $(this).attr('bID');
	var uID = 1;
	// get button element which was pressed
	var buttonElement = $(this);
	// function which is executed if DB transaction was successful (change button colour)
	var successFunction = function(){
		$(buttonElement).css("background-color", "#16a085").css("color", "white");
		setTimeout(function() {
		    $(buttonElement).css('background-color', "").css("color", "");
		  }, 500);
	}
	app.userdb.addLog(bID, pID, uID, successFunction)
});