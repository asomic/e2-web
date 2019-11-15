( function( $ ) {

    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.the-menu-mobile').toggleClass('slide');
        $('html, body').toggleClass('block-scroll');
        $('.site-header').toggleClass('fixed');
    });

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
  
} )( jQuery );
  