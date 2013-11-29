/*var patients = app.userdb.listAllPatients();

var pID = patients.pID;
var pfname = patients.pfname;
var plname = patients.plname;
var pBehaviours = patients.behaviours;

alert(PiD);
alert(fname);
alert(lname);
*/


// array with patient data
var patient_ID_array = new Array();
var patient_fname_array = new Array();
var patient_lname_array = new Array();
var pBehaviours = new Array();

// array with behaviours assigned to certain patient --> should be generated from database
var behaviour_ID_array = new Array();
var behaviour_names_array = new Array();
var behaviour_descriptions_array = new Array();
var behaviour_timeout = new Array();

$(document).on('pagebeforeshow', '#home', function(){
	// array with patient data
	var patient_ID = new Array("0010", "0230", "898", "0001", "8981", "1234");
	var patient_fname = new Array("John", "Sarah", "Julie", "Hurley", "Jessie", "Walter");
	var patient_lname = new Array("Locke", "Lastname", "Hamilton", "Shephard", "Reyes", "White");
	var assigned_behaviours = new Array("1,2,3,4,5,6", "1,2,3,4,5,6", "1,2,3,4,5,6", "1,2,3,4,5,6", "1,2,3,4,5,6", "1,2,3,4,5,6");

	// array with behaviours assigned to certain patient --> should be generated from database
	// var behaviour_ID = new Array("010", "030", "098", "001", "081", "104");
	var behaviour_names = new Array("Banging head", "Running around in circles", "Throwing food onto floor", "Screaming and shouting", "Overly excited", "Blinking");
	var behaviour_descriptions = new Array("when patient is banging the head", "small circles", "another description", "not just talking, but really screaming", "this is the description for Overly excited", "Blinking with the eyes this means");
	var behaviour_timeout = new Array(5, 5, 5, 10, 10, 60);

	// users
	var username = new Array("normal_user", "admin");
	var password = new Array("1234", "qwerty");

	for (var i =0; i<patient_ID.length; i++){
		app.userdb.addPatient(patient_ID[i], patient_fname[i], patient_lname[i], assigned_behaviours[i]);
	}

	for (var i=0; i<behaviour_names.length;i++){
		app.userdb.addBehaviour(behaviour_names[i], behaviour_descriptions[i], behaviour_timeout[i]);
	}

	for (var i=0; i<username.length; i++){
		app.userdb.addUser(username[i], password[i]);
	}


	app.userdb.listAllPatients();
	app.userdb.listAllBehaviours();
	app.userdb.listAllUsers();




});