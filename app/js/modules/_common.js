define(['jquery', 'fastclick','owl', '_nav'], function($, FastClick, owl, _nav) {

    var $win, $doc, $body, carousel;

    return {
        init: function($w, $d) {
            $win = $w;
            $doc = $d;
            $body = $('body');
            _nav.init($win, $doc); // initialize menu
            FastClick.attach($body[0]); // faster response times for device clicks

            // Disable overscroll / viewport moving on everything but scrollable divs
            $body.on('touchmove', function (e) {
                if ( $body.hasClass('is-active') ) e.preventDefault();
            });

            $(window).resize(function() {
                console.log('hello');
                if(this.resizeTO) {
                    clearTimeout(this.resizeTO);
                }
                this.resizeTO = setTimeout(function() {
                    $(this).trigger('resizeEnd');
                }, 200);
            });

            $(document).ready(function(){
              $(".btn2").click(function(){
                $(".slide").slideDown(1000);
                $(this).hide();
              });

              $('a[href=""]').click(function(){
                return false;
              });

              $("#owl-demo").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    navigation : true, // Show next and prev buttons
                    slideSpeed : 300,
                    paginationSpeed : 400,
                    singleItem:true
              });

              carousel = $('#owl-demo').data('owlCarousel')

              carousel.jumpTo(1);
            });

            console.log('common loaded');
        }
    };
});

