var container = document.getElementById("xpBar");
var bar = new ProgressBar.Line(container, {
strokeWidth: 4,
easing: 'easeInOut',
duration: 3000,
color: '#FFEA82', //  Main color of the bar
trailColor: '#eee', // Setting trail (The bar behind the fill)
trailWidth: 1,
svgStyle: {width: '100%', height: '100%'},
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
from: {color: '#FFEA82'},
to: {color: '#ED6A5A'}, //  Main color of the bar , we are chaing during animation.
step: (state, bar) => {
bar.setText(Math.round(bar.value() * 100) + ' %');
}
});

bar.animate(0.7);  // Animating up to the desired value.

$(".progressbar-text").css("font-family","'Poppins', sans-serif");