// on click on add sample data to DB
$(document).on('click','#sample_data', function () {

	// array with patient data
	var patient_ID = new Array("0010", "0230", "898", "0001", "8981", "1234");
	var patient_fname = new Array("John", "Sarah", "Julie", "Hurley", "Jessie", "Walter");
	var patient_lname = new Array("Locke", "Lastname", "Hamilton", "Shephard", "Reyes", "White");
	var assigned_behaviours = new Array("1,2,3,4,5,6", "6,5,4,3,2,1", "1,5,3,4,2,6", "3,5,4,6,2,1", "5,3,2,4,1,6", "2,5,4,3,6,1");

	// array with behaviours assigned to certain patient 
	var behaviour_names = new Array("Banging head", "Running around in circles", "Throwing food onto floor", "Screaming and shouting", "Overly excited", "Blinking");
	var behaviour_descriptions = new Array("when patient is banging the head", "small circles", "another description", "not just talking, but really screaming", "this is the description for Overly excited", "Blinking with the eyes this means");
	var behaviour_timeout = new Array(5, 5, 5, 10, 10, 60);

	// users
	var username = new Array("normal_user", "admin");
	var password = new Array("1234", "qwerty");

	var successFunction = function (){
		alert("Database updated");
	}
    
	for (var i =0; i<patient_ID.length; i++){
		app.userdb.addPatient(patient_ID[i], patient_fname[i], patient_lname[i], assigned_behaviours[i], successFunction);
	}

	for (var i=0; i<behaviour_names.length;i++){
		app.userdb.addBehaviour(behaviour_names[i], behaviour_descriptions[i], behaviour_timeout[i], successFunction);
	}

	for (var i=0; i<username.length; i++){
		app.userdb.addUser(username[i], password[i], successFunction);
	}

	// update objects in localStorage
	app.userdb.listAllPatients();
	app.userdb.listAllBehaviours();
	app.userdb.listAllUsers();
});
