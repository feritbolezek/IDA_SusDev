
// This was created to extend animate.css so that i can receive a callback once an animation is complete
// and run some code once an animation has finished. This is mainly used for the small side bar that is visible
// when you read an article. If you scroll to the bottom of the page the sidebar will animate out to the left
// and then thanks to this code we can hide the sidebar temporarily/permanently once the animation has been completed.
$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = (function (el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t]; // Return that the animation is over!
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);

            if (typeof callback === 'function') callback();
        });

        return this;
    },
});