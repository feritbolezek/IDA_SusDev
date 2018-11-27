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
    console.log("UPPED!");
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    loadQuestions(fromCourse);
}

// Loads the variable currentCourseQuesitons with the array that is linked with the current course.
function loadQuestions(course) {
    switch (course) {
        case "livsmedel":
            currentCourseQuestions = livsmedelQuestions;
            break;
        case "transport":
            currentCourseQuestions = transportQuestions;
            break;
        case "atervinning":
            currentCourseQuestions = atervinningQuestions;
            break;
        case "elproduktion":
            currentCourseQuestions = elproduktionQuestions;
            break;
    }
    $("#choiceOneText").html(currentCourseQuestions[currentQuestion]["choice1"]);
    $("#choiceTwoText").html(currentCourseQuestions[currentQuestion]["choice2"]);
    $("#choiceThreeText").html(currentCourseQuestions[currentQuestion]["choice3"]);
    $("#choiceFourText").html(currentCourseQuestions[currentQuestion]["choice4"]);
    $(".question").html(currentCourseQuestions[currentQuestion]["question"]);
    console.log("got in! " + currentQuestion );
    switch (currentQuestion) {
        case 0:
        $("#questOneLbl").html("1/6");
        break;
        case 1:
        $("#questOneLbl").html("");
        $("#questTwoLbl").html("2/6");
        $("#progressbarTwo").removeClass("bg-secondary");
        break;
        case 2:
        $("#questTwoLbl").html("");
        $("#questThreeLbl").html("3/6");
        $("#progressbarThree").removeClass("bg-secondary");
        break;
        case 3:
        $("#questThreeLbl").html("");
        $("#questFourLbl").html("4/6");
        $("#progressbarFour").removeClass("bg-secondary");
        break;
        case 4:
        $("#questFourLbl").html("");
        $("#questFiveLbl").html("5/6");
        $("#progressbarFive").removeClass("bg-secondary");
        break;
        case 5:
        $("#questFiveLbl").html("");
        $("#questSixLbl").html("6/6");
        $("#progressbarSix").removeClass("bg-secondary");
        break;
    }
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
    },
    {
        question: "Best burger place?",
        choice1: "Burger King",
        choice2: "Mc'Donalds",
        choice3: "KFC",
        choice4: "Home",
        answer: "Home"
    },
    {
        question: "Best PC game?",
        choice1: "Counter Strike",
        choice2: "League of Legends",
        choice3: "World of Warcraft",
        choice4: "Fortnite",
        answer: "League of Legends"
    },
    {
        question: "Best programming language?",
        choice1: "Java",
        choice2: "Python",
        choice3: "C#",
        choice4: "C++",
        answer: "C#"
    },
    {
        question: "What is the music of life?",
        choice1: "Maracas",
        choice2: "Bananas",
        choice3: "Mozart",
        choice4: "Silence, my brother.",
        answer: "Silence, my brother."
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