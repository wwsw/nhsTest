/**
*
* Function calling the createAssignMenu and placing it on page settings_assign_behaviours_2
*
*/

$(document).on('pagebeforeshow', '#settings_assign_behaviours_2', function initAssignMenu(){
	$('#assign_behaviour_list').append(createAssignMenu(6)); 	// add return value of createAssignMenu() to div id assign_behaviour_list
	$("#assign_behaviour_list").trigger("create");				// apply jQuery on element
});

/**
*
* function to create the menu with drop dropdown-lists on settings_assign_behaviours_2
* allows to assign a number of behaviours to a patient
* it gets the values from global arrays: behaviour_ID_array, behaviour_names_array and ######## (assigned behaviours preselected if available)
*
* function returns a HTML string
*
* @param {integer} [numberBehaviours=6] - defines the number of behaviours that can be assigned to a patient 
*
*/

function createAssignMenu(numberBehaviours) {
	if (!numberBehaviours) numberBehavious=6; // default value is 6
	// get behaviour object
	var behaviours = new getStorage('listAllBehaviours');
	// get assignes behaviours
	var patients = new getStorage('listAllPatients');
	// get ID of current patient
	var currPatient = getStorage('patient-assign').split(",")[0];
	// get the index of this patient in the patient pbject
	var index = patients.pID.indexOf(parseInt(currPatient));
	// get the patient's assigned behaviours (have to be split in array?!)
	var assigndBehaviours = patients.behaviours[index].split(",");

	var htmlString = "<div class='ui-grid-a'>";

	// for loop for number of behaviours which should be assigned to a patient
	for (var i =0; i<numberBehaviours; i++){
		htmlString += "<div class='ui-block-a' style='width: 30%;'><p>Behaviour "+[i+1]+":</p></div>"
		htmlString += "<div class='ui-block-b' style='width: 70%;'><select id='behaviour"+[i]+"' data-mini='true'>";
		// put empty option as first value in dropdown list, so it is the default value if no behaviour is assigned
		htmlString += "<option value='empty'>- EMPTY -</option>";
		// for loop adding behaviours to dropdown lists
		for (var j=0; j<behaviours.bID.length;j++){
			htmlString += "<option value='"+behaviours.bID[j]+"'";
			// preselect the currently assigned behaviours
			if (behaviours.bID[j]==assigndBehaviours[i]) {
				htmlString += "selected='selected'";
			}
			htmlString += ">"+behaviours.bName[j]+"</option>";
		}
		htmlString += "</select></div>";
	}
	htmlString += "</div>";
	return htmlString;
}