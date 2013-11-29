/** STILL IN DEVELOPMENT!! */

/**
*
* Function calling the createAssignMenu and placing it on page settings_assign_behaviours_2
*
*/

$(document).on('pagebeforeshow', '#analyse_1', function(){
	setStorage('analyseNumberBehaviours', 6);
	
    if (getStorage('analyse-number-behaviours-show') !=='undefined' && timeframe !== null) setStorage('analyseNumberBehaviours', 1);
	
	$('#behaviours_analyse_container').append(createNewList(getStorage('analyseNumberBehaviours'))); 	// add return value of createAssignMenu() to div id assign_behaviour_list
	$("#behaviours_analyse_container").trigger("create");				// apply jQuery on element
});

$(document).on('click', '.analyse_add_behaviour', function(){   
      var analyseNumberBehaviours = getStorage('analyseNumberBehaviours'); 
      if (analyseNumberBehaviours < getStorage('analyseNumberBehaviours')) setStorage('analyseNumberBehaviours', (analyseNumberBehaviours+1))
}); 

/**
*
* function to create dropdowns to select bahaviours to monitor
* 
* it gets the values from global arrays: behaviour_ID_array, behaviour_names_array and ######## (assigned behaviours preselected if available)
*
* function returns a HTML string
*
* @param {integer} [numberBehavious=6] - defines the number of behaviours that can be assigned to a patient 
*
*/

function createNewList(numberBehavious) {
	if (!numberBehavious) numberBehavious=6; // default value is 6
	// create behaviours object
	var behaviours = new getStorage('listAllBehaviours');
	var htmlString = "";

	// for loop for number of behaviours which should be assigned to a patient
	for (var i =0; i<numberBehavious; i++){
		htmlString += "<div class='ui-grid-b' id='analyse_block"+i+"' style='display: none;'>";
		htmlString += "<div class='ui-block-a' style='width: 5%;'><p>"+(i+1)+":</p></div>";
		htmlString += "<div class='ui-block-b' style='width: 80%;'><select id='analyse_behaviour"+[i]+"' data-mini='true'>";
		// for loop adding behaviours to dropdown lists
		for (var j=0; j<behaviours.bID.length;j++){
			htmlString += "<option value='"+behaviours.bID[j]+"'>"+behaviours.bName[j]+"</option>";
		}
		htmlString += "</select></div>";
		//htmlString += "<div class='ui-block-c' style='width: 7.5%;'><a  id='add"+i+"' data-role='button' class='ui-icon-alt' data-inline='true' data-icon='plus' data-iconpos='notext'>Add a behaviour</a></div>";
		htmlString += "<div class='ui-block-c' style='width: 10%;'>"
		if (i != 0) htmlString += "<a  id='remove"+i+"' data-role='button' class='ui-icon-alt' data-inline='true' data-icon='minus' data-iconpos='notext'>Add a behaviour</a>"
		htmlString += "</div>";
		htmlString += "</div>";
		
	}
	htmlString += "<a data-role='button' id='analyse_add_behaviour'>+ behaviour</a>";
	console.log(htmlString);
	
	return htmlString;
}