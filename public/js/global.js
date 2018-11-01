// Header sticky
$(document).ready(function () {
    $('#loginbtn').click( event => document.location.href = event.target.getAttribute('data-url'))
    jQuery("time.timeago").timeago();
    $("#header").sticky({
        topSpacing: 0,
        zIndex: 1030
    });
});