$(function(){
    $('.design__slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="arrow arrow-rigth" src="images/arrow-rigth.svg" alt="">',
        responsive: [{
            breakpoint: 361,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
            }
        }]
    });
});