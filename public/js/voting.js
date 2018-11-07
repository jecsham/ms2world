$(document).ready(function () {
    $('.btnvote').click(function (event) {
        $('.btnvote').attr('disabled', 'disabled');
        // $('#status').html('<p class="text-success">Please wait...<p>');
        var formData = {
            'type': $('.btnvote').attr('data-type'),
            'post': $('.btnvote').attr('data-post'),
            'postid': $('.btnvote').attr('data-postid'),
        };
        console.log(formData)
        $.ajax({
            type: 'POST',
            url: '/vote',
            data: formData,
            dataType: 'json',
            encode: true,
            success: (resdata) => {
                console.log(resdata)
                // $('#status').html('<div class="alert alert-success" role="alert"><strong>Submited!</strong> Redirecting to your new <a href="/guide/' + resdata.id + '">post</>... 😀</div>');
                var timer = setTimeout(() => {
                    $('.btnvote').attr('disabled', 'false');
                    changueButtonStyle()
                }, 1000);
            },
            error: (resdata) => {
                $('#status').html('<div class="alert alert-danger" role="alert"><strong>Error:</strong> ' + resdata.responseJSON.error + '</div>');
            },
        });
        event.preventDefault();
    });
});

function changueButtonStyle() {
    var btnvote = $('.btnvote').attr('data-type')
    if (btnvote === 'up') {
        $('.btnvote').removeClass('btn-success').addClass('btn-danger').data('type', 'down').removeAttr('disabled').html('<span class="mdi mdi-thumb-down"></span>')
    } else{
        $('.btnvote').removeClass('btn-danger').addClass('btn-success').data('type', 'up').removeAttr('disabled').html('<span class="mdi mdi-thumb-up"></span>')
    }
}