$(function(){
    $('.toogle-sidebar').on('click',function(){
        $(this).toggleClass('fa-arrow-left  fa-arrow-right');
        $('.side-bar').toggleClass('no-sidebar')
        $('.content-area').toggleClass('full-width')
    });
    $('.links-area > li >  a').on('click',function(){
        $(this).find($('i')).toggleClass('fa-angle-right  fa-angle-down');
        $(this).next($('.child-links')).slideToggle(300)
    });

})