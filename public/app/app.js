var app = angular.module('myApp', ['home.inputs','signUp','login','ngRoute']);

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
    // .when('/logout', {
    //   redirectTo: '/login'
    // })

});


