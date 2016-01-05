angular.module('signUp', [])

.controller('signUpController', ['$scope','$http', function($scope, $http){
  
  $scope.email = '';
  $scope.password = '';

  $scope.checkSignUp = function(){
    
    $http({
      method:'POST',
      url: '/signUp',
      data: {
        email:  $scope.email,
        password: $scope.password
      }
    }).then(function(req, res){
      // Check to see if the user can sign up
    })

  };

}]);
