// Checking if element is in center of screen.
$(document).ready(function () {
    var windowHeight = $(window).height(),
        top = windowHeight * .3,
        bot = windowHeight * .42;
    $(window).on('scroll', function () {
        $(function () {
            var centerObject = $("#eduTitle");

            var centerObjTop = $(centerObject).offset().top - $(window).scrollTop();
            if (centerObjTop > top && (centerObjTop + $(centerObject).height()) < bot) {
                $($(".infoContainer")).css('background-attachment', 'unset');
            } else {
            }
        });
    });
});