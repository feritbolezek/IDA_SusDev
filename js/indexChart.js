
// Using chartJs to create the cool chart in the index page (home page).
$(document).ready(function () {
    var ctx = document.getElementById('indexChart').getContext("2d"); // Getting the container for the chart.

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0); // Creating the stroke color which will be a linear gradient for the first graph.
gradientStroke.addColorStop(0, '#dddddd');
gradientStroke.addColorStop(1, '#eeeeee');

var gradientFill = ctx.createLinearGradient(0, 0, 0, 300); // Creating the fill color which will be a linear gradient for the first graph.
gradientFill.addColorStop(0, "rgba(142, 68, 173,0.6)");
gradientFill.addColorStop(1, "rgba(231, 76, 60,1.0)");

var gradientStrokeSec = ctx.createLinearGradient(500, 0, 100, 0); // Creating the stroke color which will be a linear gradient for the second graph.
gradientStrokeSec.addColorStop(0, '#ffffff');
gradientStrokeSec.addColorStop(1, '#ffffff');

var gradientFillSec = ctx.createLinearGradient(500, 0, 100, 0); // Creating the fill color which will be a linear gradient for the second graph.
gradientFillSec.addColorStop(0, "rgba(142, 68, 173,0.6)");
gradientFillSec.addColorStop(1, "rgba(26, 188, 156,0.6)");

var myChart = new Chart(ctx, { // Creating the actual chart.
    type: 'line', // It will be of a simple line type chart.
    data: { // Mashing in all data for the first graph here.
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"], // The labels at the bottom.
        datasets: [{
            label: "Data",
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke, // The colors
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 4,
            data: [100, 70, 90, 90, 90, 120, 120]
        },
        {
            label: "Data",
            borderColor: gradientStrokeSec,
            pointBorderColor: gradientStrokeSec,
            pointBackgroundColor: gradientStrokeSec,
            pointHoverBackgroundColor: gradientStrokeSec,
            pointHoverBorderColor: gradientStrokeSec,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            backgroundColor: gradientFillSec,
            borderWidth: 4,
            data: [100, 30, 150, 120, 140, 160, 180]
        }]
    },
    options: {
        legend: {
            position: "bottom"  // Legend shows the type of data being compared. It is placed at the bottom.
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",       // Setting vals for y axis.
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {        // Setting if grid lines should be shown.
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{       // Setting vals for x axis.
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});
});