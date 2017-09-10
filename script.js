$(document).ready( function(){

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
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

//this is where we apply opacity to the arrow
  $(window).scroll( function(){

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

// $(function() {
//   if ($.fn.reflect) {
//     $('#preview-coverflow .cover').reflect();	// only possible in very specific situations
//   }

//   $('#preview-coverflow').coverflow({
//     index:			6,
//     density:		2,
//     innerOffset:	50,
//     innerScale:		.7,
//     animateStep:	function(event, cover, offset, isVisible, isMiddle, sin, cos) {
//       if (isVisible) {
//         if (isMiddle) {
//           $(cover).css({
//             'filter':			'none',
//             '-webkit-filter':	'none'
//           });
//         } else {
//           var brightness	= 1 + Math.abs(sin),
//             contrast	= 1 - Math.abs(sin),
//             filter		= 'contrast('+contrast+') brightness('+brightness+')';
//           $(cover).css({
//             'filter':			filter,
//             '-webkit-filter':	filter
//           });
//         }
//       }
//     }
//   });
// });


//Scroll banner for portfolio/



// function showImages(el, scrollDirec) {
//   var windowHeight = jQuery( window ).height();
//   $(el).each(function(){
//     var thisPos = $(this).offset().top;
//
//     var topOfWindow = $(window).scrollTop();
//
//     if(scrollDirec === 'down') {
//       if (topOfWindow + windowHeight - 200 > thisPos) {
//         $(this).addClass("fadeIn");
//
//         if (topOfWindow + windowHeight - 600 > thisPos  ) {
//         $(this).addClass("fadeOut");
//         }
//       }
//     }
//
//     if(scrollDirec === 'up') {
//       if (topOfWindow + windowHeight - 600 < thisPos ) {
//           $(this).addClass("fadeIn");
//       }
//     }
//
//   });
// }
//
// function hideImages(el, scrollDirec){
//   var windowHeight = jQuery( window ).height();
//   $(el).each(function(){
//     var thisPos = $(this).offset().top;
//     var topOfWindow = $(window).scrollTop();
//
//     if (topOfWindow + windowHeight - 600 > thisPos  ) {
//         $(this).addClass("fadeOut");
//     }
//
//   });
// }
//
//
//
// var scrollsDirection = 'down';
//
//     // if the image in the window of browser when the page is loaded, show that image
//     $(document).ready(function(){
//       showImages('.test-image', scrollsDirection);
//
//
//       var lastValue = 0;
//
//       function scrollDirection() {
//
//         var thisValue = $(window).scrollTop();
//
//         if( thisValue > lastValue ) {
//           scrollsDirection = 'down';
//         }else {
//           scrollsDirection = 'up';
//         }
//
//         //console.log(scrollsDirection);
//         lastValue = thisValue;
//
//       }
//
//
//     // if the image in the window of browser when scrolling the page, show that image
//     $(window).scroll(function() {
//
//       scrollDirection();
//
//       showImages('.test-image', scrollDirection);
//       hideImages('.test-image', scrollDirection);
//     });
//
//   });
