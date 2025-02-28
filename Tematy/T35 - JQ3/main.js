$(document).ready(function() {
    $('#div4 img').click(function() {
        $(this).appendTo('footer').css({
            'width': '100%',
            'height': 'auto'
        });
        $('#div3').css('grid-column', 'span 10');
    });
});