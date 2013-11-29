/*********GET and SET for Databse*********/

/*************Set Methods****************/

//Add User

app.userdb.addUser = function(username, password) {
		
		var db = app.userdb.db;
		db.transaction(function(t){
			t.executeSql("INSERT INTO users(username, password) VALUES(?,?)", 
			[username, password],
			app.userdb.onSuccess,
			app.userdb.onError);
		});
	
}


//Add Patient

app.userdb.addPatient = function(pID, pfname, plname, behavioursArray) {
		
		var db = app.userdb.db;
		db.transaction(function(t){
			t.executeSql("INSERT INTO patients(patient_ID, patient_fname, patient_lname, assigned_behaviours) VALUES(?,?,?,?)", 
			[pID, pfname, plname, behavioursArray],
			app.userdb.onSuccess,
			app.userdb.onError);
		});
	
}



//Add Behaviour
app.userdb.addBehaviour = function(bname, bdescription, bTimeout) {
		
		var db = app.userdb.db;
		db.transaction(function(t){
			t.executeSql("INSERT INTO behaviours(behaviour_name, behaviour_description, behaviour_timeout) VALUES(?,?,?)", 
			[bname, bdescription, bTimeout],
			app.userdb.onSuccess,
			app.userdb.onError);
		});
	
}


//Add Log

app.userdb.addLog = function(bID, pID, uID) {
		
		var db = app.userdb.db;
		db.transaction(function(t){
			var timestamp = new Date();
			var month = timestamp.getMonth() + 1;
			var day = timestamp.getDate();
			var year = timestamp.getFullYear();
			var newdate = year + "-" + month + "-" + day;
			t.executeSql("INSERT INTO log(behaviour_ID, patient_ID, user_ID, log_timestamp) VALUES(?,?,?,?)", 
			[bID, pID, uID, newdate],
			app.userdb.onSuccess,
			app.userdb.onError);
		});
	
}

//Edit password

app.userdb.editPassword = function(uID, password) {
	var db = app.userdb.db;
	db.transaction(function(t){
		t.executeSql("UPDATE users SET user_password=? WHERE user_ID=?", [password, uID], app.userdb.onSuccess, app.userdb.onError);
	});
	
}


//Edit Patient

app.userdb.editPatientName = function(pID, pfname, plname) {
	var db = app.userdb.db;
	db.transaction(function(t){
		t.executeSql("UPDATE patients SET patient_fname=?, patient_lname=? WHERE patient_ID=?", [pfname, plname, pID], app.userdb.onSuccess, app.userdb.onError);
	});
	
}


//Assign Behaviours to patient

app.userdb.assignBehaviours = function(pID, behavioursArray) {
	var db = app.userdb.db;
	db.transaction(function(t){
		t.executeSql("UPDATE patients SET assigned_behaviours=? WHERE patient_ID=?", [behavioursArray, pID], app.userdb.onSuccess, app.userdb.onError);
	});
	
}


//Edit Behaviour

app.userdb.editBehaviour = function(bID, bName, bDescription, bTimeout) {
	var db = app.userdb.db;
	db.transaction(function(t){
		t.executeSql("UPDATE behaviours SET behaviour_name=?, behaviour_description=?, behaviour_timeout=? WHERE behaviour_ID=?", [bID, bName, bDescription, bTimeout], app.userdb.onSuccess, app.userdb.onError);
	});
	
}

//Delete Patient

app.userdb.deletePatient = function(pID) {
	var db = app.userdb.db;
	db.transaction(function(t){
		t.executeSql("DELETE FROM patients WHERE patient_ID=?", [pID], app.userdb.onSuccess, app.userdb.onError);
	});
	
}

//Delete Behaviour

app.userdb.deleteBehaviour = function(bID) {
	var db = app.userdb.db;
	db.transaction(function(t){
		t.executeSql("DELETE FROM behaviours WHERE behaviour_ID=?", [bID], app.userdb.onSuccess, app.userdb.onError);
	});
	
}

