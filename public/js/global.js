// Header sticky
$(document).ready(() => {
    // tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // login btn
    $('.loginbtn').click( function() {
        var last_url = {
            used: false,
            path: document.location.pathname
        }
        Cookies.set('last_url', last_url)
        document.location.href = "/login"
    })

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
        $(this).find('.dropdown-menu').stop(true, true).delay(1000).fadeOut(100);
    });

    // timeago JS
    jQuery("time.timeago").timeago();

    // stickyJS - Header
    $("#header").sticky({
        topSpacing: 0,
        zIndex: 1030
    });
});