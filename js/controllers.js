angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap','ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout,$stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.$on('$viewContentLoaded', function() {
    $timeout(function() {
      changepage($stateParams.name);
    }, 1000);
  });

  $scope.changePage = function(text) {
    var length = $(".fp-section").length;
    console.log(length);
    console.log( $(".fp-section"));
    if(length == 0)
    {
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


  $scope.mySlides = [
    'img/bg1.jpg',
    'img/bg2.jpg',
    'img/bg3.jpg',
    'img/bg4.jpg'
  ];

  $scope.press=[{
    img:"img/p1.jpg",
    title:"The Diamond Store shortlisted for UK Blog Awards 2016",
    desc:"It’s just been announced that a new jewellery blog, The Diamond Store Magazine, is up..."
  },{
    img:"img/p2.jpg",
    title:"Selfridges unveils its christmas window",
    desc:"It’s just been announced that a new jewellery blog, The Diamond Store Magazine, is up..."
  },{
    img:"img/p3.jpg",
    title:"Designer & Antique Jewels at Dreweatts",
    desc:"It’s just been announced that a new jewellery blog, The Diamond Store Magazine, is up..."
  }];
})

.controller('CollectionCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("collection");
  $scope.menutitle = NavigationService.makeactive("Collection");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.collection=[{
    img:"img/c1.jpg",
    desc:"The Lotus is very symbolic and important element in the Chakra’s. "
  },{
    img:"img/c2.jpg",
    desc:"The Lotus is very symbolic and important element in the Chakra’s. "
  },{
    img:"img/c3.jpg",
    desc:"The Lotus is very symbolic and important element in the Chakra’s."
  },{
    img:"img/c4.jpg",
    desc:"The Lotus is very symbolic and important element in the Chakra’s."
  },{
    img:"img/c5.jpg",
    desc:"The Lotus is very symbolic and important element in the Chakra’s."
  },{
    img:"img/c6.jpg",
    desc:"The Lotus is very symbolic and important element in the Chakra’s."
  }]

})
.controller('PressCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("press");
  $scope.menutitle = NavigationService.makeactive("Press");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.collection=[{
    img:"img/c1.jpg",
    desc:"The Lotus is very symbolic and important element in the Chakra’s. "
  },{
    img:"img/c2.jpg",
    desc:"The Lotus is very symbolic and important element in the Chakra’s. "
  },{
    img:"img/c3.jpg",
    desc:"The Lotus is very symbolic and important element in the Chakra’s."
  },{
    img:"img/c4.jpg",
    desc:"The Lotus is very symbolic and important element in the Chakra’s."
  },{
    img:"img/c5.jpg",
    desc:"The Lotus is very symbolic and important element in the Chakra’s."
  },{
    img:"img/c6.jpg",
    desc:"The Lotus is very symbolic and important element in the Chakra’s."
  }]

  $scope.press = [
    {
      img: "img/p3.jpg",
      caption: "Self rediges unveils"
    },
    {
      img: "img/p3.jpg",
      caption: "Self rediges unveils"
    },
    {
      img: "img/p3.jpg",
      caption: "Self rediges unveils"
    },
    {
      img: "img/p3.jpg",
      caption: "Self rediges unveils"
    },
    {
      img: "img/p3.jpg",
      caption: "Self rediges unveils"
    },
    {
      img: "img/p3.jpg",
      caption: "Self rediges unveils"
    },
    {
      img: "img/p3.jpg",
      caption: "Self rediges unveils"
    },
    {
      img: "img/p3.jpg",
      caption: "Self rediges unveils"
    }
  ];
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
