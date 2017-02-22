/*global angular */
var treneri = angular.module('treneri', []);

treneri.controller('treneriController',['$scope', '$filter', '$http', function ($scope, $filter, $http) {
                                        
    $scope.ime = '';
    $scope.prezime = '';
                                        
    $scope.najmanje = 2;
    $scope.najvise = 30;
    
    $scope.alertClick = function() {
        alert("Vaš unos je uspešno sačuvan :D");
    };
    
    //------------------
    $scope.treneri = [
    {
      ime: 'Nata',
      prezime: 'sajkfhla',
      email:'asjkfd@aljksd.com',
      telefon:'1234567'
        
    }, {
      ime: 'Anci',
      prezime: 'sajkfhla',
      email:'asjkfd@aljksd.com',
      telefon:'1234567'
    }, {
      ime: 'Vanja',
      prezime: 'sajkfhla',
      email:'asjkfd@aljksd.com',
      telefon:'1234567'
    }
  ];
    //------------------
    
    $http.get('/db.json')
        .success(function(podaciOTrenerima){
            console.log(podaciOTrenerima);
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