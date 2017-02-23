/*global angular */
var treneri = angular.module('treneri', []);

treneri.controller('treneriController',['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    
     $scope.treneri = [
    {
        "id": 1,
      "ime": "Nataša",
      "prezime": "Vatreš",
    "email":"natasa@gmail.com",
      "telefon":1234567,
        "ss": "aaaa",
        "trening": "bbbb"
        
    }, {
        "id": 2,
      "ime": "Ana",
      "prezime": "Dedović",
    "email":"ana@gmail.com",
      "telefon":1234567,
    "ss": "aaaa",
        "trening": "bbbb"
    }, {
        "id": 3,
       "ime": "Valentina",
      "prezime": "Anđelković",
    "email":"valentina@gmail.com",
      "telefon":1234567,
    "ss": "aaaa",
        "trening": "bbbb"
    }
];
    
    $scope.dodajTrenera = function(trener){
        alert("Uspešno dodato :D");
        $scope.treneri.push(trener);
         $scope.current = {};
    };  
    
    $scope.obrisiTrenera = function(treneri){
        var rezultat = confirm('Da li ste sigurni da želite da obrišete trenera?');
        if(rezultat==true){
        var indexZaBrisanje = vratiSelektovanog(treneri.id);
        $scope.treneri.splice(indexZaBrisanje, 1);
        }
    };
    
    function vratiSelektovanog(id){
        for(var i=0; i<$scope.treneri.length; i++)
            if($scope.treneri[i].id==id)
                return i;
        return -1;
    }
    
    $scope.izmeniTrenera = function(trener){
        var index = vratiSelektovanog(trener.id);
        var trener = $scope.treneri[index];
        $scope.ime = trener.ime;
        $scope.prezime = trener.prezime;
        $scope.email = trener.email;
        $scope.telefon = trener.telefon;
        $scope.ss = trener.ss;
        $scope.trening = trener.trening;
    };
    
//      $scope.sacuvajTrenera = function(trener){
//            alert("Uspešno sačuvano :D");
//          $scope.current = {};
//    };
    
//    $scope.current = {};

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
