// animate smooth scroll

$('#take-peak').on('click', function(){
    const section = $('#section').position().top;

    $('html, body').animate({
        scrollTop: section
    }, 600);
});