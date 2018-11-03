// Header sticky
$(document).ready(function () {
    $('#loginbtn').click( event => document.location.href = event.target.getAttribute('data-url'))
    if(!Cookies.get('cookies-consent')){
        $('#cookies-alert').addClass('show')
        $('#cookies-alert').on('closed.bs.alert', () =>{
            Cookies.set('cookies-consent', 'true', {expires: 365})
        })
    }
    jQuery("time.timeago").timeago();
    $("#header").sticky({
        topSpacing: 0,
        zIndex: 1030
    });
});