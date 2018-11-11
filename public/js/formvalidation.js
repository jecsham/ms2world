function checkForm(){
    var isValide = 0;
    $('input').each(function() {
        if(!$(this).val()){
            isValide += 1;
        }
    });
    $('textarea').each(function(){
        if(!simplemde.value()){
            isValide += 1;
        }
    })
    if(isValide === 0){
        return true;
    }else{
        return false;
    }
}