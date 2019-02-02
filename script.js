// Modernizr used to detec webp compatability.
Modernizr.on('webp', function (result) {
  if (result) {
    // supported
  } else {
    // not-supported
  }
});

$(document).ready(function () {

  // Small device navigation menu toggle.
  $('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

  // Arrow scroll function.
  $(window).scroll(function () {
    var topWindow = $(window).scrollTop();
    var topWindow = topWindow * 1.5;
    var windowHeight = $(window).height();
    var position = topWindow / windowHeight;
    position = 1 - position;
    $('.arrow-wrap').css('opacity', position);
  });

  // $(function () {
  //   $('a[href*=#]:not([href=#])').click(function () {
  //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //       if (target.length) {
  //         $('html,body').animate({
  //           scrollTop: target.offset().top
  //         }, 1000);
  //         return false;
  //       }
  //     }
  //   });
  // });

  var quotes = $(".quotes");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
      .fadeIn(2000)
      .delay(1000)
      .fadeOut(2000, showNextQuote);
  }
  showNextQuote();

  //Code stolen from css-tricks for smooth scrolling
  $('a[href*=\\#]:not([href=\\#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  //this is where we apply opacity to the arrow
  $(window).scroll(function () {

    // get scroll position
    var topWindow = $(window).scrollTop();
    //multipl by 1.5 so the arrow will become transparent half-way up the page
    var topWindow = topWindow * 1.5;

    //get height of window
    var windowHeight = $(window).height();

    //set position as percentage of how far the user has scrolled
    var position = topWindow / windowHeight;
    //invert the percentage
    position = 1 - position;

    //define arrow opacity as based on how far up the page the user has scrolled
    //no scrolling = 1, half-way up the page = 0
    //$('.arrow-wrap').css('opacity', position);
  });
});
