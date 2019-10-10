$(function(){
    $(window).on("scroll", function(){
        $(window).scrollTop()>12?
        $(".main-nav").addClass("scrolled")
        :$(".main-nav").removeClass("scrolled");
    });
});