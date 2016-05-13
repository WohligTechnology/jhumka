var adminURL = "http://192.168.1.110/nayabackend/index.php/";
var imgurl = "http://192.168.1.110/nayabackend/uploads/";
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

    getAllSiders: function(callback) {
      $http({
        url: adminURL + "json/getslider",
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
    getStockist: function(callback) {
      $http({
        url: adminURL + "json/getstockist",
        mehod: 'POST',
        data: {}
      }).success(callback)
    },
    getStockistbycity: function(name,callback) {
      $http.get(adminURL + "json/getstockist?name=" + name).success(callback);

    },
    submitContact: function(formData, callback) {
      console.log(formData);
      $http({
        url: adminURL + 'json/contactSubmit',
        method: 'POST',
        withCredentials: true,
        data: {
          "name": formData.name,
          "email": formData.email,
          "phone": formData.phone,
          "message": formData.message,
        }
      }).success(callback);
    },
    getOneCollections: function(id, callback) {
      $http.get(adminURL + "json/getcollections?id=" + id).success(callback);
    },
  };
});
