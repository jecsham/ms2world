$(document).ready(function () {
    $('#delete-guide').submit(function (event) {
        $('#delbtn').attr('disabled', 'disabled');
        $('#cancelbtn').attr('disabled', 'disabled');
        $('#status').html('<div class="alert alert-success">Please wait...</div>');
        var sendData = {
            'postid': $('input[name=postid]').val(),
            'postsid': $('input[name=postsid]').val()
        };
        $.ajax({
            type: 'POST',
            url: '/delete/guide',
            data: sendData,
            dataType: 'json',
            encode: true,
            success: () => {
                $('#status').html('<p class="alert alert-success"><strong>Deleted!</strong> Redirecting to /guides ... 😀<p>');
                var timer = setTimeout(() => {
                    window.location = '/guides';
                }, 3000);
            },
            error: (resdata) => {
                $('#status').html('<div class="alert alert-danger" role="alert"><strong>Error:</strong> '+resdata.responseJSON.error+'</div>');
            },
        });
        event.preventDefault();
    });
});
