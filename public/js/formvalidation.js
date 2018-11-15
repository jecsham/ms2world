function checkForm() {
    var isValide = 0;
    $('input').each(function () {
        if (!$(this).val()) {
            isValide += 1;
        }
    });
    if ($('#content').length) {
        if (!simplemde.value()) {
            isValide += 1;
        }
    }

    if ($("#g-recaptcha-response").length) {
        if ($("#g-recaptcha-response").val() === undefined || $("#g-recaptcha-response").val() === '') {
            isValide += 1;
        }
    }

    if (isValide === 0) {
        return true;
    } else {
        return false;
    }
}