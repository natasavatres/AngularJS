/*global angular */
var treneri = angular.module('treneri', []);

treneri.controller('treneriController',['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    
     $scope.treneri = [
    {
      "ime": "Nata",
      "prezime": "sajkfhla",
    "email":"asjkfd@aljksd.com",
      "telefon":1234567,
    "ss": "sdgfsa",
        "trening": "shafdba"
        
    }, {
      "ime": "Anci",
      "prezime": "sajkfhla",
    "email":"asjkfd@aljksd.com",
      "telefon":1234567,
    "ss": "sdgfsa",
        "trening": "shafdba"
    }, {
       "ime": "Vanja",
      "prezime": "sajkfhla",
    "email":"asjkfd@aljksd.com",
      "telefon":1234567,
    "ss": "sdgfsa",
        "trening": "shafdba"
    }
];
    
    $scope.dodajTrenera = function(trener){
        alert("Uspešno dodato :D");
        $scope.treneri.push(trener);
         $scope.current = {};
    };
    
    
    $scope.obrisiTrenera = function(trener){
        var trenerZaBrisanje = $scope.treneri.indexOf(trener);
        $scope.treneri.splice(trenerZaBrisanje, 1);
    };
    
//    $scope.izmeniTrenera = function(trener){
//        $scope.current = trener;
//    };
    
//      $scope.sacuvajTrenera = function(trener){
//            alert("Uspešno sačuvano :D");
//          $scope.current = {};
//    };
    
    $scope.current = {};

//    alert pocinje
    
    $scope.ime = '';
    $scope.prezime = '';
                                        
    $scope.najmanje = 2;
    $scope.najvise = 30;
    
//    $scope.alertClick = function() {
//        alert("Vaš unos je uspešno sačuvan :D");
//    };
    
      
    
    
    //------------------
    console.log(angular.toJson($scope.treneri));
    
    $http.get('/db.json')
        .success(function(podaciOTrenerima){
//            console.log(podaciOTrenerima);
        $scope.treneri = podaciOTrenerima;
    })
        .error(function(podaci, status){
            console.log(podaci);
    });
    
//    $scope.noviTrener = '';
//    $scope.dodajTrenera = function(){
//        
//        $http.post('/db.json', {noviTrener: $scope.noviTrener })
//        
//    };
}]);

//var rute = angular.module('rute', []);
//
//rute.config(['$routeProvider',function($routeProvider){
//    
//  $routeProvider 
//
//  .when('/', {
//    templateUrl: 'stranice/vizija.html', 
//    controller: 'vizijaController'
//  })
//
//  .when('/misija')
//    templateUrl: 'stranice/misija.html', 
//    controller: 'misijaController'
//})
//
//});
//
//rute.controller('vizijaController',['$scope', function ($scope) {
//    
//  }]);
//
//
//rute.controller('misijaController',['$scope', function ($scope) {
//
//  }]);