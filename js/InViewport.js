; // This script checks whether the element is in view or not.
(function ($, win) {
    $.fn.inViewport = function (cb) { // Function created named inViewport.
        return this.each(function (i, el) {
            function visPx() {
                var H = $(this).height(),
                    r = el.getBoundingClientRect(), // Getting dom rect.
                    t = r.top,  // Getting top and bottom of boundingRect
                    b = r.bottom;
                return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H))); // Calculating if in viewport and returning.
            }
            visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));
var Check;
$(".sloganText").inViewport(function (px) { // Using the function created above.

    if (px) { // If in viewport, do this.
        $(this).addClass("animated 1 fadeIn");  // Because the element .sloganText is in the browsers viewPort we can apply animation. 
        $("#UnderTitle").addClass("animated 1 fadeInUp") // If we didn't check if the element was in viewPort it would immediately play the animation and the user may miss the animation.
    } else {
        // Else do this.
    }
});
$("#eduTitle").inViewport(function (px) { // Same usage is applied to all the method calls below.

    if (px) {
        $(this).addClass("animated 2 fadeInUp");
    } else {

    }
});
$("#eduSubTitle").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 2 fadeInUp");
    } else {

    }
});
$("#cardOne").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 2 fadeInUp");
    } else {

    }
});
$("#cardTwo").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 2 fadeInUp delay-1s");
    } else {

    }
});
$("#cardThree").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 2 fadeInUp delay-2s");
    } else {

    }
});
$("#cardFour").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 2 fadeInUp delay-3s");
    } else {

    }
});

$("#delkurserTitle").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 2 fadeInRight delay-1s");
    } else {

    }
});

$("#delkurserSubTitle").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 2 fadeInRight delay-2s");
    } else {

    }
});

$("#chartContainer").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 2 fadeIn delay-1s");
    } else {

    }
});

$("#quizTitle").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 2 fadeInLeft delay-1s");
    } else {

    }
});

$("#quizSubTitle").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 2 fadeInLeft delay-2s");
    } else {

    }
});

$(".quizImg").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 2 fadeIn delay-2s");
    } else {

    }
});

