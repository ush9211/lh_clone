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
        $('.header-background').stop().slideToggle(200);
        $('.d-sub-title-before').removeClass('d-sub-title-before-hover');
        $('.d-sub-title').find('a').removeClass('act').addClass('black-font');
        $('.d-sub-title').find('span').removeClass('act');
        $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .search-icon').toggleClass('black-font');
        $('.searchform, .btn-h-line').stop().toggleClass('black-border');
    });

    // console을 이용하여 scroll값을 확인하는 방법
    $(window).scroll(function(){
        console.log($(window).scrollTop());
    });

    // d-submenu
    $('.main-nav>li').hover(function(){
        $(this).find('.d-submenu-main').toggle();
    });

    // jquery로 .d-sub-title 앞에 .d-sub-title-before 라는 박스를 만들어 준 것
    $('.d-sub-title').prepend('<div class="d-sub-title-before"></div>');

    $('.d-sub-title').mouseenter(function(){
        $('.d-sub-title-before').removeClass('d-sub-title-before-hover');
        $('.d-sub-title').find('a').removeClass('act').addClass('black-font');
        $('.d-sub-title').find('span').removeClass('act');
        $(this).find('.d-sub-title-before').addClass('d-sub-title-before-hover');
        $(this).find('a').removeClass('black-font').addClass('act');
        $(this).find('span').addClass('act');
    });
});

