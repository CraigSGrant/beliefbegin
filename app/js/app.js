"use strict";

require.config({
    baseUrl: './',
    paths: {
        jquery: [
          'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
          '../app/js/vendor/jquery-1.11.0.min'
        ],
        jqueryui: [
          'https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min',
          '../app/js/vendor/jqueryui.min.js'
        ],
        modernizr: '../app/js/vendor/modernizr',
        fastclick: '../app/js/vendor/fastclick',
        froogaloop: '../app/js/vendor/froogaloop',
        history: '../app/js/vendor/history',
        infinitescroll: '../app/js/vendor/infinitescroll',
        isotope: '../app/js/vendor/isotope',
        mediaelement: '../app/js/vendor/mediaelement',
        spin: '../app/js/vendor/spin.min',
        imagesloaded: '../app/js/vendor/imagesloaded.pkgd.min',
        masonry: '../app/js/vendor/masonry.pkgd.min',
        _common: '../app/js/modules/_common',
        _nav: '../app/js/modules/_nav',
        _formpages: '../app/js/modules/_formpages',
        owl: '../app/js/vendor/owl'
    },
    shim: {
      'jquery': {
          exports: '$'
      },
      'mediaelement' : ['jquery'],
      'owl' : ['jquery']
    }
});

require(['_common'], function(runMethod) {
  runMethod.init($(window),$(document));
});


