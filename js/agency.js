/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


//Header - Hides and Shows orange bar
function hide_orangebar() {
	document.getElementById('orange-top').style.visibility="hidden";
}
function show_orangebar() {
	document.getElementById('orange-top').style.visibility="visible";
}


//Resume - Toggles between different resume views
$(function() {
    $("[name=toggler]").click(function(){
            $('.resume-experience').hide();
            $("#resume-left-"+$(this).val()).fadeToggle();
    });
 });


//Resume - experience slider
$(document).ready(function(){
	$('.bxslider').bxSlider({
	  mode: 'fade',
	  captions: true
	});
});


//Contact - Hides and Shows orange bar - css is hiding it onload
function show_orangetype() {
	document.getElementById('contact-orange-type').style.visibility="visible";
}
function hide_orangetype() {
	document.getElementById('contact-orange-type').style.visibility="hidden";
}




