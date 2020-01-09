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

    easy_background(".hero", 
        {
            slide: [
                "assets/images/servicios/perforacion/perforacion_1.jpg",
                "assets/images/servicios/cargio/cargio_2.jpg"
            ],

            delay: [
                4000, 4000
            ]
        }
    );

    easy_background(".serv-1 .img", 
        {
            slide: [
                "assets/images/servicios/cargio/cargio_1.jpg",
                "assets/images/servicios/cargio/cargio_2.jpg",
                "assets/images/servicios/cargio/cargio_3.jpg"
            ],

            delay: [
                3000, 3000, 3000
            ]
        }
    );

    easy_background(".serv-2 .img", 
        {
            slide: [
                "assets/images/servicios/admin_polvorines/ad_polvorines_1.jpg",
                "assets/images/servicios/admin_polvorines/ad_polvorines_2.jpg",
                "assets/images/servicios/admin_polvorines/ad_polvorines_3.jpg",
                "assets/images/servicios/admin_polvorines/ad_polvorines_4.jpg"
            ],

            delay: [
                3000, 3000, 3000, 3000
            ]
        }
    );

    easy_background(".serv-3 .img", 
        {
            slide: [
                "assets/images/servicios/perforacion/perforacion_1.jpg",
                "assets/images/servicios/perforacion/perforacion_2.jpg",
                "assets/images/servicios/perforacion/perforacion_3.jpg",
                "assets/images/servicios/perforacion/perforacion_4.jpg"
            ],

            delay: [
                3000, 3000, 3000, 3000
            ]
        }
    );

    easy_background(".serv-4 .img", 
        {
            slide: [
                "assets/images/servicios/camion_fabrica/camion_fabrica_1.jpg",
                "assets/images/servicios/camion_fabrica/camion_fabrica_2.jpg",
                "assets/images/servicios/camion_fabrica/camion_fabrica_3.jpg"
            ],

            delay: [
                3000
            ]
        }
    );

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

    $('[data-fancybox="gallery-3"]').fancybox({
        // Options will go here
        arrows: true,
         buttons: [
            "zoom",
            "slideShow",
            "thumbs",
            "close"
        ],
    });

    $('[data-fancybox="gallery-4"]').fancybox({
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
  