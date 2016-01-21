'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$("#testjs").text("I changed");
		$('.jumbotron h1').text("Javascript is connected");
		//$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass("active");
		
	});
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(sayWhat);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
/*function projectClick(e) { 
	console.log("Project clicked");
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#7fff00");

}*/
function sayWhat(e) {
	var what = $('#project').val();
	$(what).animate({
      width: $('#width').val()
   });
	var newText = $('#description').val();
   $(what + " .project-description").text(newText);





}
function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    console.log("hi I'm here");

    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
   // console.log("hi I'm here");

    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       description.fadeToggle();
    }
}