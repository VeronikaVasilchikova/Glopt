$(document).ready(function(){
    $('.clients__slider').slick({
        slidesToShow: 1,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>'
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1400) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function() {
        const _href = $(this).attr('href');
        $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
        return false;
    })
});