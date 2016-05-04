var adminURL = "http://192.168.1.133/nayabackend/index.php/";
var imgurl = "http://192.168.1.133/nayabackend/uploads/";
// if(isproduction)
// {
//   adminURL =  "http://www.wohlig.co.in/demo/index.php";
// }
// else {
//   adminURL = "http://localhost/demo/index.php";
// }

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    anchor: "home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
      link: "#/home"
    }]
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

    getAllCollections: function(callback) {
      $http({
        url: adminURL + "json/getcollections",
        mehod: 'POST',
        data: {}
      }).success(callback)
    },

    getAllPress: function(callback) {
      $http({
        url: adminURL + "json/getpress",
        mehod: 'POST',
        data: {}
      }).success(callback)
    },
    getOneCollections: function(id,callback) {
      $http({
        url: adminURL + "json/getcollections?id=",
        mehod: 'POST',
        withCredentials: true,
        data: {
          "id": id
        }
      }).success(callback)
    },
  };
});
