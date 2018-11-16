// SkillViewer v1
$(document).ready(() => {

    $("#cmLauncher").click(() => renderCanvas());

    $("[name='btn']").remove()
    $("[name='-btn']").remove()
    $("#resetbuildbtn").remove()
    $("#buildtype").text(class_type)
    $('#as').text('')

    var renderedCanvas;

    $('.level_cell, .level_cell_sp').addClass('bg-light');
    loadBuild();

})

function renderCanvas() {
    html2canvas(document.querySelector("#render-skill-pane"), { width: 672, onclone: canvasPNG => editElements(canvasPNG) }).then(canvas => {
        $('#renderedCanvas').replaceWith(canvas);
    });
}

function loadBuild() {
    $.each(build, (index, value) => {
        $('#max-points').text(build.max_points);
        $('#max-points-cap').text(buildTemplate.max_points);
        $('#point-' + index).text(" " + build[index].min);
        $('#point-max-' + index).text(build[index].max + " ");
        if (build[index].locked) lockSkill(index);
    });
}

function lockSkill(skillid) {
    $('#lock-' + skillid).addClass('locked');
}

function editElements(canvasPNG) {
    $($(canvasPNG).find('#as')).show().text('MS2WORLD.NET').removeClass('text-muted').addClass('font-weight-bold ml-3');

}
