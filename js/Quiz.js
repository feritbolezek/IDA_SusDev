var arrivedFromCourse = false;

var lastChoice = null;

var currentCourseQuestions = null;

var points = 0;

var currentQuestion = 0; // 6 question, meaning it will go from 0 to 5.

var fromCourse;

// Checking from where we came. If it was from a course,
// then we can start displaying the quiz for it.

$(document).ready(function () {

    if (document.location.href.includes("?")) {
        // Great!
        fromCourse = document.location.href.split('=').pop().toString();
        console.log(fromCourse);
        loadQuestions(fromCourse);
    } else {
        $('.leftBar').removeClass("col-2"); // This is not used at the moment due to design changes.
        $('.leftBar').html(""); // It might be removed from the code later on.
        $('.midSection').removeClass("col-8");
        $('.midSection').addClass("col-9");
        $('.rightBar').removeClass("col-2");
        $('.rightBar').addClass("col-3");
    }
});

function extractData() {
}

window.onload = function () {
}

// Just code being executed based on which answer the user chose.
function selectionWasMade(selection) {
    if (selection.id === lastChoice) return;
    if (lastChoice) {
        $("#" + lastChoice).removeClass("choiceSelected");
    }

    $("#continueBtn").removeClass("disabled");
    lastChoice = selection.id;
    console.log("Setting! " + lastChoice);
}

function answerSubmitted() {
    switch (lastChoice) {
        case "choiceOne":
            if (currentCourseQuestions[currentQuestion]["choice1"] === currentCourseQuestions[currentQuestion]["answer"]) {
                points++;
                console.log("Point up!");
            }
            break;
        case "choiceTwo":
            if (currentCourseQuestions[currentQuestion]["choice2"] === currentCourseQuestions[currentQuestion]["answer"]) {
                points++;
                console.log("Point up!");
            }
            break;
        case "choiceThree":
            if (currentCourseQuestions[currentQuestion]["choice3"] === currentCourseQuestions[currentQuestion]["answer"]) {
                points++;
                console.log("Point up!");
            }
            break;
        case "choiceFour":
            if (currentCourseQuestions[currentQuestion]["choice4"] === currentCourseQuestions[currentQuestion]["answer"]) {
                points++;
                console.log("Point up!");
            }
            break;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    loadQuestions(fromCourse);
}

// Loads the variable currentCourseQuesitons with the array that is linked with the current course.
function loadQuestions(course) {
    console.log("bip bop");
    switch (course) {
        case "livsmedel":
            currentCourseQuestions = livsmedelQuestions;
        case "transport":
            currentCourseQuestions = transportQuestions;
        case "atervinning":
            currentCourseQuestions = atervinningQuestions;
        case "elproduktion":
            currentCourseQuestions = elproduktionQuestions;
    }
    $("#choiceOneText").html(currentCourseQuestions[currentQuestion]["choice1"]);
    $("#choiceTwoText").html(currentCourseQuestions[currentQuestion]["choice2"]);
    $("#choiceThreeText").html(currentCourseQuestions[currentQuestion]["choice3"]);
    $("#choiceFourText").html(currentCourseQuestions[currentQuestion]["choice4"]);
    $(".question").html(currentCourseQuestions[currentQuestion]["question"]);
}


// All the question are grouped here in a few arrays.
var livsmedelQuestions = [{
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

var transportQuestions = [{
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

var atervinningQuestions = [{
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

var elproduktionQuestions = [{
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