var arrivedFromCourse = false; // The course you chose.

var lastChoice = null;  // Once you've clicked and selected a answer it will be held temporarily here.

var currentCourseQuestions = null; // The current questions for this course.

var points = 0; // Increments as you answer a question correctly.

var currentQuestion = 0; // 6 question, meaning it will go from 0 to 5.

var fromCourse;

// Checking from where we came. If it was from a course,
// then we can start displaying the quiz for it.

$(document).ready(function () {

    if (document.location.href.includes("?")) { // If the url contains a question mark then a query has been passed.
        // Great!
        fromCourse = document.location.href.split('=').pop().toString(); // Extract the query (course)
        loadQuestions(fromCourse); // Load questions based on what couse we're on.
    } else {
        $('.leftBar').removeClass("col-2"); // This is not used at the moment due to design changes.
        $('.leftBar').html(""); // It might be removed from the code later on.
        $('.midSection').removeClass("col-8"); // This is not necessary but if we arrived here and have no query, swap around the layout.
        $('.midSection').addClass("col-9");
        $('.rightBar').removeClass("col-2");
        $('.rightBar').addClass("col-3");
    }
});

window.onload = function () {}

// Just code being executed based on which answer the user chose.
function selectionWasMade(selection) {
    if (selection.id === lastChoice) return;
    if (lastChoice) {
        $("#" + lastChoice).removeClass("choiceSelected");
    }

    $("#continueBtn").removeClass("disabled");
    lastChoice = selection.id; // Setting last choice based on users selection.
}

