angular.module('signUp', [])

.controller('signUpController', ['$scope','$http','$location', function($scope, $http, $location){
  
  $scope.email = '';
  $scope.password = '';
  $scope.fullName = ''

  $scope.checkSignUp = function(){
    
    $http({
      method:'POST',
      url: '/signUp',
      data: {
        fullName: $scope.fullName,
        email:  $scope.email,
        password: $scope.password
      }
    }).then(function(response){
      if(response.data.error){ 
        return  console.log(response.data.error); 
      } else {
        console.log(response.data);
      }

    })

  };

}]);
