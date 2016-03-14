// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
      url: "/home/:name",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
    .state('homeHome', {
      url: "/",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
    .state('press', {
      url: "/press",
      templateUrl: "views/template.html",
      controller: 'PressCtrl'
    })
    .state('collection', {
      url: "/collection",
      templateUrl: "views/template.html",
      controller: 'CollectionCtrl'
    });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});
firstapp.directive("scroll", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      var windowHeight = $(window).height();
      if (windowHeight > 600) {
        //$('#boutique').boutique();
      }
      if (this.pageYOffset >= windowHeight) {
        console.log(windowHeight);
        element.addClass('affix');
      } else {
        element.removeClass('affix');
      }
    });
  };
});
firstapp.directive('autoHeight', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();
      var addHeight = function() {
        $element.css("min-height", windowHeight);
      };
      addHeight();
    }
  };
});

firstapp.directive('fancybox', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      var target;
      if (attr.rel) {
        target = $(".fancybox-button");
      } else {
        target = element;
      }

      target.fancybox({
        beforeShow: function() {
          if (this.title) {
            // New line
            this.title += '<br />';

            // Add tweet button
            this.title += '<a href="https://twitter.com/share" class="twitter-share-button" data-count="none" data-url="' + this.href + '">Tweet</a> ';

            // Add FaceBook like button
            this.title += '<iframe src="//www.facebook.com/plugins/like.php?href=' + this.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:110px; height:23px;" allowTransparency="true"></iframe>';
          }
        },
        afterShow: function() {
          // Render tweet button
          twttr.widgets.load();
          // $('<div class="expander"></div>').appendTo(this.inner).click(function() {
          //   $(document).toggleFullScreen();
          // });
        },
        // afterClose: function() {
        //   $(document).fullScreen(false);
        // },
        openEffect: 'fade',
        closeEffect: 'fade',
        // closeBtn: true,
        helpers: {
          media: {},
          title: {
            type: 'inside'
          },
          buttons: {}
        }
      });
    }
  };
});
