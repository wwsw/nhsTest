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