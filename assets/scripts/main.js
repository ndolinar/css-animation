$(document).ready(function () {
    if($('.star').length) {
        setTimeout(function(){
            $('.star').fadeIn(4000);
        },1500);
    }


    // page navigation, add mask
    $('.nav-btn').on('click', function () {
        $('.side-nav').addClass('side-nav-active');
        $('body').addClass('masked');
        $('.page-mask').addClass('mask-visible');
    });

    $('nav .logo').on('click', function (){
        $('.page-mask').removeClass('mask-visible');
        $('body').removeClass('masked');
        $('.side-nav').removeClass('side-nav-active');
    });

    $('.page-mask').on('click', function () {
        $(this).removeClass('mask-visible');
        $('body').removeClass('masked');
        $('.side-nav').removeClass('side-nav-active');
    });

    var parent, ink, d, x, y;
    $('.ripple-btn').mouseenter(function(e){
        parent = $(this).parent();
        //create .ink element if it doesn't exist
        if(parent.find(".ink").length == 0)
            parent.prepend("<span class='ink'></span>");

        ink = parent.find('.ink');

        ink.removeClass('press');

        //set size of .ink
        if(!ink.height() && !ink.width())
        {
            //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
            d = Math.max(parent.outerWidth(), parent.outerHeight());
            ink.css({height: d, width: d});
        }

        //get click coordinates
        //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
        x = e.pageX - parent.offset().left - ink.width()/2;
        y = e.pageY - parent.offset().top - ink.height()/2;

        //set the position and add class .animate
        ink.css({top: y+'px', left: x+'px'}).addClass('press');
    });

    $('.ripple-btn').on('click', function (e) {
        e.preventDefault();
    });

});