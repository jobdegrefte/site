$(function() {
  mobileNav();
  smoothScroll(400);
});

function mobileNav() {
  function toggleMenu() {
    var isOpen = $('.nav-toggle').hasClass('is-open');
    if (isOpen) {
      $('.nav-toggle, .mobilenav').removeClass('is-open');
      $('.nav-toggle').attr('aria-expanded', 'false');
      $('.nav-toggle').attr('aria-label', 'Open navigation');
    } else {
      $('.nav-toggle, .mobilenav').addClass('is-open');
      $('.nav-toggle').attr('aria-expanded', 'true');
      $('.nav-toggle').attr('aria-label', 'Close navigation');
    }
  }

  $('.nav-toggle').on('click', toggleMenu);

  $('.nav-toggle').on('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu();
    }
  });

  $('.mobilenav a').on('click', function() {
    $('.nav-toggle, .mobilenav').removeClass('is-open');
    $('.nav-toggle').attr('aria-expanded', 'false');
    $('.nav-toggle').attr('aria-label', 'Open navigation');
  });
}

function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}
