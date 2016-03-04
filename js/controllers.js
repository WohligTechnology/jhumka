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

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
