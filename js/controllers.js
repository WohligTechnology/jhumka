angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.formData = {};
  $scope.navigation = NavigationService.getnav();
  $scope.changePage = function(text) {
    console.log(text);
    var length = $(".fp-section").length;
    console.log(length);
    console.log($(".fp-section"));
    // if (typeof $.fn.fullpage.destroy == 'function') {
    //   $.fn.fullpage.destroy('all');
    // }
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

  NavigationService.getAllCollectionscat(function(data) {
    $scope.collections = data;
    console.log(data);
  });
  NavigationService.getStockist(function(data) {
    $scope.stockists = data;
    console.log(data);
  });

  $scope.getAddress = function(name) {
    NavigationService.getStockistbycity(name, function(data) {
      $scope.address = data;
    });
  };
  $scope.addressselect = "mumbai";
  $scope.getAddress('mumbai');
  $scope.thankyouact = false;
  $scope.submitContactForm = function(contactForm, formData) {
    $scope.thankyouact = false;
    // console.log('form values: ', formData);
    NavigationService.submitContact(formData, function(data) {
      console.log(data);
      $scope.thankyouact = true;
      // $timeout(function() {
      //   $scope.thankyouact = false;
      //   $scope.formData = {};
      //   console.log($scope.formData);
      //   contactForm.name.$touched = false;
      //   contactForm.email.$touched = false;
      //   contactForm.phone.$touched = false;
      //   contactForm.message.$touched = false;
      // }, 1000);
    });
  };
})

.controller('CollectionCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
    $scope.template = TemplateService.changecontent("collection");
    $scope.menutitle = NavigationService.makeactive("Collection");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header2.html";
    TemplateService.footer = "";
    if (typeof $.fn.fullpage.destroy == 'function') {
      $.fn.fullpage.destroy('all');
    }
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
    if (!$stateParams.id) {
      $state.go('home');
    }
    console.log($stateParams);
    NavigationService.getOneCollections($stateParams.id, function(data) {
      $scope.collectionsitems = data;
      console.log(data);
    });
    console.log($stateParams);
    NavigationService.getAllCollectionscatbyid($stateParams.id, function(data) {
      $scope.collectionselected = data;
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
    if (typeof $.fn.fullpage.destroy == 'function') {
      $.fn.fullpage.destroy('all');
    }
  })

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
    $.fancybox.close(true);
  });

});
