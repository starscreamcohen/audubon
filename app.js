function init () {
	

};

	// Function Displays Overlay When Entering Project Thumbnail
	function displaysProjectOverlay () {
		$(this).next().show();	
	};

	// Removes Display Overlay When Exiting Project Thumbnail
	function hidesProjectOverlay () {
		$(this).next().hide();
	};
	
	//Prevents Project Overlay from Disappearing When Hoving over OVerlay Element
	//Add A Class Call Hovered which mimics thumbnail hover state
	function maintainProjectOverlay () {
		$(this).show().prev().addClass("hovered");
	};

	//Removes Overlay When Exiting The Overlay Element
	// Removes Hovered Class which mimic thumbnail hover state
	function removeProjectOverlay () {
		$(this).hide().prev(".thumbnail").removeClass("hovered");
	};

$(document).ready(function() {

	
	
	$(document).on('mouseenter', '.thumbnail', displaysProjectOverlay);
	
	$(document).on('mouseleave', '.thumbnail', hidesProjectOverlay);

	$(document).on('mouseenter', '.overlay', maintainProjectOverlay);

	$(document).on('mouseleave', '.overlay', removeProjectOverlay);

});



	