// Code executed once an answer has been submitted. (Once the user selects an answer and presses continue.)
function answerSubmitted() {
    switch (lastChoice) {
        case "choiceOne":
            if (currentCourseQuestions[currentQuestion]["choice1"] === currentCourseQuestions[currentQuestion]["answer"]) {
                points++; // Increment points if it was the correct answer.
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
    nextQuestion();
}

// Display next question once one has been answered.
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
        displayEndOfQuiz(); // If we're at the last question.
        return;
    }

    // Update the answers text to correspond the answers for the current question.
    $("#choiceOneText").html(currentCourseQuestions[currentQuestion]["choice1"]);
    $("#choiceTwoText").html(currentCourseQuestions[currentQuestion]["choice2"]);
    $("#choiceThreeText").html(currentCourseQuestions[currentQuestion]["choice3"]);
    $("#choiceFourText").html(currentCourseQuestions[currentQuestion]["choice4"]);
    $(".question").html(currentCourseQuestions[currentQuestion]["question"]);

    checkHeights();

    // Based on what question it is, update the UI to display that.
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

// Once the quiz is over, display UI that shows total score.
function displayEndOfQuiz() {

    saveInformation();

    // Display text based on how mant questions were answered correctly.
    $('.resultLabel').html("Du fick " + "<b>" + points + "</b>" + " av totala " + "<b>" + currentCourseQuestions.length + "</b>" + " poäng!");

    for (let index = 1; index < 7; index++) { // Show amount of stars based on how many questions were answered correctly.
        if (index <= points) {
            $('#star' + index).attr("src", "img/StarYellow.png");
        } else {
            $('#star' + index).attr("src", "img/StarGrey.png");
        }
    }

    $('.quizFinishedModal').modal('show'); // Show the modal box. (End of quiz UI)
}

// Save data to localStorage
function saveInformation() {

    window.localStorage.setItem(fromCourse, points); // Save total points received

    var currentXp = window.localStorage.getItem("xp");

    if (currentXp != null) {
        window.localStorage.setItem("xp", parseInt(currentXp) + 25); // Up the xp by 25. This is hardcoded.
    } else {
        window.localStorage.setItem("xp", 25);
    }
}

// This functions checks which answer box is the largest and makes all other boxes the same height.
// This is to make the UI look consistent. Where once box is not smaller/larger than all the others.
function checkHeights() {

    // get all the heights of the answer boxes.
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

    // Set all the choices to the greatest height.
    $("#choiceOne").height(greatestHeight);
    $("#choiceTwo").height(greatestHeight);
    $("#choiceThree").height(greatestHeight);
    $("#choiceFour").height(greatestHeight);
    
    greatestHeight = 0; // Reset once done for the upcoming round.
}

// All the question are grouped here in a few arrays.
var livsmedelQuestions = [{
        question: "Vilket av FN:s hållbarhetsmål handlar om hållbara konsumtions- och produktionsmönster?",
        choice1: "56:e",
        choice2: "1:a",
        choice3: "12:e",
        choice4: "Inget av ovan",
        answer: "12:e"
    },
    {
        question: "Varför är oftast ’hållbara’ produkter dyrare än andra varor?",
        choice1: "Eftersom företag vill tjäna pengar",
        choice2: "För att varorna ska vara miljövänliga",
        choice3: "För att förpackningen ska vara finare",
        choice4: "Eftersom konsumenten ser fel på priset",
        answer: "För att varorna ska vara miljövänliga"
    },
    {
        question: "Vad kan konsumenten göra för att agera mer hållbart gällande livsmedel?",
        choice1: "Endast köpa animaliska produkter",
        choice2: "Köpa varor som är producerade långt ifrån Sverige",
        choice3: "Köpa jordgubbar under sommarsäsongen",
        choice4: "Gå ut i skogen och äta löv",
        answer: "Köpa jordgubbar under sommarsäsongen"
    },
    {
        question: "Hur många procent av jordens totala utsläpp av växthusgaser orsakas av animaliska produkter?",
        choice1: "15%",
        choice2: "48%",
        choice3: "25%",
        choice4: "45%",
        answer: "15%"
    },
    {
        question: "I snitt hur många ton växthusgaser motsvarar den vanliga svenskens kött konsumtion per år?",
        choice1: "0,5 ton",
        choice2: "30 ton",
        choice3: "4 ton",
        choice4: "8 ton",
        answer: " 8 ton"
    },
    {
        question: "På vilket sätt bidrar animaliska produkter till utsläpp av växthusgaser?",
        choice1: "För att metan, lustgas och koldioxid frisläpps i samband med produktionen",
        choice2: "För att djur avlids",
        choice3: "Dåliga jobbförhållande",
        choice4: "Inte sant",
        answer: "För att metan, lustgas och koldioxid frisläpps i samband med produktionen"
    }
];

var transportQuestions = [{
        question: "Är det en hållbar utvecklig att samhället slutar använda snabb transport rakt av?",
        choice1: "Ja, för miljön blir bra",
        choice2: "Ja, det är det ända ekologiskt hållbara",
        choice3: "Ja, för temporaturen är viktigast",
        choice4: "Nej, samhället kräver en viss rörlighet för ekonomin",
        answer: "Nej, samhället kräver en viss rörlighet för ekonomin"
    },
    {
        question: "Vilket samlingsnamn av föreningar påverkar försurning?",
        choice1: "Kväveoxider",
        choice2: "Nitrit",
        choice3: "Svaveloxider",
        choice4: "Kolväten",
        answer: "Kväveoxider"
    },
    {
        question: "Vilken av följande håller tillbaka elbilar?",
        choice1: "Pris",
        choice2: "Utseende",
        choice3: "Livslängd",
        choice4: "Högt ljud",
        answer: "Pris"
    },
    {
        question: "Vad är den huvudsakligt begränsande faktorn för biogas av dessa alternativ?",
        choice1: "Begräsningar inom mobilitet",
        choice2: "Mängd material att tillverka det av",
        choice3: "Ojämn tillgång året runt",
        choice4: "Biogas är nära kopplat till cancer",
        answer: "Begräsningar inom mobilitet"
    },
    {
        question: "Varför kan AI vara bra i trafiken?",
        choice1: "Bra för miljö och säkert",
        choice2: "Kör långsamt och drar ner hastigheten på vägarna",
        choice3: "Ingen av de andra trafikanterna kan krocka",
        choice4: "Tutar vilt för att kontrollera alla andra trafikanter",
        answer: "Bra för miljö och säkert"
    },
    {
        question: "Varför är säkerheten från AI bra för miljön?",
        choice1: "Mindre nya bilar behöver tillverkas",
        choice2: "Människor blir mer utvilade",
        choice3: "Skapar inte aggression i trafiken",
        choice4: "För man kan prata i telefon medan man kör",
        answer: "Mindre nya bilar behöver tillverkas"
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
        question: "Vad är nackdelen med dagens elproduktion av solenergi?",
        choice1: "Kostnaden",
        choice2: "Teknologin är inte tillräckligt utvecklad för att utvinna energi från solen",
        choice3: "Det är molnigt för ofta",
        choice4: "Solen är inte tillräckligt stark",
        answer: "Kostnaden"
    },
    {
        question: "Hur mycket kostar el som är producerad från solen?",
        choice1: "1 cent per kilowattimme",
        choice2: "5 cent per kilowattimme",
        choice3: "10 cent per kilowattimme",
        choice4: "20 cent per kilowattimme",
        answer: "10 cent per kilowattimme"
    },
    {
        question: "Hur effektivt är vindkraftverk jämfört med solpaneler?",
        choice1: "Båda har samma effektivitet",
        choice2: "Vindkraftverk är mer effektiva",
        choice3: "Solpaneler är mer effektiva",
        choice4: "Ingen av alternativen",
        answer: "Vindkraftverk är mer effektiva"
    },
    {
        question: "På vilket sätt är vindkraftverk ”störande”?",
        choice1: "De producerar för mycket energi när det blåser",
        choice2: "De låter när de producerar el",
        choice3: "De förstör panoraman",
        choice4: "De får marken att skaka",
        answer: "De låter när de producerar el"
    },
    {
        question: "Vilket av de nämnda kraftverken producerar mest energi i Sverige?",
        choice1: "Vatten",
        choice2: "Sol",
        choice3: "Vind",
        choice4: "Ingen av alternativen",
        answer: "Vatten"
    },
    {
        question: "Vilket av de nämnda kraftverken producerar den billigaste elen?",
        choice1: "Vatten",
        choice2: "Sol",
        choice3: "Vind",
        choice4: "Ingen av alternativen",
        answer: "Vatten"
    }
];