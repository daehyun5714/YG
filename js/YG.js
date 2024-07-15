$(document).ready(function () {





    if ($(window).scrollTop() > 0) {
        $("header").css("top", "-72px");
    } else {
        $("header").css("top", "0");
    }



    let lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function (event) {
        let nowscroll = $(this).scrollTop();

        if (Math.abs(lastScrollTop - nowscroll) <= delta) return;
        if (nowscroll > lastScrollTop && lastScrollTop > 0) {
            $("header").css("top", "-72px");
        } else {
            $("header").css("top", "0px");
        }
        lastScrollTop = nowscroll;

        if (nowscroll > 20) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    })

    $('.gnb').mouseenter(function () {
        $('.header_back').addClass('active');
        $('.gnb a').addClass('active');
        $('.gnb_sub').addClass('active');
        $('.logo').addClass('active');
        $('.language').addClass('active');
    })
    $('header').mouseleave(function () {
        $('.header_back').removeClass('active');
        $('.gnb a').removeClass('active');
        $('.gnb_sub').removeClass('active');
        $('.logo').removeClass('active');
        $('.language').removeClass('active');
    })


    $('.languagea').click(function () {
        if ($('.language_sub').hasClass('active')) {
            $('.language_sub').removeClass('active')
        } else {
            $('.language_sub').addClass('active')
        }
        if ($('.languagea').hasClass('active')) {
            $('.languagea').removeClass('active')
        } else {
            $('.languagea').addClass('active')
        }
    })

    // header

    const swiper = new Swiper('.first', {
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 2000,

        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })

    const swiper2 = new Swiper('.second', {
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 2000,
    })

    const swiper3 = new Swiper('.moSwiper', {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 2000,
    })


    // swiper


    $('.investor-wrap').mouseenter(function () {
        $('.about-bg img:nth-child(2)').addClass('active');
    })
    $('.recruit-wrap').mouseenter(function () {
        $('.about-bg img:nth-child(3)').addClass('active');
    })
    $('.headoffice-wrap').mouseenter(function () {
        $('.about-bg img:nth-child(4)').addClass('active');
    })
    $('.investor-wrap').mouseleave(function () {
        $('.about-bg img:nth-child(2)').removeClass('active');
    })
    $('.recruit-wrap').mouseleave(function () {
        $('.about-bg img:nth-child(3)').removeClass('active');
    })
    $('.headoffice-wrap').mouseleave(function () {
        $('.about-bg img:nth-child(4)').removeClass('active');
    })


    var burger = $('.menu-trigger');

    burger.each(function (index) {
        var $this = $(this);

        $this.on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active-' + (index + 1));
        })
    });


    $('.menu-trigger').click(function () {
        if ($('.menusubback').hasClass('right')) {
            $('.menusubback').removeClass('right');
        } else {
            $('.menusubback').addClass('right');
        }
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    })




















    AOS.init();

}) // 