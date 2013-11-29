/**
*
* function to read a text file
*
* @param {String} fileName - path and filename
* @param {String} seperator - sperator for spliting result in array
*
*/


function getFile(fileName, seperator){
    var returnValue;
    $.ajax({
        type: "POST",
        async: false,
        url: fileName,
        dataType: 'text',
        success: function (result) {
            returnValue = result.split(seperator); // split result in array
        }
    });
    return returnValue;
}