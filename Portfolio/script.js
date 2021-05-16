/*jslint browser: true*/
/*global window*/
/*eslint-env browser*/
/*global $*/

$(document).ready(function () {

    $('#scrollToTop').on('click', scrollToTop);


    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    function hover(element) {
        if (element.attr('id') === "youtube-logo") {
            element.setAttribute('src', 'images/youtube%20-%20Copy.png');

            console.log(element.attr('id'));
        }
        console.log('no');
    }

    function unhover(element) {
        if (element.attr('id') == "youtube-logo") {
            element.setAttribute('src', 'images/youtube.png');
        }
    }


    // Wrap hero title letters in a span
    var textWrapper = document.querySelector('.hero-text-title .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
        .add({
        targets: '.hero-text-title .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i
    }).add({
        targets: '.hero-text-title',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 100000000
    });

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.hero-text-p');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
        .add({
        targets: '.hero-text-p .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 1500,
        delay: (el, i) => 1 * (i+1)
    }).add({
        targets: '.hero-text-p',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 104000000
    });
});