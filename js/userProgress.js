
var currXp = window.localStorage.getItem("xp"); // Receive all data from localStorage.
var livsmedelScore = window.localStorage.getItem("livsmedel"); // Receive all data from localStorage.
var transportScore = window.localStorage.getItem("transport"); // Receive all data from localStorage.
var atervinningScore = window.localStorage.getItem("atervinning"); // Receive all data from localStorage.
var elproduktionScore = window.localStorage.getItem("elproduktion"); // Receive all data from localStorage.



var container = document.getElementById("xpBar"); // Get the xpBar element
var xpbar = new ProgressBar.Line(container, { // Create a new progressBar of type line.
    strokeWidth: 4,
    easing: 'easeInOut', // The style of animation. Will ease in and then ease out.
    duration: 3000, // Duration of transformation.
    color: '#16a085', //  Main color of the bar
    trailColor: '#eee', // Setting trail (The bar behind the fill)
    trailWidth: 1, // Set width of trail
    svgStyle: {
        width: '100%',
        height: '100%'
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#999',
            position: 'absolute',
            right: '16px',
            top: '38px', // Setting top to 24px + 16px (The extra 16px comes from the xpBar div having margin on 16px)
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    from: {
        color: '#FFEA82' // Will animate from this color.
    },
    to: {
        color: '#ED6A5A' // To this color.
    }, //  Main color of the bar , we are chaing during animation.
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %'); // Will set the text underneath the progressbar to this text. Which based on the current value of the progressbar.
    }
});

if (currXp != null) {
    $("#xpAmount").html(currXp + "/3000"); // Setting current xp of total, the total is hardcoded, and will not be implemented as a feature.
    xpbar.animate(((100/3000) * currXp) / 100); // Updating the bar in userProgress.js
} else {
    $("#xpAmount").html("0/3000");
    xpbar.animate(0.0001); // If we haven't played before, we still animate the bar so it's barely visible.
}

// $(".progressbar-text").css("font-family", "'Poppins', sans-serif");


// And from here on, everything is the same. I continue to add more bars for every field. Could be automatized
// but not this time. Not enough time for that.

var containerOne = document.getElementById("progressOne"); // Get the element which will be the container for the progress circle.

var livsmedelBar = new ProgressBar.Circle(containerOne, { // Create a progressbar of type Circle.
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    svgStyle: {
        width: '50%',
        height: '50%'
    },
    easing: 'easeInOut',
    duration: 5000,
    text: {
        autoStyleContainer: false,
    },
    from: {
        color: '#e74c3c', // From this color.
        width: 1
    },
    to: {
        color: '#e74c3c', // To this color.
        width: 3
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color); // Set attributes for the circle, setting stroke here.
        circle.path.setAttribute('stroke-width', state.width); // And width here.

        var value = Math.round(circle.value() * 6); // The value of the bar (progress).
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + "/6"); // Based on the value of the circle set the text.
        }

    }
});
livsmedelBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif'; // Set font of the text.
livsmedelBar.text.style.fontSize = '2rem';

// 6 question, 100/6 = 17    4*17 = 68    68 / 100 = 0.68
if (livsmedelScore != null) {
    livsmedelBar.animate(((100/6) * livsmedelScore) / 100); // Updating the bar in userProgress.js
} else {
    livsmedelBar.animate(0.0001); // If we haven't played before, we still animate the bar so it's barely visible.
}



var containerTwo = document.getElementById("progressTwo"); // Get element.

var transportBar = new ProgressBar.Circle(containerTwo, { // Create circle progressbar etc...
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    svgStyle: {
        width: '50%',
        height: '50%'
    },
    easing: 'easeInOut',
    duration: 5000,
    text: {
        autoStyleContainer: false,
    },
    from: {
        color: '#e67e22',
        width: 1
    },
    to: {
        color: '#e67e22',
        width: 3
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 6);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + "/6");
        }

    }
});
transportBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
transportBar.text.style.fontSize = '2rem';


if (transportScore != null) {
    transportBar.animate(((100/6) * transportScore) / 100); // Updating the bar in userProgress.js
} else {
    transportBar.animate(0.0001); // If we haven't played before, we still animate the bar so it's barely visible.
}



var containerThree = document.getElementById("progressThree");

var atervinningBar = new ProgressBar.Circle(containerThree, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    svgStyle: {
        width: '50%',
        height: '50%'
    },
    easing: 'easeInOut',
    duration: 5000,
    text: {
        autoStyleContainer: false,
    },
    from: {
        color: '#2ecc71',
        width: 1
    },
    to: {
        color: '#2ecc71',
        width: 3
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 6);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + "/6");
        }

    }
});
atervinningBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
atervinningBar.text.style.fontSize = '2rem';

if (atervinningScore != null) {
    atervinningBar.animate(((100/6) * atervinningScore) / 100); // Updating the bar in userProgress.js
} else {
    atervinningBar.animate(0.0001); // If we haven't played before, we still animate the bar so it's barely visible.
}


var containerFour = document.getElementById("progressFour");

var elproduktionBar = new ProgressBar.Circle(containerFour, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    svgStyle: {
        width: '50%',
        height: '50%'
    },
    easing: 'easeInOut',
    duration: 5000,
    text: {
        autoStyleContainer: false,
    },
    from: {
        color: '#9b59b6',
        width: 1
    },
    to: {
        color: '#9b59b6',
        width: 3
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 6);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + "/6");
        }

    }
});
elproduktionBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
elproduktionBar.text.style.fontSize = '2rem';

if (elproduktionScore != null) {
    elproduktionBar.animate(((100/6) * elproduktionScore) / 100); // Updating the bar in userProgress.js
} else {
    elproduktionBar.animate(0.0001); // If we haven't played before, we still animate the bar so it's barely visible.
}