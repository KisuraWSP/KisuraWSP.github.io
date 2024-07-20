document.getElementById('showElements').addEventListener('click', function(event) {
    event.preventDefault();
    var elements = document.querySelectorAll('#hiddenElements .element');
    document.getElementById('hiddenElements').style.display = 'flex';
    elements.forEach(function(element, index) {
        setTimeout(function() {
            element.classList.add('show');
        }, index * 100);
    });
});

function about_me() {
    $('html, body').animate({
        scrollTop: $("#about_me").offset().top
    }, 1000);
}

function projects() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
}

function services() {
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 1000);
}

$(document).ready(function() {
    $("button[onclick='about_me()']").click(about_me);
    $("button[onclick='projects()']").click(projects);
    $("button[onclick='services()']").click(services);
});