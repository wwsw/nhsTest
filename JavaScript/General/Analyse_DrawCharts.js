$(document).on('pagebeforeshow', '#analyse_2', function initChart(){
        
    var data = {
        labels : getStorage('analyse-time-array'), //["Jan","Feb","Mar","Apr","May","Jun","Jul"],
        datasets : [
        {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40]
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100]
        }
        ]     
    }

    drawChart(data);  
    // redraw graph on resize 
    $( window ).resize(function() {
      drawChart(data);
    });
});

// draw graph function
function drawChart(data) {
    var chartType = getStorage('chartType'); 
    //var canvas_height = $(this).parent().height();
    var canvas_height = $( window ).height()-95;
    var canvas_width = $( window ).width()-10;
    // change postion of content (normally used because of fixed header and footer)
    //$(".ui-content").css({top: 0, bottom: 0});
    //remove chart first or even empty content
    $( "#myChart" ).remove();
    //append canvas with the right height and width
    $("#chart_container").append("<canvas id='myChart' width='"+canvas_width+"'height='"+canvas_height+"'></canvas>");
    // draw graph
    if (chartType=='flow') {
        var myLine = new Chart(document.getElementById("myChart").getContext("2d")).Line(data);
    }
    if (chartType=='bar') {
        var myLine = new Chart(document.getElementById("myChart").getContext("2d")).Bar(data);
    }
}