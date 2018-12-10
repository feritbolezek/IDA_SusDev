// Checking if element is in center of screen.
$(document).ready(function () {
    var windowHeight = $(window).height(), // Getting the windows height
        top = windowHeight * .3,
        bot = windowHeight * .42; // Taking approx. center of the screen.
    $(window).on('scroll', function () {
        $(function () {
            var centerObject = $("#eduTitle");  // Getting the object which we are looking to be centered.

            var centerObjTop = $(centerObject).offset().top - $(window).scrollTop(); // Getting its position relative to where it should be.
            if (centerObjTop > top && (centerObjTop + $(centerObject).height()) < bot) { // If it is in the center.
                $($(".infoContainer")).css('background-attachment', 'unset'); // Set it's background-attachment to unset / fixed.
            } else {
            }
        });
    });
});