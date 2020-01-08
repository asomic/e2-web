( function( $ ) {

    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.the-menu-mobile').toggleClass('slide');
        $('html, body').toggleClass('block-scroll');
        $('.site-header').toggleClass('fixed');
    });

    // GoTo Links Navbar
    $("#desktop-menu #top-trigger").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#top").offset().top
        }, 1000);
        return false;
    });
    $("#desktop-menu #servicios-trigger").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#servicios-section").offset().top
        }, 1000);
        return false;
    });
    $("#desktop-menu #proyectos-trigger").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#proyectos-section").offset().top
        }, 1000);
        return false;
    });
    $("#desktop-menu #nosotros-trigger").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#nosotros-section").offset().top
        }, 1000);
        return false;
    });

    $("#mobile-menu #m-servicios-trigger").click(function() {
        $('.hamburger').toggleClass('is-active');
        $('.the-menu-mobile').toggleClass('slide');
        $('html, body').toggleClass('block-scroll');
        $('.site-header').toggleClass('fixed')
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#servicios-section").offset().top
        }, 1000);
        return false;
    });
    $("#mobile-menu #m-top-trigger").click(function() {
        $('.hamburger').toggleClass('is-active');
        $('.the-menu-mobile').toggleClass('slide');
        $('html, body').toggleClass('block-scroll');
        $('.site-header').toggleClass('fixed')
        // $([document.documentElement, document.body]).animate({
        //     scrollTop: $("#servicios-section").offset().top
        // }, 1000);
        return false;
    });
    $("#mobile-menu #m-proyectos-trigger").click(function() {
        $('.hamburger').toggleClass('is-active');
        $('.the-menu-mobile').toggleClass('slide');
        $('html, body').toggleClass('block-scroll');
        $('.site-header').toggleClass('fixed')
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#proyectos-section").offset().top
        }, 1000);
        return false;
    });
    $("#mobile-menu #m-nosotros-trigger").click(function() {
        $('.hamburger').toggleClass('is-active');
        $('.the-menu-mobile').toggleClass('slide');
        $('html, body').toggleClass('block-scroll');
        $('.site-header').toggleClass('fixed')
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#nosotros-section").offset().top
        }, 1000);
        return false;
    });


    // Hero Cambio imágenes
    // $(document).ready(function(){
    //     setTimeout(function(){
    //         $('.hero').addClass('h-img-1');
    //     }, 3000);
    // });

    // Modales Servicios
    $('#serv-1').click(function(){
        $('.modals').toggleClass('add-visibility');
        $('.serv-1').toggleClass('show-modal');
        return false;
    });

    $('#serv-2').click(function(){
        $('.modals').toggleClass('add-visibility');
        $('.serv-2').toggleClass('show-modal');
        return false;
    });

    $('#serv-3').click(function(){
        $('.modals').toggleClass('add-visibility');
        $('.serv-3').toggleClass('show-modal');
        return false;
    });

    $('#serv-4').click(function(){
        $('.modals').toggleClass('add-visibility');
        $('.serv-4').toggleClass('show-modal');
        return false;
    });

    $('.modal-button').click(function(){
        $('.modals').toggleClass('add-visibility');
        $('.serv-1, .serv-2, .serv-3, .serv-4').removeClass('show-modal');
    });

    // Fancybox
    $('[data-fancybox="gallery-1"]').fancybox({
        // Options will go here
        arrows: true,
        buttons: [
            "zoom",
            "slideShow",
            "thumbs",
            "close"
        ],
    });

    $('[data-fancybox="gallery-2"]').fancybox({
        // Options will go here
        arrows: true,
         buttons: [
            "zoom",
            "slideShow",
            "thumbs",
            "close"
        ],
    });

    $(".goToUp").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#top").offset().top
        }, 1000);
        return false;
    });
  
} )( jQuery );
  