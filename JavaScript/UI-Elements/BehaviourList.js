// behaviour list for delete behaviour page
$(document).on('pageinit', '#settings_edit_behaviour_edit_1', function createEditBehaviourList() {
	var href='./settings_edit_behaviour_edit_2.html';
	var datafilter = true;
	var listID = 'editBehaviour_list';
	var delBtn = false;
	$("#editBehaviour_container").append(createBehaviourList(href, listID, datafilter, delBtn));
});


// behaviour list for delete behaviour page
$(document).on('pageinit', '#settings_edit_behaviours_delete', function createDeleteBehaviourList() {
	var href='';
	var datafilter = true;
	var listID = 'deleteBehaviour_list';
	var delBtn = true;
	$("#deleteBehaviour_container").append(createBehaviourList(href, listID, datafilter, delBtn));
});


/**
*
* function creating a list of all behaviours in DB
* 
* @param {String} href - link which should be open if on item is clicked
* @param {String} listID - id of HTML element
* @param {boolean} datafilter - true if list should have a search option
* @param {boolean} delBtn - true if list should have a delete button
*/


function createBehaviourList(href, listID, datafilter, delBtn) {
	//create behaviour object
	var behaviour = new getStorage('listAllBehaviours');
	var htmlString = "<ul id='"+listID+"' data-role='listview' data-filter='"+datafilter+"'"
	if (delBtn==true) {
		htmlString+= "data-split-icon='delete'  data-split-theme='d'";
	}
	htmlString+= ">";
	for(var i = 0; i<behaviour.bID.length; i++){
		htmlString += "<li><a class='behaviourListText' behaviour='"+behaviour.bID[i]+","+behaviour.bName[i]+"'"+
						" href='"+href+"'>"+behaviour.bName[i]+"</a>";
		if (delBtn==true) {
			htmlString+= "<a delete='"+behaviour.bID[i]+"' class='deleteBehaviour'></a>";
		}
		htmlString += "</li>";
	}
	htmlString += "</ul>";
	return htmlString;
}