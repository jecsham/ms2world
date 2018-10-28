// Header sticky
$(document).ready(function () {
    jQuery("time.timeago").timeago();
    $("#header").sticky({
        topSpacing: 0,
        zIndex: 1030
    });
});