var container = document.getElementById("xpBar");
var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 3000,
    color: '#16a085', //  Main color of the bar
    trailColor: '#eee', // Setting trail (The bar behind the fill)
    trailWidth: 1,
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
        color: '#FFEA82'
    },
    to: {
        color: '#ED6A5A'
    }, //  Main color of the bar , we are chaing during animation.
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});

bar.animate(0.7); // Animating up to the desired value.

// $(".progressbar-text").css("font-family", "'Poppins', sans-serif");


// And from here on, everything is the same. I continue to add more bars for every field. Could be automatized
// but not this time. Not enough time for that.

var containerOne = document.getElementById("progressOne");

var barOne = new ProgressBar.Circle(containerOne, {
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
        color: '#e74c3c',
        width: 1
    },
    to: {
        color: '#e74c3c',
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
barOne.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
barOne.text.style.fontSize = '2rem';

barOne.animate(0.34); // Number from 0.0 to 1.0





var containerTwo = document.getElementById("progressTwo");

var barTwo = new ProgressBar.Circle(containerTwo, {
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
barTwo.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
barTwo.text.style.fontSize = '2rem';

barTwo.animate(0.68); // Number from 0.0 to 1.0
// 6 question, 100/6 = 17       4*17 = 68    68 / 100 = 0.68




var containerThree = document.getElementById("progressThree");

var barThree = new ProgressBar.Circle(containerThree, {
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
barThree.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
barThree.text.style.fontSize = '2rem';

barThree.animate(0.34); // Number from 0.0 to 1.0





var containerFour = document.getElementById("progressFour");

var barFour = new ProgressBar.Circle(containerFour, {
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
barFour.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
barFour.text.style.fontSize = '2rem';

barFour.animate(0.85); // Number from 0.0 to 1.0