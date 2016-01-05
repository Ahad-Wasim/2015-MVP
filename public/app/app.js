var app = angular.module('myApp', ['home.inputs','signUp','login','logout','ngRoute']);

app.config(function($routeProvider){
  
  $routeProvider
    .when('/',{
      templateUrl: '../views/input.html',
      controller: 'inputController'
    })
    .when('/login', {
      templateUrl: '../views/login.html',
      controller: 'loginController'
    })
    .when('/signup', {
      templateUrl: '../views/signup.html',
      controller: 'signUpController'
    })
    .when('/userWall', {
      templateUrl:'../views/userWall.html',
      controller: 'userProfileController'
    })

});


