var current_page = "consult.html"

function load_content(){
    $("#content").load(current_page)
}

$(document).ready(function(){
    load_content()
})