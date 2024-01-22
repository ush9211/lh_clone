$(function(){

    // gnb all 메뉴 열기
    $('.btn-list').click(function(){
        $('#gnb').show();
    });
    $('.closebox').click(function(){
        $('#gnb').hide();
    });

    // main -nav
    $('.main-nav').hover(function(){
        $('.header-background').slideToggle(200);
        $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .search-icon').toggleClass('black-font');
        $('.searchform, .btn-h-line').stop().toggleClass('black-border');
    });

    // d-submenu
    $('.main-nav>li').hover(function(){
        $(this).find('.d-submenu-main').toggle();
    });
});

