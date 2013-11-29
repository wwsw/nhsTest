$(document).on('pagebeforeshow', '#analyse_2', function(){
    var chartType = getStorage('chartType');     
    if (chartType=='flow') {

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

        // draw graph when page is loaded and shown
        //$(document).on('pageshow', '[data-role="page"]', function(){
            drawChart();   
        //});

        // redraw graph on resize
        window.onresize = drawChart;

        // draw graph function
        function drawChart() {
            //var canvas_height = $(this).parent().height();
            var canvas_height = $( window ).height()-120;
            var canvas_width = $( window ).width()-40;
            // change postion of content (normally used because of fixed header and footer)
            //$(".ui-content").css({top: 0, bottom: 0});
            //remove chart first or even empty content
            $( "#myChart" ).remove();
            //append canvas with the right height and width
            $("#chart_container").append("<canvas id='myChart' width='"+canvas_width+"'height='"+canvas_height+"'></canvas>");
            // draw graph
            var myLine = new Chart(document.getElementById("myChart").getContext("2d")).Line(data);
        }
    }
});