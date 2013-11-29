/**
*
* Global arrays which should be populated from DB on start of app
*
*
*/

// array with patient data
var patient_ID_array = new Array("0010", "0230", "898", "0001", "8981", "1234");
var patient_fname_array = new Array("John", "Sarah", "Julie", "Hurley", "Jessie", "Walter");
var patient_lname_array = new Array("Locke", "Lastname", "Hamilton", "Shephard", "Reyes", "White");

// array with behaviours assigned to certain patient --> should be generated from database
var behaviour_ID_array = new Array("010", "030", "098", "001", "081", "104");
var behaviour_names_array = new Array("Banging head", "Running around in circles", "Throwing food onto floor", "Screaming and shouting", "Overly excited", "Blinking");
var behaviour_descriptions_array = new Array("when patient is banging the head", "small circles", "another description", "not just talking, but really screaming", "this is the description for Overly excited", "Blinking with the eyes this means");
var behaviour_timeout = new Array(5, 5, 5, 10, 10, 60)