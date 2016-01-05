angular.module('login', [])
  .controller('loginController', ['$scope','$http', function($scope, $http){
    $scope.email = '';
    $scope.password = '';

    $scope.checkLogin = function(){
      $http({
      method: 'POST',
      url:'/login',
      data: {
        email: $scope.email,
        password: $scope.password
      }}).then(function(){
        // Check if the user is logged in
      });
    };
      
    

  }]);
