// Header sticky
$(document).ready(() => {
    // tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // login btn
    $('#loginbtn').click(() => document.location.href = "/login")

    // consent cookie
    if (!Cookies.get('cookies-consent')) {
        $('#cookies-alert').addClass('show')
        $('#cookies-alert').on('closed.bs.alert', () => {
            Cookies.set('cookies-consent', 'true', { expires: 365 })
        })
    } else $('#cookie-notice').hide();

    // hover dropdowns
    $('.btn-group').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn(100);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut(100);
    });

    // timeago JS
    jQuery("time.timeago").timeago();

    // stickyJS - Header
    $("#header").sticky({
        topSpacing: 0,
        zIndex: 1030
    });
});