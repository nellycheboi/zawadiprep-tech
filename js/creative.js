/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
   "use strict"; // Start of use strict
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery);


$(function() {
    window.owl = $('.owl-carousel');
    // var owlCarouselTimeout = 1000;
    window.owl.owlCarousel({
        nav: true,
        navText: [
            '<i class="fa fa-chevron-left "></i>',
            '<i class="fa fa-chevron-right"></i>',
        ],
        dots: false,
        items:1,
        loop:true,
        autoplay:true,
        video:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        center: true,
        lazyLoad: true,
        responsive:true,
        onInitialized: function(){ reset_video_size(); },
        onResized: function(){ reset_video_size(); },
    });
        window-owl.on('mouseleave',function(){
            window-owl.trigger('stop.owl.autoplay'); //this is main line to fix it
            window-owl.trigger('play.owl.autoplay', [1000]);
    });

});
function reset_video_size(video_width){
  //better use jquery selectors: owl.items() and $(owl.items()) give problems, don't know why
  var items = $('.owl-item:not([data-video])');
  var videos = $('.owl-video-wrapper');
  var v_height = 0;

  //user-defined width ELSE, width from inline css (when owl.autoWidth == false),
  //ELSE, computed innerwidth of the first element.
  var v_width = (video_width) ? video_width : ((items.css('width') != 'auto') ? items.css('width') : items.innerWidth());

  items.each(function(){
    var h = $(this).innerHeight();
    if(h > v_height) v_height = h;
  });


  videos.css({ 'height':v_height, 'width':v_width });
};
