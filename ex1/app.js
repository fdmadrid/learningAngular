var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.firstname = "John";
    $scope.lastname = "Doe";
    $scope.quantity = "1";
    $scope.price = "5";
    $scope.names =[ {name:'Jani',country:'Norway'},
                    {name:'Hege',country:'Sweden'},
                    {name:'Kai',country:'Denmark'}];
});
