/**
*
* Create database and tables
*
*/


$(document).on('pagebeforeshow', '#login', function(){
	// create DB
	app.userdb.open();
	app.userdb.createUsersTable();
	app.userdb.createPatientsTable();
	app.userdb.createBehavioursTable();
	app.userdb.createLogTable();

	// create onjects in localStorage
	app.userdb.listAllPatients();
	app.userdb.listAllBehaviours();
	app.userdb.listAllUsers();

	//checkRegistered();	
});

/**********Create/Open Database*********/

//Create namespace for database functions
var app = {};
app.userdb = {};

//Open Web SQL Database
app.userdb.db = null;

app.userdb.open = function() {
	var dbSize = 5 * 1024 *1024;
	app.userdb.db = openDatabase("WebDB", "1", "Behaviour App DB", dbSize);	
}

/************Error and Success Messages*************/

//Error Message
app.userdb.onError = function(t, err){
	alert("Database Error: " + err.message);	
}

//Success Message
app.userdb.onSuccess = function(t, r){
	alert("Database updated.");	
}

/************Create Tables*************/

//Users Table
app.userdb.createUsersTable = function() {

	var db = app.userdb.db;

	db.transaction(function(t) {
		t.executeSql("CREATE TABLE IF NOT EXISTS " + "users(user_ID INTEGER PRIMARY KEY ASC, username VARCHAR(20), password VARCHAR(20))", []);
	});

}


//Patients Table
app.userdb.createPatientsTable = function() {

	var db = app.userdb.db;

	db.transaction(function(t) {
		t.executeSql("CREATE TABLE IF NOT EXISTS " + "patients(patient_ID INTEGER PRIMARY KEY ASC, patient_fname TEXT, patient_lname TEXT,  assigned_behaviours TEXT)", []);
	});

}

//Behaviours Table
app.userdb.createBehavioursTable = function() {

	var db = app.userdb.db;

	db.transaction(function(t) {
		t.executeSql("CREATE TABLE IF NOT EXISTS " + "behaviours(behaviour_ID INTEGER PRIMARY KEY ASC, behaviour_name TEXT, behaviour_description TEXT, behaviour_timeout INTEGER)", []);
	});

}


//Log Table
app.userdb.createLogTable = function() {

	var db = app.userdb.db;

	db.transaction(function(t) {
		t.executeSql("CREATE TABLE IF NOT EXISTS " + "log(log_ID INTEGER PRIMARY KEY ASC, log_timestamp TEXT, behaviour_ID INTEGER, patient_ID INTEGER, user_ID INTEGER, FOREIGN KEY (behaviour_ID) REFERENCES behaviours(behaviour_ID), FOREIGN KEY (patient_ID) REFERENCES patients(patient_ID), FOREIGN KEY (user_ID) REFERENCES users(user_ID))", []);
	});

}