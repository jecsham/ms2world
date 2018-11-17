// SkillBuilder v1
var build;
var no_count = 0;

if (editMode) {
    if (Cookies.get('ms2-build-' + class_name + '-' + buildid))
        build = JSON.parse(Cookies.get('ms2-build-' + class_name + '-' + buildid))
    else
        build = buildToEdit
} else {
    if (Cookies.get('ms2-build-' + class_name))
        build = JSON.parse(Cookies.get('ms2-build-' + class_name))
    else
        build = JSON.parse(JSON.stringify(buildTemplate))
}


$("[name='btn']").click(event => addPoints(event.target.getAttribute('data-skillid')));
$("[name='typeRadio']").click(event => $('#buildtype').text(event.target.getAttribute('value')));
$("[name='-btn']").click(event => removePoints(event.target.getAttribute('data-skillid')));
$("#resetbuildbtn").click(() => resetBuild());
$("#cmLauncher").click(() => renderCanvas());

var renderedCanvas;
$(document).ready(() => {
    noCount();
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
    toggleButtons();
    saveInCookie();
}

function addPoints(skillid) {
    if (build[skillid].min < buildTemplate[skillid].max && build.max_points > 0) {
        build[skillid].min++;
        updateMaxPoints();
        pointsAction(skillid);
    }
}

function removePoints(skillid) {
    if (build[skillid].min > buildTemplate[skillid].min && build.max_points <= buildTemplate.max_points) {
        build[skillid].min--;
        updateMaxPoints();
        pointsAction(skillid)
    }
}

function checkLocks(skillid) {
    if (build[skillid].unlockAt) {
        $.each(build[skillid].unlockAt, (index, value) => {
            if (build[index].min >= value) {
            } else if (Math.abs(build[index].min - value) <= build.max_points) {
                updateMaxPoints()
                build[index].min = value;
                unlockSkill(index);
            }
        });
    }
}

function checkLocksAll() {
    $.each(build, (index, value) => {
        if (build[index].unlockAt) {
            var i = 0;
            var check = 0;
            $.each(build[index].unlockAt, (subindex, value) => {
                if (build[subindex].min >= value) {
                    i++;
                    check++;
                } else {
                    check--;
                }
            });
            if (i === check) unlockSkill(index)
            else lockSkill(index)
        }
    })
}

function lockSkill(skillid) {
    build[skillid].locked = true;
    updateMaxPoints();
    build[skillid].min = 0;
    $('#lock-' + skillid).addClass('locked');
}

function unlockSkill(skillid) {
    build[skillid].locked = false;
    $('#lock-' + skillid).removeClass('locked');
}

function updateMaxPoints() {
    let i = -no_count;
    $.each(build, (index, value) => {
        if (build[index].min) {
            i += build[index].min
        }
    })
    build.max_points = buildTemplate.max_points - i;
    $('#max-points').text(build.max_points);
}

function pointsAction(skillid) {
    checkLocks(skillid);
    checkLocksAll();
    loadBuild();
}

function toggleButtons() {
    $.each(build, (index, value) => {
        if (build[index].min === buildTemplate[index].min && build[index].min === buildTemplate[index].max) {
            $('button[name="btn"][data-skillid="' + index + '"]').attr("disabled", "disabled");
            $('button[name="-btn"][data-skillid="' + index + '"]').attr("disabled", "disabled");
        } else if (build[index].min === buildTemplate[index].min) {
            $('button[name="btn"][data-skillid="' + index + '"]').removeAttr("disabled");
            $('button[name="-btn"][data-skillid="' + index + '"]').attr("disabled", "disabled");
        } else if (build[index].min === buildTemplate[index].max) {
            $('button[name="-btn"][data-skillid="' + index + '"]').removeAttr("disabled");
            $('button[name="btn"][data-skillid="' + index + '"]').attr("disabled", "disabled");
        } else {
            $('button[name="-btn"][data-skillid="' + index + '"]').removeAttr("disabled");
            $('button[name="btn"][data-skillid="' + index + '"]').removeAttr("disabled");
        }
        if (build[index].unlockAt) {
            var sum = 0;
            $.each(build[index].unlockAt, (subindex, value) => {
                sum += value;
            })
            if (sum > (build.max_points - 1) && build[index].locked === true) {
                $('button[name="btn"][data-skillid="' + index + '"]').attr("disabled", "disabled");
            }
        }
    })
    if (build.max_points === 0) {
        $('[name="btn"]').attr("disabled", "disabled");
    }

}

function removeCookie(){
    if (editMode)
        Cookies.remove('ms2-build-' + class_name + '-' + buildid);
    else
        Cookies.remove("ms2-build-" + class_name);
}

function resetBuild() {
    build = JSON.parse(JSON.stringify(buildTemplate))
    loadBuild()
}

function saveInCookie() {
    if (editMode)
        Cookies.set('ms2-build-' + class_name + '-' + buildid, JSON.stringify(build), { expires: 1 });
    else
        Cookies.set("ms2-build-" + class_name, JSON.stringify(build), { expires: 1 });
}

function editElements(canvasPNG) {
    $($(canvasPNG).find('#resetbuildbtn')).hide();
    $($(canvasPNG).find('.skill_btn')).hide();
    $($(canvasPNG).find('#as')).text('MS2WORLD.NET').removeClass('text-muted').addClass('font-weight-bold ml-3');

}

function noCount() {
    let i = 0;
    $.each(buildTemplate, (index, value) => {
        if (buildTemplate[index].min) {
            i += buildTemplate[index].min
        }
    })
    no_count = i;
}
