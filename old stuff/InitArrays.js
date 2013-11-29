/**
*
* loading the behaviour, patient and user objects in localStorage
*
*/

$(document).on('pagebeforeshow', '#home', function initArrays(){

	app.userdb.listAllPatients();
	app.userdb.listAllBehaviours();
	app.userdb.listAllUsers();

});


