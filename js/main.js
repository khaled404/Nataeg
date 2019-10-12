$(function(){
    $(window).on("scroll", function(){
        $(window).scrollTop()>12?
        $(".main-nav").addClass("scrolled")
        :$(".main-nav").removeClass("scrolled");
        if(window.innerWidth < 992){
            $(window).scrollTop()>12?
            $(".nav-torger").addClass("scrolled")
            :$(".nav-torger").removeClass("scrolled");
        }

    });
    $(".nav-torger").on("click",function(){
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
        $("body").toggleClass("over");

    });
    if($(window).width() <= 991){
        $(".section-nine .content ").addClass("owl-carousel owl-theme");
        $(".section-ten .part-con ").addClass("owl-carousel owl-theme");
        $('.section-nine .owl-carousel ').owlCarousel({
            autoplay: true,
            rtl:true,
            loop:true,
            items: 5,
            dots: true,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                992:{
                    items:3
                },
            },
        });
        $('.section-ten .owl-carousel').owlCarousel({
            autoplay: true,
            rtl:true,
            loop:true,
            items: 5,
            dots: true,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                992:{
                    items:3
                },
            },
        });
    }

});