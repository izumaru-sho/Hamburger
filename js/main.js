$(

function asideOpen(){
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

$(function asideHeight() {
    if (window.matchMedia("(min-width: 1078px)").matches) {
        var h_body = $('body').height();
        var h_footer = $('footer').height() ;
        var h = h_body - h_footer ;
        $('.p-aside').css({"height": h + "px" }) ;
        $('.p-aside__contents').css({"height": h + "px" }) ;
    } 
  });

$(window).resize(function () {  
    if (window.matchMedia("(min-width: 1078px)").matches) {
        var h_body = $('body').height();
        var h_footer = $('footer').height() ;
        var h = h_body - h_footer ;
        $('.p-aside').css({"height": h + "px" }) ;
        $('.p-aside__contents').css({"height": h + "px" }) ;
    } 
}) ;

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
        $('.p-aside').css({"height": "" }) ;
        $('.p-aside__contents').css({"height": "" }) ;
    }
}) ;

