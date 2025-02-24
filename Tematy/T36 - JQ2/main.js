$(function() {
    $('.box h3').eq(0).addClass('active');
    $('.box p').eq(0).show();

    $('.box h3').on('click', function() {
        $(this).next('p').slideToggle('slow');
        $(this).siblings('h3').next('p:visible').slideUp('slow');
        $(this).toggleClass('active');
        $(this).siblings('h3').removeClass('active');
    });
});