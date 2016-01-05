var app = angular.module('myApp', ['home.inputs', 'ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: '../views/input.html',
      controller: 'inputController'
    });


});


