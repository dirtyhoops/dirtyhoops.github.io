// The page navigates to the sections onClick
$(document).ready(function() {
  $('#link-home').click(function() {
    $path = $('#header').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

$(document).ready(function() {
  $('#button-header').click(function() {
    $path = $('#section-project').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

$(document).ready(function() {
  $('#link-about').click(function() {
    $path = $('#section-about').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

$(document).ready(function() {
  $('#link-project').click(function() {
    $path = $('#section-project').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

$(document).ready(function() {
  $('#link-contact').click(function() {
    $path = $('#section-contact').offset().top;
    $('html, body').animate({ scrollTop: $path }, 850);
  });
});

// The NavBar darkens on the very first scroll down
$(window).on('scroll', function() {
  if ($(window).scrollTop() > 20) {
    $('.nav').addClass('scrolled');
  } else {
    $('.nav').removeClass('scrolled');
  }
});

// Checks the checkbox to clear the navigation menu when it's mobile
$(document).ready(function() {
  $('.nav__link').click(function() {
    $('#nav__menu__btn').prop('checked', false);
  });
});

// $(document).ready(function() {
//   $('#button-header').on('click', function() {
//     $path = $('#section-project').offset().top;
//     $('html, body').animate({ scrollTop: $path }, 850);
//   });
// });
