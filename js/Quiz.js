var arrivedFromCourse = false;

// Checking from where we came. If it was from a course,
// then we can start displaying the quiz for it.

$(document).ready(function() {

    if (document.location.href.includes("?")) {
        // Great!
        var fromCourse = document.location.href.split('=').pop().toString();
        console.log("aaa " + fromCourse);
    } else {
        $('.leftBar').removeClass("col-2");
        $('.leftBar').html("");
        $('.midSection').removeClass("col-8");
        $('.midSection').addClass("col-9");
        $('.rightBar').removeClass("col-2");
        $('.rightBar').addClass("col-3");
    }
    });