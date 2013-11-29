
/* ***************************** MENU ******************************************** */

// call function on pagebeforeshow so page ID can be accessed (for if statement in next line) but not on pageshow so button does not appear after page has loaded 
$(document).on('pagebeforeshow', '[data-role="page"]', function createPanelMenu(){
    // no menu on login page
    if ($.mobile.activePage.attr("id")!="login") {
        // add a the menu button to header
        $(".header").append('<a data-icon="bars" class="ui-btn-right menu-panel-button" href="#menu_panel">Menu</a>'); 
        // add the menu panel        
        $("<div>").attr({ 'id': 'menu_panel', 'class': 'menu_panel', 'data-role': 'panel', 'data-position': 'right' }).append(''+
            '<ul class="menu_links" data-role="listview">'+
                '<li data-icon="home" style="border-bottom: 1px solid black;"><a class="menu-panel-link-button" href="./home.html">Home</a></li>'+
                '<li data-icon="edit" style="border-bottom: 1px solid black;"><a class="menu-panel-link-button" href="./track_1.html">Monitor</a></li>'+
                '<li data-icon="grid" style="border-bottom: 1px solid black;"><a class="menu-panel-link-button" href="./settings_assign_behaviours_1.html">Assign</a></li>'+
                '<li data-icon="star" style="border-bottom: 1px solid black;"><a class="menu-panel-link-button" href="./analyse_1.html">Analyse</a></li>'+
                '<li data-icon="gear" style="border-bottom: 1px solid black;"><a class="menu-panel-link-button" href="./settings.html">Settings</a></li>'+
                '<li data-icon="info" style="border-bottom: 1px solid black;"><a class="menu-panel-link-button" href="./help.html">Help</a></li>'+
                '<li data-icon="delete"><a href="#header" data-rel="close">Close menu</a></li>'+
            '</ul>').appendTo($(this));
        $('.page').trigger('pagecreate');
    }
    
});

// show menu panel when the right button in the header is clicked
$(document).on('click', '.menu-panel-button', function openMeuPanel(){   
       $.mobile.activePage.find('.menu_panel').panel("open");       
}); 

// close menu panel when link is clicked, needed if link of same page which is open is clicked
$(document).on('click', '.menu-panel-link-button', function closeMenuPanel(){   
    console.log("click panel");
       $.mobile.activePage.find('.menu_panel').panel("close");       
});

// swipe open/close panel
// http://view.jquerymobile.com/1.3.0/docs/examples/panels/panel-swipe-open.php#&ui-state=dialog
$(document).on('pageinit', '[data-role="page"]', function swipeMenuPanel() {
	$(document).on("swipeleft swiperight", function (a) {
    	if (a.type === "swipeleft") {
            $(".menu_panel").panel("open");
        } 
        if (a.type === "swiperight") {
            $(".menu_panel").panel("close");
        } 
    });
});

/* ***************************** FOOTER ON all pages ******************************************** */

// create footer for every page
$(document).on('pagecreate', '[data-role="page"]', function addFooter(){
    $("<div>").attr({'class':'main_footer','data-role':'footer', 'data-position':'fixed'}).append('<h1>UCL</h1>').appendTo($(this));
});











