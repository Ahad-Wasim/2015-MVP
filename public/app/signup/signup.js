angular.module('signUp', [])

.controller('signUpController', ['$scope','$http','$location','$window', function($scope, $http, $location, $window){
  
  $scope.email = '';
  $scope.password = '';
  $scope.fullName = '';

  $scope.checkSignUp = function(){
    
    $http({
      method:'POST',
      url: '/signup',
      data: {
        fullName: $scope.fullName,
        email:  $scope.email,
        password: $scope.password
      }
    }).then(function(response){
      if(response.data.error){ 
        console.log(response.data.error); 
      } else {
        window.userData = response.data;
        $location.path('/');
      }

    })

  };

}]);
