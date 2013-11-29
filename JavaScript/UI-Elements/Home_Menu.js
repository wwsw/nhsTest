/**
* 
* trigger function to create the menu on home screen, when page is loaded and when page is resized
*
*/

$(document).on('pagebeforeshow', '#home', function initMenu(){

	// set the number of columns for landscape and portrait orientation and the minimum and maximum resolution for icons
	// arrays width links, labels, low and high resolution image paths
	var settings = {
		portaitColumns: 2,
		landscapeColumns: 4,
		minRes: 20,
		maxRes: 180,
		menuLinks: ["./track_1.html", "./settings_assign_behaviours_1.html", "./analyse_1.html", "./settings.html", "./help.html", "./about.html", "./home.php?logout"],
		menuNames: ["Monitor", "Assign", "Analyse", "Settings", "Help", "About", "Logout"],
		menuLowResIcons: ["../Resources/Images/Icons/Note-128.png", "../Resources/Images/Icons/ID-Add-128.png", "../Resources/Images/Icons/Bar-Chart-128.png", "../Resources/Images/Icons/Settings-128.png", "../Resources/Images/Icons/Help-128.png", "../Resources/Images/Icons/News-128.png", "../Resources/Images/Icons/Logout-128.png"],
		menuHighResIcons: ["../Resources/Images/Icons/Note-256.png", "../Resources/Images/Icons/ID-Add-256.png", "../Resources/Images/Icons/Bar-Chart-256.png", "../Resources/Images/Icons/Settings-256.png", "../Resources/Images/Icons/Help-256.png", "../Resources/Images/Icons/News-256.png", "../Resources/Images/Icons/Logout-256.png"]
	};

	createMenu(settings, "#home_menu");
    $(window).resize(function() {
        createMenu(settings, "#home_menu");
    });
});

/**
*
* function to create a respnosive meu
* number of columns, minimum and maximum resolution and icons can be set in settings object

* @param {Object} settings - contains:  portaitColumns{int}, landscapeColumns{int}, minRes{int}, maxRes{int}, menuLinks {String[]}, menuNames {String[]}, menuLowResIcons {String[]}, menuHighResIcons {String[]}
* @param {Strings} divID - the ID of the div element to which the menu should be appended 
*
*/

function createMenu(settings, divID){
	// check if screen is in portait or landscape orientation and assign columns accordingly
	var columns = ($(window).height() > $(window).width()) ? settings.portaitColumns : settings.landscapeColumns;
	// calculate number of rows (round up to next integer)
	var rows = Math.ceil(settings.menuLinks.length/columns);
	// get height of screen (-88px for footer and header) divided by rows and subtract 35px for margins and text (5px top and bottom margin + 19px text + 6px extra) and round
	var height = Math.round((($(window).height()-88)/rows)-35);
	// round the width of screen divided by columns and multiplied by 0.8 (mostly the height value will be used, if not this makes sure icons don't overlap)
	var width = width = Math.round(($(window).width()/columns)*0.8);
	// get the smaller value (icons are squares so height = width)
	if (height<width) width=height;
	// arrays with jQuery mobile ui-grid tags and ui-block tags
	var uiGridArray = new Array("", "<div class='ui-grid-a'>", "<div class='ui-grid-b'>", "<div class='ui-grid-c'>");
	var gridTags = new Array("<div class='ui-block-a'>", "<div class='ui-block-b'>", "<div class='ui-block-c'>", "<div class='ui-block-d'>");
	// home menu html string, give it the right ui-grid tag, depending on number of columns
	var htmlString = uiGridArray[columns-1];
	// icons are assigned to iconArray depending on width (128px or 256 px)
	var iconArray = new Array();
	iconArray = (width <= 128) ? settings.menuLowResIcons : settings.menuHighResIcons;
	// if resolution is smaller than minRes do not show icons and cap resolution at maxRes
	if (width<settings.minRes) width = 0;
	if (width>settings.maxRes) width=settings.maxRes;

	var itemNumber = 0;
	// nested for loop for rows and coulmns
	for (var i = 0; i<rows; i++){
		for (var j =0; j<columns; j++){
			// append html code for next menu item
			htmlString = htmlString + gridTags[j] +"<a class='home_buttons' data-role='button' style='outline:0; background: transparent; border:none; box-shadow:none;' href='"+settings.menuLinks[itemNumber]+"'><img src='"+iconArray[itemNumber]+"' width='"+width+"'></img><br />"+settings.menuNames[itemNumber]+"<br /></a>" + "</div>";
			// increase itemNumber counter
			itemNumber = itemNumber + 1;
			// if there is an uneaven number of menu items break loop so there won't be an undefined menu item
			if (settings.menuNames[itemNumber]==null) break;
		}
	}
	// add closing div tag to html string
	htmlString = htmlString + "</div>";
	// delete existing menu (important if menu is redrawn because of orientation change) and append new one
	$(divID).empty();
	$(divID).append(htmlString);
	// adding a top margin, so the button menu is vertically centered
	$(divID).css('margin-top',($(window).height() - 88 - (width+35)*rows)/2);
	// call jQuery create function on menu
	$(divID).trigger("create");
}