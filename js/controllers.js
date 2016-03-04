angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap','ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
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
  }]
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

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
