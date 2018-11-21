var arrivedFromCourse = false;

var lastChoice = null;

// Checking from where we came. If it was from a course,
// then we can start displaying the quiz for it.

$(document).ready(function () {

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





var points = 0;
var maxPoints;

var questions = [{
        question: "In what city was Donald Trump born?",
        choice1: "Los Angeles",
        choice2: "New York City",
        choice3: "Chicago",
        choice4: "Toronto",
        answer: "New York City"
    },
    {
        question: "In what city was Ferit born?",
        choice1: "Istanbul",
        choice2: "Helsingborg",
        choice3: "Malmö",
        choice4: "Jakarta",
        answer: "Malmö"
    }
];

function extractData() {
    console.log(questions[1].question);
}

window.onload = function () {
    extractData();
}

// Just code being executed based on which answer the user chose.
function selectionWasMade(selection) {
    if (selection.id === lastChoice) return;
    if (lastChoice) {
        console.log("Setting! " + lastChoice);
        $("#"+lastChoice).removeClass("choiceSelected");
    }
    
    lastChoice = selection.id;
}