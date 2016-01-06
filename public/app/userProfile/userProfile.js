angular.module('user',[])



.controller('userProfileController', ['$scope','$http', function($scope, $http){
  
  $scope.fullName = window.userData.fullName;

  $scope.seeProfile = function(){
    // $http({
      
    // })
    // .then(function(response){
    //   $()
    // })
  }

 

}]);
