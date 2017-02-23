var rute = angular.module('rute', ["ngRoute", "ngAnimate"]);
rute.config(function($routeProvider){
    
 $routeProvider 

  .when('/', {
    templateUrl: 'stranice/vizija.html', 
    controller: 'vizijaController'
  })

 .when('/misija', {
    templateUrl: 'stranice/misija.html', 
    controller: 'misijaController'
	})

});

rute.controller('vizijaController',['$scope', function ($scope) {
   
 }]);


rute.controller('misijaController',['$scope', function ($scope) {

}]);