$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var cards = $(".cards > .row");


    cards.each(function (index, el) {
        // if (index != 0)
        //     return;
        var top_of_element = $(el).offset().top;
        var bottom_of_element = $(el).offset().top + $(el).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).height();
        var top_of_screen = $(window).scrollTop();

    
        if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            $(el).addClass("fadeIn");
            $(el).removeClass("fadeOut");
        }
        else {
            $(el).addClass("fadeOut");
            $(el).removeClass("fadeIn");
        }
    });
});
$(window).scroll();