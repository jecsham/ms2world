if (page <= 1)
    $('#page_nav').append('<li class="page-item disabled"><a class="page-link" href="#" tabindex="-1">Previous</a></li>')
else
    $('#page_nav').append(`<li class="page-item"><a class="page-link" href="/${pagename}/${filter}/?page=${page - 1}" tabindex="-1">Previous</a></li>`)

if (page <= totalPages && page >= 2)
    $('#page_nav').append(`<li class="page-item"><a class="page-link" href="/${pagename}/${filter}/?page=${page - 1}">${page - 1}</a></li>`)

$('#page_nav').append(`<li class="page-item active"><a class="page-link" href="/${pagename}/${filter}/?page=${page}">${page}</a></li>`)

if ((page + 1) <= totalPages)
    $('#page_nav').append(`<li class="page-item"><a class="page-link" href="/${pagename}/${filter}/?page=${page + 1}">${page + 1}</a></li>`)

if ((page + 2) <= totalPages)
    $('#page_nav').append(`<li class="page-item"><a class="page-link" href="/${pagename}/${filter}/?page=${page + 2}">${page + 2}</a></li>`)




if (page >= totalPages)
    $('#page_nav').append(`<li class="page-item disabled"><a class="page-link" href="#">Next</a></li>`)
else {
    $('#page_nav').append(`<li class="page-item disabled"><a class="page-link" href="#">...</a></li>`)
    $('#page_nav').append(`<li class="page-item"><a class="page-link" href="/${pagename}/${filter}/?page=${totalPages}">${totalPages}</a></li>`)
    $('#page_nav').append(`<li class="page-item"><a class="page-link" href="/${pagename}/${filter}/?page=${page + 1}">Next</a></li>`)
}

$(document).ready(() => {
    $('#selectFilter').val(filter)

    $("#selectFilter").change(function () {
        document.location.href = `/${pagename}/${this.value}`;
    });
})