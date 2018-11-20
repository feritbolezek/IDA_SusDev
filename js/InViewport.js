; // This script checks whether the element is in view or not.
(function ($, win) {
    $.fn.inViewport = function (cb) {
        return this.each(function (i, el) {
            function visPx() {
                var H = $(this).height(),
                    r = el.getBoundingClientRect(), // Getting dom rect.
                    t = r.top,
                    b = r.bottom;
                return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H))); // Calculating if in viewport.
            }
            visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));
var Check;
$(".sloganText").inViewport(function (px) { // If in viewport, do this.

    if (px) {
        $(this).addClass("animated 1 fadeIn");
        $("#UnderTitle").addClass("animated 1 fadeInUp")
    } else {

    }
});
$("#eduTitle").inViewport(function (px) {

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

