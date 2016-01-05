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
.controller('inputController', ['$scope', '$http', 'FetchImage','$location', function($scope, $http, FetchImage, $location){

  $scope.name = "Jennifer"

  // This is for the input tags
  $scope.messageText = '';

  $scope.searchImage = function(){

    var attributes = {'src': 'https://media.giphy.com/media/10kTz4r3ishQwU/giphy.gif', 'class': 'spinner'}
    var $spinner = $('<img />').attr(attributes)
    $('#opener').append($spinner);

    FetchImage.fetch($scope.messageText)
      .then(function(response){
        $('.spinner').hide();
        console.log(response.data);
        // $location.path('/imageResults');
        $scope.searchResults = response.data;
      });
  }




}])


