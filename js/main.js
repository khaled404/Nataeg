$(window).load(function () {
    $(".loder").fadeOut(500,function () {
        $(this).remove();
        $("body").removeClass("over");
        $(".section-one .img-con").addClass("active");
    });
});

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
        if($(window).scrollTop() > $(".section-four").offset().top ){
            $(".section-four .img-con").addClass("active");
        }
        let five = $(".section-five").offset().top ;
        let fiveOf = five - 249;
        if($(window).scrollTop() > fiveOf ){
            $(".section-five .img-con").addClass("active");
        }
        let six = $(".section-six").offset().top ;
        let sixOf = six - 249;

        if($(window).scrollTop() > sixOf ){
            $(".section-six .img-con").addClass("active");
        }


        let seven = $(".section-seven").offset().top ;
        let sevenOf = seven - 249;

        if($(window).scrollTop() > sevenOf ){
            $(".section-seven .img-con").addClass("active");
        }

        if($(window).scrollTop() > $(".section-eight").offset().top ){
            $(".section-eight .img-con").addClass("active");
        }
        let eleven = $(".section-eleven").offset().top ;
        let elevenOf = eleven - 249;

        if($(window).scrollTop() > elevenOf ){
            $(".section-eleven").addClass("active");
        }


    });
    $(".nav-torger , .menu  a").on("click",function(){
        $(".nav-torger").toggleClass("active");
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
                    items:1
                },
                600:{
                    items:2
                },
                992:{
                    items:3
                },
            },
        });
    }

});