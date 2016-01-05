angular.module('home.inputs',[])

// Move this factory to its own file if time
.factory('FetchImage', function($http){
  var fetch = function(message){
    return $http({
      method:'POST',
      url: 'api/getImages',
      data: { message: message }
    })
    
  }

   return { fetch: fetch };
 })
.controller('inputController', ['$scope', '$http', 'FetchImage', function($scope, $http, FetchImage){

  $scope.name = "Jennifer"

  // This is for the input tags
  $scope.messageText = '';

  $scope.searchImage = function(){  
    FetchImage.fetch($scope.messageText)
      .then(function(response){
        console.log('Images', response);
      });
  }




}])


