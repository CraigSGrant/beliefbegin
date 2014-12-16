'use strict';

define(['jquery'], function($) {

  var $win, $doc,
      $body = $('body'),
      $main = $('.main');

  var toggleMobileMenu = function() {


    if ($body.hasClass('is-active')) {
      //close mobile drawer

      jQuery('#content').toggleClass('is-disabled');

      jQuery('nav').css('display', 'none');

    } else {
      //open mobile drawer

      jQuery('#content').toggleClass('is-disabled');

      // jQuery('#content').css('min-height', jQuery(window).height());

      jQuery('nav').css('display', 'block');

      //set the width of primary content container -> content should not scale while animating
      // var contentWidth = jQuery('#content').width();

      //set the content with the width that it has originally
      // jQuery('#content').css('width', contentWidth);

      //display a layer to disable clicking and scrolling on the content while menu is shown
      jQuery('#contentLayer').css('display', 'block');

      //disable all scrolling on mobile devices while menu is shown
      jQuery('#container').bind('touchmove', function (e) {
          e.preventDefault()
      });

      //set margin for the whole container with a jquery UI animation
      jQuery("#container").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
          duration: 700
      });
    }


    $body.toggleClass('is-active');
  };

  var removeMobileMenu = function() {
    $body.removeClass('is-active');
  };

  var addEventHandlers = function() {

    $win.resize(function(){
      if ( $win.outerWidth() > 640 ) {
        removeMobileMenu();
      }
    });
  };

  return {
    init: function($w, $d) {
      $win = $w;
      $doc = $d;

      addEventHandlers();

      $doc.ready(function() {

          //Open the menu
          jQuery("#hamburger").click(function () {

              toggleMobileMenu();

          });

          //close the menu
          jQuery("#Hamburger").click(function () {
              console.log("hi")
              //enable all scrolling on mobile devices when menu is closed
              jQuery('#container').unbind('touchmove');

              //set margin for the whole container back to original state with a jquery UI animation
              jQuery("#container").animate({"marginLeft": ["-1", 'easeOutExpo']}, {
                  duration: 700,
                  complete: function () {
                      jQuery('#content').css('width', 'auto');
                      jQuery('#contentLayer').css('display', 'none');
                      jQuery('nav').css('opacity', 0);
                      jQuery('#content').css('min-height', 'auto');

                  }
              });
          });
      });
      console.log('nav loaded');
    },

    toggleMobileMenu: toggleMobileMenu,
    removeMobileMenu: removeMobileMenu
  };

});
