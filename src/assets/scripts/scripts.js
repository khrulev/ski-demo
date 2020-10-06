$(document).ready(function(){ 
    
    $('.header__burger').on('click',function(e){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');})
        
    $('.slider').slick(
        {arrows: false, dots: true, fade: true}
    );
})


