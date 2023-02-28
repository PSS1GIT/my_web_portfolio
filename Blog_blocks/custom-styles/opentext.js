var halfText = $('.opentext-20').innerHeight() / 2,
    textHeight = $('.opentext-20').innerHeight();

$('.opentext-20').css('height', $('.opentext-20').innerHeight() / 2);

$('.show-hide-20').click(function() {
    if( $('.opentext-20').innerHeight() == halfText ) {
        $('.opentext-20').animate({ height: textHeight }, 500);
        $(this).text('Згорнути <<<');
    } else {
        $('.opentext-20').animate({ height: halfText }, 500);
        $(this).text('Розгорнути читати далі >>>');
    }
});