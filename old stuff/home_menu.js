/**
* create responsive menu on home screen
* script calculating the right size of icons on home screen depending on screen resoultion
* if the screen is resized the menu is recaculated and redrawn
*/


$(document).on('pagebeforeshow', '#home', function(){
    // create home menu on pagebeforeshow 
    createMenu();
    // redraw menu when screen is resized (orientation change)
    $(window).resize(function() {
        createMenu();
    });
});

function createMenu(){
	// set the number of columns for landscape and portrait orientation and the minimum resolution for icons

	settings = {
		portaitColumns = 2;
		landscapeColumns = 4;
		minRes = 20;
		maxRes = 180;
	};
	
	// arrays width links, labels, low and high resolution image paths
	var home_menuLinks = new Array("./track_1.html", "./settings_assign_behaviours_1.html", "./analyse_1.html", "./settings.html", "./help.html", "./about.html", "./home.php?logout");
	var home_menuNames = new Array("Monitor", "Assign", "Analyse", "Settings", "Help", "About", "Logout");
	var home_menuLowResIcons = new Array("../Resources/Images/Icons/Note-128.png", "../Resources/Images/Icons/ID-Add-128.png", "../Resources/Images/Icons/Bar-Chart-128.png", "../Resources/Images/Icons/Settings-128.png", "../Resources/Images/Icons/Help-128.png", "../Resources/Images/Icons/News-128.png", "../Resources/Images/Icons/Logout-128.png");
	var home_menuHighResIcons = new Array("../Resources/Images/Icons/Note-256.png", "../Resources/Images/Icons/ID-Add-256.png", "../Resources/Images/Icons/Bar-Chart-256.png", "../Resources/Images/Icons/Settings-256.png", "../Resources/Images/Icons/Help-256.png", "../Resources/Images/Icons/News-256.png", "../Resources/Images/Icons/Logout-256.png");

	// check if screen is in portait or landscape orientation and assign columns accordingly
	var columns = ($(window).height() > $(window).width()) ? portaitColumns : landscapeColumns;
	// calculate number of rows (round up to next integer)
	var rows = Math.ceil(home_menuLinks.length/columns);
	// get height of screen (-88px for footer and header) divided by rows and subtract 35px for margins and text (5px top and bottom margin + 19px text + 6px extra) and round
	var height = Math.round((($(window).height()-88)/rows)-35);
	// round the width of screen divided by columns and multiplied by 0.8 (mostly the height value will be used, if not this makes sure icons don't overlap)
	var width = width = Math.round(($(window).width()/columns)*0.8);
	// get the smaller value (icons are squares so height = width)
	if (height<width) width=height;
	// array to which the array with right resolution images will be assigned
	var iconArray = new Array();
	// arrays with jQuery mobile ui-grid tags and ui-block tags
	var uiGridArray = new Array("", "<div class='ui-grid-a'>", "<div class='ui-grid-b'>", "<div class='ui-grid-c'>");
	var gridTags = new Array("<div class='ui-block-a'>", "<div class='ui-block-b'>", "<div class='ui-block-c'>", "<div class='ui-block-d'>");
	// home menu html string, give it the right ui-grid tag, depending on number of columns
	var htmlString = uiGridArray[columns-1];

	// chose set of icons accoring to width (128px or 256 px)
	iconArray = (width <= 128) ? home_menuLowResIcons : home_menuHighResIcons;
	// if resolution is to small do not show any icons (width=0)
	if (width<minRes) width = 0;
	// do not allow width to be higher than 256px (is the resolution of big icons)
	if (width>maxRes) width=maxRes;

	// counter for number menu items
	var itemNumber = 0;
	// nested for loop for rows and coulmns
	for (var i = 0; i<rows; i++){
		for (var j =0; j<columns; j++){
			// append html code for next menu item
			htmlString = htmlString + gridTags[j] +"<a class='home_buttons' data-role='button' style='outline:0; background: transparent; border:none; box-shadow:none;' href='"+home_menuLinks[itemNumber]+"'><img src='"+iconArray[itemNumber]+"' width='"+width+"'></img><br />"+home_menuNames[itemNumber]+"<br /></a>" + "</div>";
			// increase itemNumber counter
			itemNumber = itemNumber + 1;
			// if there is an uneaven number of menu items break loop so there won't be an undefined menu item
			if (home_menuNames[itemNumber]==null) break;
		}
	}
	// add closing div tag to html string
	htmlString = htmlString + "</div>";

	// delete existing menu (important if menu is redrawn because of orientation change)
	$("#home_menu").empty();
	// append html code to div with menu id
	$('#home_menu').append(htmlString);
	// call jQuery create function on menu
	$("#home_menu").trigger("create");
	// adding a top margin so the button menu is vertically centered
	$('#home_menu').css('margin-top',($(window).height() - 88 - (width+35)*rows)/2);
}