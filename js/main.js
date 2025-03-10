(function ($) {
    "use strict";

    // Navbar Toggle Behavior
    $(".navbar-toggler").on("click", function () {
        $("#mainNav").toggleClass("navbar-reduce");
    });

    // Preloader Removal
    $(window).on("load", function () {
        let preloader = $("#preloader");
        if (preloader.length) {
            preloader.delay(100).fadeOut("slow", function () {
                $(this).remove();
            });
        }
    });

    // Back to Top Button Behavior
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });

    $(".back-to-top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    // Scroll to Section Smoothly
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function (event) {
        let pathname = location.pathname.replace(/^\//, "");
        let hostname = location.hostname;
        if (pathname === this.pathname.replace(/^\//, "") && hostname === this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    { scrollTop: target.offset().top - $("nav").outerHeight() + 5 },
                    1000,
                    "easeInOutExpo"
                );
                event.preventDefault();
            }
        }
    });

    // Hide Navbar on Link Click (For Mobile)
    $(".js-scroll").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    // ScrollSpy Activation
    $("body").scrollspy({
        target: "#mainNav",
        offset: $("nav").outerHeight(),
    });

    // Navbar Appearance on Scroll
    $(window).on("scroll", function () {
        let scrollTop = $(window).scrollTop();
        let navbar = $(".navbar-expand-md");
        if (scrollTop > 50) {
            navbar.addClass("navbar-reduce").removeClass("navbar-trans");
        } else {
            navbar.addClass("navbar-trans").removeClass("navbar-reduce");
        }
    });

    // Text Animation (Typing Effect)
    if ($(".text-slider").length) {
        let typedStrings = $(".text-slider-items").text();
        new Typed(".text-slider", {
            strings: typedStrings.split(","),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30,
        });
    }

    // Testimonials Carousel
    $("#testimonial-mf").owlCarousel({
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: { 0: { items: 1 } },
    });

})(jQuery);
