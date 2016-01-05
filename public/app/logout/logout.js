angular.module('logout', [])

.controller('logoutController',['$scope','$http','$window', function($scope, $http, $window){
  $scope.routeToLogout = function(){
    
    $http({
        method:'GET',
        url:'/logout'
    })
    .then(function(response){
        if(response.data.error){
            return response.data.error;
        } else {
            $window.location.href = '#/login';
        }
    })

  };
}])