//Delete Patient Log

app.userdb.deletePatientLog = function(pID) {
	var db = app.userdb.db;
	db.transaction(function(t){
		t.executeSql("DELETE FROM log WHERE patient_ID=?", [pID], app.userdb.onSuccess, app.userdb.onError);
	});
	
}


/*****************Get Methods*******************/

//Gets Users

app.userdb.listAllUsers = function() {

	var db = app.userdb.db;
	var users
	db.transaction(function(t) {
		
		t.executeSql("SELECT * FROM users", [], function (t, r) {
  		var len = r.rows.length, i;
		var uIDArray = new Array();
		var usernameArray = new Array();
		var passwordArray = new Array();
 		for (i = 0; i < len; i++) {		
		uIDArray[i] = r.rows.item(i).user_ID;	
    	usernameArray[i] = r.rows.item(i).username;
		passwordArray[i] = r.rows.item(i).password;
		
  }

		users = {
			uID: uIDArray,
			username: usernameArray,
			password: passwordArray
		}
		
		setStorage('listAllUsers', users);
  
});
});
}

//List All Patients

app.userdb.listAllPatients = function() {
	
	var db = app.userdb.db;
	var patients
	db.transaction(function(t) {
		
		t.executeSql("SELECT * FROM patients", [], function (t, r) {
  		var len = r.rows.length, i;
		var pIDArray = new Array();
		var pfnameArray = new Array();
		var plnameArray = new Array();
		var behavioursArray = new Array();
 		for (i = 0; i < len; i++) {		
			pIDArray[i] = r.rows.item(i).patient_ID;	
	    	pfnameArray[i] = r.rows.item(i).patient_fname;
			plnameArray[i] = r.rows.item(i).patient_lname;
			behavioursArray[i] = r.rows.item(i).assigned_behaviours;
  		}

		patients = {
			pID: pIDArray,
			pfname: pfnameArray,
			plname: plnameArray,
			behaviours: behavioursArray
		}

		setStorage('listAllPatients', patients);		 
  
		});
	});
	
	return patients;
}


//List All Behaviour

app.userdb.listAllBehaviours = function() {

	var db = app.userdb.db;
	var behaviours;
	db.transaction(function(t) {
		
		t.executeSql("SELECT * FROM behaviours", [], function (t, r) {
  		var len = r.rows.length, i;
		var bIDArray = new Array();
		var bNameArray = new Array();
		var bDescriptionArray = new Array();
		var bTimeoutArray = new Array();
 		for (i = 0; i < len; i++) {		
		bIDArray[i] = r.rows.item(i).behaviour_ID;	
    	bNameArray[i] = r.rows.item(i).behaviour_name;
		bDescriptionArray[i] = r.rows.item(i).behaviour_description;
		bTimeoutArray[i] = r.rows.item(i).behaviour_timeout;
  }

		behaviours = {
			bID: bIDArray,
			bName: bNameArray,
			bDescription: bDescriptionArray,
			bTimeout: bTimeoutArray
			
		}
		
		setStorage('listAllBehaviours', behaviours);
  
});
});
}

//Get Log

app.userdb.getLog = function(pID, bID, dateInterval) {

	var db = app.userdb.db;
	var pLog
	db.transaction(function(t) {
		
		t.executeSql("SELECT behaviour_ID, COUNT(*) AS behaviourFrequency, strftime(?, log_timestamp) AS dategroup FROM log WHERE patient_ID=? AND behaviour_ID=? GROUP BY behaviour_ID, dategroup", [dateInterval, pID, bID], function (t, r) {
  		var len = r.rows.length, i;
		var freqArray = new Array();
		var dateArray = new Array();
 		for (i = 0; i < len; i++) {
		freqArray[i] = r.rows.item(i).behaviourFrequency;
		dateArray[i] = r.rows.item(i).dategroup
  }
  		pLog = {
			freq: freqArray,
			date: dateArray,
			
		}
  
  		setStorage('getLog', pLog);

});
});

}


