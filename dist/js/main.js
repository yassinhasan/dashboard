$(function(){
    $('.toogle-sidebar').on('click',function(){
        $(this).toggleClass('fa-arrow-left  fa-arrow-right');
        $('.side-bar').toggleClass('no-sidebar')
        $('.content-area').toggleClass('full-width')
    })
})