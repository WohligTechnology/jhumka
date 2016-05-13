angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.changePage = function(text) {
    var length = $(".fp-section").length;
    console.log(length);
    console.log($(".fp-section"));
    if (typeof $.fn.fullpage.destroy == 'function') {
      $.fn.fullpage.destroy('all');
    }
    if (length === 0) {
      $('.fullpage').fullpage();
    }
    console.log(text);
    $scope.homeval = text;
    switch (text) {
      case "contact":
        $.fn.fullpage.moveTo(7);
        break;
      case "stockists":
        $.fn.fullpage.moveTo(6);
        break;
      case "press":
        $.fn.fullpage.moveTo(5);
        break;
      case "collection":
        $.fn.fullpage.moveTo(4);
        break;
      case "ananya":
        $.fn.fullpage.moveTo(3);
        break;
      case "about":
        $.fn.fullpage.moveTo(2);
        break;
      case "home":
        $.fn.fullpage.moveTo(1);
        break;
      default:
        $.fn.fullpage.moveTo(1);
        break;
    }
  };

  $scope.$on('$viewContentLoaded', function() {
    $timeout(function() {
      $('body').addClass('fp-');
      $scope.changePage($stateParams.id);
    }, 1000);
  });

  NavigationService.getAllPress(function(data) {
    $scope.press = data;
    console.log(data);
  });
  NavigationService.getAllSiders(function(data) {
    $scope.mySlides = data;
    console.log(data);
  });

  NavigationService.getAllCollections(function(data) {
    $scope.collections = data;
    console.log(data);
  });
  NavigationService.getStockist(function(data) {
    $scope.stockists = data;
    console.log(data);
  });

  $scope.submitContactForm = function(contactForm, formData) {
    console.log('form values: ', formData);
    NavigationService.submitContact(formData, function(data) {
      console.log(data);
    });
  };
})

.controller('CollectionCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
    $scope.template = TemplateService.changecontent("collection");
    $scope.menutitle = NavigationService.makeactive("Collection");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header2.html";

    // $scope.collection = [{
    //   img: "img/c1.jpg",
    //   desc: "The Lotus is very symbolic and important element in the Chakra’s. "
    // }, {
    //   img: "img/c2.jpg",
    //   desc: "The Lotus is very symbolic and important element in the Chakra’s. "
    // }, {
    //   img: "img/c3.jpg",
    //   desc: "The Lotus is very symbolic and important element in the Chakra’s."
    // }, {
    //   img: "img/c4.jpg",
    //   desc: "The Lotus is very symbolic and important element in the Chakra’s."
    // }, {
    //   img: "img/c5.jpg",
    //   desc: "The Lotus is very symbolic and important element in the Chakra’s."
    // }, {
    //   img: "img/c6.jpg",
    //   desc: "The Lotus is very symbolic and important element in the Chakra’s."
    // }];
    console.log($stateParams);
    NavigationService.getOneCollections($stateParams.id, function(data) {
      $scope.collectionsitems = data;
    });
  })
  .controller('PressCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("press");
    $scope.menutitle = NavigationService.makeactive("Press");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header2.html";

    NavigationService.getAllPress(function(data) {
      $scope.press = data;
      console.log(data);
    });


    //
    // $scope.press = [{
    //   img: "img/p4.jpg",
    //   caption: "Self rediges unveils",
    //   link: "img/p4.jpg",
    //   date: "29/01/16"
    // }, {
    //   img: "img/p5.jpg",
    //   caption: "Self rediges unveils",
    //   link: "http://www.youtube.com/embed/L9szn1QQfas?autoplay=1",
    //   isIframe: true,
    //   date: "29/01/16"
    // }, {
    //   img: "img/p4.jpg",
    //   caption: "Self rediges unveils",
    //   link: "img/p4.jpg",
    //   date: "29/01/16"
    // }, {
    //   img: "img/p4.jpg",
    //   caption: "Self rediges unveils",
    //   link: "img/p4.jpg",
    //   date: "29/01/16"
    // }, {
    //   img: "img/p4.jpg",
    //   caption: "Self rediges unveils",
    //   link: "img/p4.jpg",
    //   date: "29/01/16"
    // }, {
    //   img: "img/p4.jpg",
    //   caption: "Self rediges unveils",
    //   link: "img/p4.jpg",
    //   date: "29/01/16"
    // }, {
    //   img: "img/p5.jpg",
    //   caption: "Self rediges unveils",
    //   link: "http://www.youtube.com/embed/L9szn1QQfas?autoplay=1",
    //   date: "29/01/16"
    // }, {
    //   img: "img/p5.jpg",
    //   caption: "Self rediges unveils",
    //   link: "http://www.youtube.com/embed/L9szn1QQfas?autoplay=1",
    //   date: "29/01/16"
    // }];
  })

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
