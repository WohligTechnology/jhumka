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
      url: "/",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl',
      params: {
        'id': 'home',
      }
    })
    .state('stockists', {
      url: "/stockists",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl',
      params: {
        'id': 'stockists',
      }
    })
    .state('presshome', {
      url: "/presshome",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl',
      params: {
        'id': 'press',
      }
    })
    .state('collectionhome', {
      url: "/collectionhome",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl',
      params: {
        'id': 'collection',
      }
    })
    .state('ananya', {
      url: "/ananya",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl',
      params: {
        'id': 'ananya',
      }
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl',
      params: {
        'id': 'about',
      }
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl',
      params: {
        'id': 'contact',
      }
    })
    .state('press', {
      url: "/press",
      templateUrl: "views/template.html",
      controller: 'PressCtrl'
    })
    .state('collection', {
      url: "/collection/:id",
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
firstapp.filter('serverimage', function() {
  return function(input) {
    if (input) {
      return imgurl + input;
    } else {
      // return "img/logo.png";
      return "";
    }
  };
  0
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
      // console.log(attr);
      var $element = $(element);
      var disc = attr.title;
      var target;
      if (attr.rel) {
        target = $(".fancybox-button");
      } else {
        target = element;
      }

      target.fancybox({
        beforeShow: function() {
          // console.log(this);
          if (this.title) {
          }
        },
        afterShow: function() {
          var temp = this.title;
          this.title = '';
          this.title += '<div class="collection-detail inside"><p class="color-primary">'+temp+'</p></div>';
        },
        beforeShow: function() {
          var temp = this.title;
          this.title = '';
          this.title += '<div class="collection-detail inside"><p class="color-primary">'+temp+'</p></div>';
        },
        // afterClose: function() {
        //   $(document).fullScreen(false);
        // },
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none',
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
