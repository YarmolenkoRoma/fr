$('.header__menu-img').on('click',function(){
    setTimeout(function(){
    $('.popup__inner').addClass('active');
    },150)
},);

$('.popup__end').on('click',function(){
    setTimeout(function(){
    $('.popup__inner').removeClass('active');
    },150)
},);