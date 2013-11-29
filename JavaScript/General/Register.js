/***************** CHECK IF USERS ARE REGISTERED *********************  */

// function gets called from InitDatabase.js to makes sure database is created and ojcets are in localStrorage
function checkRegistered(){
	
	if(!getStorage('listAllUsers').uID[0]){
		$.mobile.changePage("./HTML/register.html");
	}

}


/***************** SAVE USERS TO DB ********************* */
$(document).on('click','#registerButton', function register() {
	function successFunction(){
		alert("!!!!!!!!!!!!!!!!!!!!!!");
	}



	// get values from input forms
	var userName = $('#user_username').val();
	var userPW1 = $('#user_password1').val();
	var userPW2 = $('#user_password2').val();
	var adminName = $('#admin_username').val();
	var adminPW1 = $('#admin_password1').val();
	var adminPW2 = $('#admin_password2').val();

	// chech input for user
	if (userName.length < 6) {
		alert("User name is too short (min 6 characters)");
		return;
	}
	if (userPW1.length < 6) {
		alert("User password is too short (min 6 characters)");
		return;
	}
	if (!userPW1.match(/[0-9]/)) {
		alert("User password must contain at least one number");
		return;
	}
	if (!(userPW1.match(/[A-Z]/)||userPW1.match(/[a-z]/))) {
		alert("User password must contain at least one letter");
		return;
	}
	if (userPW1!=userPW2){
		alert("User passwords do not match");
		return;
	}

	// chech input for admin
	if (adminName.length < 6) {
		alert("Admin name is too short (min 6 characters)");
		return;
	}
	if (adminPW1.length < 6) {
		alert("Admin password is too short (min 6 characters)");
		return;
	}
	if (!adminPW1.match(/[0-9]/)) {
		alert("Admin password must contain at least one number");
		return;
	}
	if (!(adminPW1.match(/[A-Z]/)||userPW1.match(/[a-z]/))) {
		alert("User password must contain at least one letter");
		return;
	}
	if (adminPW1!=adminPW2){
		alert("Admin passwords do not match");
		return;
	}

	// check user name/pw and admin name/pw are not the same
	if (userName==adminName) {
		alert("User name and admin name must not be the same");
		return;
	}	
	if (userPW1==adminPW1) {
		alert("User password and admin password must not be the same");
		return;
	}
	function successFunctionUser(){
		alert("User successfully registered");
	}
	function successFunctionAdmin(){
		alert("Admin successfully registered");
	}	
	app.userdb.addUser(userName, userPW1, successFunctionUser);
	app.userdb.addUser(adminName, adminPW1, successFunctionAdmin);
	app.userdb.listAllUsers();


});


