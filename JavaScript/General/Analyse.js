
$(document).on('pagebeforeshow', '#analyse_1', function(){

    /* ***************************** SAVE SELECTED PARAMETERS ON analyse_1 ******************************************** */ 
    $('#generate_graph').on('click', function saveAnalyseInput() {
        setStorage('timeframe', $('#timeframe').val());
        setStorage('chartType', $('#chart-type').val());
        setStorage('patient', $('#patient').val());
        setStorage('start-date', $('#start-date').val());
        setStorage('end-date', $('#end-date').val());
   // });

    /* ********************** calculate days/months/years of chosen period for chart ******************************* */
   // $('#generate_graph').on('click', function calculateDates() {
        // getting values to calculate days/months/years of chosen period
        var startDate = getStorage('start-date').split("-");
        var endDate = getStorage('end-date').split("-");
        var timeframe = getStorage('timeframe');
        var startYear = parseInt(startDate[0]);
        var startMonth = parseInt(startDate[1]);
        var startDay = parseInt(startDate[2]);
        var endYear = parseInt(endDate[0]);
        var endMonth = parseInt(endDate[1]);
        var endDay = parseInt(endDate[2]);

        //check if date input is valid
        if (startYear>endYear || (startYear==endYear&&startMonth>endMonth)||(startYear==endYear&&startMonth==endMonth&&startDay>endDay)) alert("Invalid date input");
        
        var dateArray = new Array();

        // create array of years for yearly timeframe
        if (timeframe=="yearly"){
            for(i = startYear; i <= endYear; i++) {
                dateArray.push(i);
            }
            setStorage('analyse-time-array', dateArray);
        }
        // create array of months for monthly timeframe
        if (timeframe=="monthly"){
            var numberMonths = (endYear - startYear) * 12 + (endMonth - startMonth)+1;
            var month = startMonth;
            var year = startYear;
            // for loop adding month and year to array
            for (var i = 0; i < numberMonths; i++) {
                if (month > 12) {
                    month -= 12;
                    year += 1;
                }
                dateArray.push(year + "-" + month);
                month +=  1;
            }
            setStorage('analyse-time-array', dateArray);
        }
        // create array of days for daily timeframe
        if (timeframe=="daily"){

            // get date in right format
            var start = new Date(startYear, startMonth, startDay);
            var end  = new Date(endYear, endMonth, endDay);
            
            dateArray = getDates( start, end );

            // function returning an array with all dates between to dates
            // @params startDate and endDate have to be date onjects
            function getDates( startDate, endDate ){
                var aDay = 24*3600*1000;
                var dayArray = new Array();
                // for loop increasing startDate by one day and saving result to array
                for (start=startDate*1,end=endDate*1;start<=end;start+=aDay){
                    dayArray.push(new Date(start));
                }
                /* for loop bringing result in right format*/
                for (var i=0;i<dayArray.length;i++){
                    var month = dayArray[i].getMonth();
                    var day = dayArray[i].getDate();
                    if(day <= 9) day = '0'+day;
                    var year = dayArray[i].getFullYear();
                    dayArray[i] = (year+"-"+month+"-"+day);
                }
                return dayArray;
            }
            setStorage('analyse-time-array', dateArray);
        }

    });
});


/* ***************************** SET INPUT FIELDS TO SAVED PARAMETERS ON analyse_1 ******************************************** */

$(document).on('pagecreate', '#analyse_1',  function setAnalyseFields() {
    // get today's date
    var date = new Date();
    // parse date
    var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    // for end date check if one is in localStorage. If so take that value, if not take today's date.
    var endDate = getStorage('end-date');
    if (endDate !=='undefined' && endDate !== null){
        $('#end-date').val(endDate);
        } 
    else {
        $('#end-date').val(today);
    }
    // for start date check if one is in localStorage. If so take that value, if not take today's date.
    var startDate = getStorage('start-date');
    if (startDate !=='undefined' && startDate !== null){
        $('#start-date').val(startDate);
        } 
    else {
        $('#start-date').val(today);
    }
    // set the other values to the last used ones, if available
    var timeframe = getStorage('timeframe');
    if (timeframe !=='undefined' && timeframe !== null) $('#timeframe').val(timeframe);
    var chartType = getStorage('chartType');
    if (chartType !=='undefined' && chartType !== null) $('#chart-type').val(chartType);
    var patient = getStorage('patient');
    if (patient !=='undefined' && patient !== null) $('#patient').val(patient);

});