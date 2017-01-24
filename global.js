$(function() {
  mobileNav();
  smoothScroll(400);
});

function mobileNav() {
  $('.nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.nav-toggle, .mobilenav, .header').removeClass('is-open'); }
    else { $('.nav-toggle, .mobilenav, .header').addClass('is-open'); }
  });
}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}