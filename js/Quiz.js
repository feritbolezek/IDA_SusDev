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

function extractData() {}

window.onload = function () {}

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
            }
            break;
        case "choiceTwo":
            if (currentCourseQuestions[currentQuestion]["choice2"] === currentCourseQuestions[currentQuestion]["answer"]) {
                points++;
            }
            break;
        case "choiceThree":
            if (currentCourseQuestions[currentQuestion]["choice3"] === currentCourseQuestions[currentQuestion]["answer"]) {
                points++;
            }
            break;
        case "choiceFour":
            if (currentCourseQuestions[currentQuestion]["choice4"] === currentCourseQuestions[currentQuestion]["answer"]) {
                points++;
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

    if (currentQuestion == currentCourseQuestions.length) {
        displayEndOfQuiz();
        return;
    }

    $("#choiceOneText").html(currentCourseQuestions[currentQuestion]["choice1"]);
    $("#choiceTwoText").html(currentCourseQuestions[currentQuestion]["choice2"]);
    $("#choiceThreeText").html(currentCourseQuestions[currentQuestion]["choice3"]);
    $("#choiceFourText").html(currentCourseQuestions[currentQuestion]["choice4"]);
    $(".question").html(currentCourseQuestions[currentQuestion]["question"]);

    checkHeights();

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

function displayEndOfQuiz() {

    saveInformation();

    $('.resultLabel').html("Du fick " + "<b>" + points + "</b>" + " av totala " + "<b>" + currentCourseQuestions.length + "</b>" + " poäng!");

    for (let index = 1; index < 7; index++) {
        if (index <= points) {
            $('#star' + index).attr("src", "img/StarYellow.png");
        } else {
            $('#star' + index).attr("src", "img/StarGrey.png");
        }
    }

    $('.quizFinishedModal').modal('show');
}

function saveInformation() {

    window.localStorage.setItem(fromCourse, points); // Save total points received

    var currentXp = window.localStorage.getItem("xp");

    if (currentXp != null) {
        window.localStorage.setItem("xp", parseInt(currentXp) + 25);
    } else {
        window.localStorage.setItem("xp", 25);
    }
}

function checkHeights() {

    var heights = [$("#choiceOneText").height(),
        $("#choiceTwoText").height(),
        $("#choiceThreeText").height(),
        $("#choiceFourText").height()
    ];

    var greatestHeight = 0;

    heights.forEach(element => {  // Run this foreach loop to find which choice is the largest height.
        if (element > greatestHeight) {
            greatestHeight = element;
        }
    });

    console.log("Found greatest height! " + greatestHeight);

    // Set all the choices to the greatest height.
    $("#choiceOne").height(greatestHeight);
    $("#choiceTwo").height(greatestHeight);
    $("#choiceThree").height(greatestHeight);
    $("#choiceFour").height(greatestHeight);
    
    greatestHeight = 0; // Reset once done for the upcoming round.
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

var atervinningQuestions = [{
        question: "Varför återvinner man aluminium?",
        choice1: "Finns brist på bauxit",
        choice2: "För att framställning av aluminium ur bauxit är mycket energikrävande",
        choice3: "För att få bättre egenskaper",
        choice4: " Ingen av de tre svaren",
        answer: "För att framställning av aluminium ur bauxit är mycket energikrävande"
    },
    {
        question: "Hur många kwh fossilt bränsle behövs för att producera ett ton aluminium?",
        choice1: "Noll",
        choice2: "Femtusen",
        choice3: "Tiotusen",
        choice4: "Tjugotusen",
        answer: "Tiotusen"
    },
    {
        question: "Vilka två viktiga skäl gällande generell återvinning förekommer i texten?",
        choice1: "Brist på en viss råvara",
        choice2: "Svaret på a och c",
        choice3: "Återvinningen blir oftast billigare än utvinning av samma material på nytt",
        choice4: "Ingen av dem",
        answer: "Svaret på a och c"
    },
    {
        question: "Vilken produkt har den näst lägsta procentuella andelen återvunnet material år 2015?",
        choice1: "Pantburkar",
        choice2: "Plast och metall",
        choice3: "Aluminium",
        choice4: "Plast",
        answer: "Plast"
    },
    {
        question: "Vilket år reglerades lagen om producentansvaret gällande batterier i Sverige?",
        choice1: "2001",
        choice2: "2009",
        choice3: "2008",
        choice4: "1996",
        answer: "2009"
    },
    {
        question: "Varför är det förbjudet att deponera plast idag?",
        choice1: "För att den tar mycket plast",
        choice2: "De tar mycket plats och orsakar dålig lukt",
        choice3: "För att det är en effektiv metod",
        choice4: "För att det tar plats, orsakar dålig lukt och metangasbildning",
        answer: "För att det tar plats, orsakar dålig lukt och metangasbildning"
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