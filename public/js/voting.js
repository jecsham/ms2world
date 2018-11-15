$(document).ready(function () {
    $('.btnvote').click(function (event) {
        $('.btnvote').attr('disabled', 'disabled');
        var formData = {
            'type': $('.btnvote').attr('data-type'),
            'post': $('.btnvote').attr('data-post'),
            'postid': $('.btnvote').attr('data-postid'),
        };
        $.ajax({
            type: 'POST',
            url: '/vote',
            data: formData,
            dataType: 'json',
            encode: true,
            success: (resdata) => {
                var timer = setTimeout(() => {
                    $('.btnvote').removeAttr('disabled');
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
        $('.btnvote').attr('data-type', 'down').removeAttr('disabled').html('<span class="mdi mdi-thumb-down"></span>')
    } else {
        $('.btnvote').attr('data-type', 'up').removeAttr('disabled').html('<span class="mdi mdi-thumb-up"></span>')
    }
}