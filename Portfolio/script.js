/*jslint browser: true*/
/*global window*/
/*eslint-env browser*/
/*global $*/

$(document).ready(function () {

    $('#scrollToTop').on('click', scrollToTop);
    
    
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
});