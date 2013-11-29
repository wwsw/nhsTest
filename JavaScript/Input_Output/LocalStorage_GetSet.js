/**
*
* Getter and setter method, to save and load items from localStorgae. JSON is used to stringfy content before saving it and to parse it before loading it.
*
*/

var ls = window.localStorage;

function setStorage (key, value) {
	try {
		ls.setItem(key, JSON.stringify(value));
	}
	catch(e) {
		ls.setItem(key, value);
	}
	
}
function getStorage(key) {
	try{
	    return JSON.parse(ls.getItem(key));
	} 
	catch(e){
	    return ls.getItem(key);
	}
}