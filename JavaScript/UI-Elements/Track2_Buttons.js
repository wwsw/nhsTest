/**
*
* function creating the objects on track_2 on pagebeforeshow and updatings css on window resize
*
*/

$(document).on('pagebeforeshow', '#track_2', function initMonitorButtons(){
    createMonitorButtons("#patient_name", "#button_list");
    track2css();
    $(window).resize(function(){
        // set the width of grid blocks on window resize
        track2css();
    });
});

/**
*
* function printing patient-to-monitor name and creating list of buttons with description pop-ups
* if patient has no behaviours assigned, message will be schown
*
* @param {String} containerID - container for name of patient
* @param {String} buttonContainer - container for buttons
*
*/

function createMonitorButtons(containerID, buttonContainer) {
    // create patient object
    var currPatient = getStorage('patient-to-monitor').split(",");
    // create behaviours object
    var behaviours = new getStorage('listAllBehaviours');
    // get assignes behaviours
    var patients = new getStorage('listAllPatients');

    // get ID of current patient
    var pID = currPatient[0];
    // get the index of this patient in the patient pbject
    var index = patients.pID.indexOf(parseInt(currPatient));
    // get the patient's assigned behaviours (have to be split in array?!)
    var assigndBehaviours = patients.behaviours[index].split(",");

    // index list contains the indices of the assigned behaviours, in the baheviours object
    var indexList = new Array(); 
    for (var  i=0;i<assigndBehaviours.length;i++){
        indexList.push(behaviours.bID.indexOf(parseInt(assigndBehaviours[i])));
    }

    // check if patient has behaviours assigned
    if (assigndBehaviours[0]) {
        // show patients name
        $(containerID).append('<p>Monitor '+currPatient[1]+" "+currPatient[2]+'</p>');
        // for loop creating a button for each element in the array in the div with ID 'button_list'
        for(var i = 0; i<assigndBehaviours.length; i++){
            // first check if there is a name for the assigned behaviour, if not it has been deleted --> show no button for it
            if (behaviours.bName[indexList[i]] !== null && typeof behaviours.bName[indexList[i]] !== "undefined"){
                $(buttonContainer).append(   "<div class='ui-grid-a' id='track_2_grid'>"+
                                                "<div class='ui-block-a'><a data-role='button' bID='"+behaviours.bID[indexList[i]]+"' class='monitor_buttons' style='text-align: left;' >"+behaviours.bName[indexList[i]]+"</a></div>"+
                                                "<div class='ui-block-b'><a href='#behaviour"+i+"' data-rel='popup'  data-role='button' class='ui-icon-alt' data-inline='true' data-transition='pop' data-icon='info' data-iconpos='notext'>Description</a></div>"+
                                                    "<div data-role='popup' id='behaviour"+i+"' class='ui-content'  data-overlay-theme='a'>"+
                                                        "<a href='#' data-rel='back' data-role='button' data-icon='delete' data-iconpos='notext' class='ui-btn-right'>Close</a>"+
                                                        "<p><strong>"+behaviours.bName[indexList[i]]+":</strong><br/>"+behaviours.bDescription[indexList[i]]+"</p>"+
                                                    "</div>"+
                                                "</div>"
                                                );
            }
        }
        // call trigger("create") on parent div (#button_list) to correctly show new elements (buttons)
        $(buttonContainer).trigger("create");
    }
    // if no behaviours assigned following text is shown
    else {
        $(containerID).append('<p>'+currPatient[1]+" "+currPatient[2]+' has no behaviours assigned.</p>');
    }
}

/*
*
* function to set the width of behaviour buttons and description pop-up buttons
*
*/

function track2css(){
    $('.ui-block-a').css('width', $(window).width()).css('width', '-=70px').css('float', 'left');
    $('.ui-block-b').css('width', '40px').css('float', 'right');
}