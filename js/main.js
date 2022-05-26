$(function asideOpen(){
    var button = $('.p-menu__button') ;
    $(button).on('click',function(){ 
        $('.p-aside').toggleClass('open'); 
        $('.p-aside').removeClass('close') ; 
        $('.p-aside__bg').fadeIn(300) ;
    });
});

$(function asideClose(){
    $('.p-hamburger__button').on('click',function(){
        $('.p-aside').toggleClass('close') ;
        $('.p-aside').removeClass('open') ;
        $('.p-aside__bg').fadeOut(300) ;
    });
});


$(function(){
    var pos;
    var button = $('.p-menu__button') ;
    var button2 = $('.p-aside__bg') ;
    $(button).on('click',function(){
        pos = $(window).scrollTop();
        $('body').css({
            'position':'fixed',
            'top': -pos,
            'overflow-x': 'hidden'
        }); 
    });
    $('.p-hamburger__button').on('click',function(){
        $('body').css({
            'position':'',
            'top': '',
            'overflow-x' : ''   
        });
        window.scrollTo(0, pos);
    });
});



$(window).resize(function () {  
    if($('.p-aside').hasClass('open')){
        $('.p-aside').removeClass('open') ; 
        $('.p-aside__bg').fadeOut(300) ;
    }
    if($('.p-aside').hasClass('close')){
        $('.p-aside').removeClass('close') ; 
    }
    if(window.matchMedia("(max-width: 1078px)").matches){
        $('body').css({
            'position':'',
            'top': '',
            'overflow-x' : ''   
        });
    }
}) ;

