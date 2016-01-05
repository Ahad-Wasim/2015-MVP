angular.module('login', [])
  .controller('loginController', ['$scope','$http','$window', function($scope, $http, $window){
    $scope.email = '';
    $scope.password = '';

    $scope.checkLogin = function(){
      $http({
      method: 'POST',
      url:'/login',
      data: {
        email: $scope.email,
        password: $scope.password
      }}).then(function(response){
        if(response.data.error){
          console.log("You got an error");
        } else {
          console.log('I got data', response.data);
          $window.location.href = '#/';
        }
      });
    };

  }]);
    
