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

  $scope.name = window.userData.fullName.toUpperCase() || '';
  $scope.email = window.userData.email || '';

  $scope.imgDesc = '';

  $scope.addImage = function(event){
    $scope.interestedImage = event.currentTarget.currentSrc;
  };


  // This is for the input tags
  $scope.messageText = '';

  $scope.searchImage = function(){

    var attributes = {'src': 'https://media.giphy.com/media/10kTz4r3ishQwU/giphy.gif', 'class': 'spinner'}
    var $spinner = $('<img />').attr(attributes)
    $('#opener').append($spinner);

    FetchImage.fetch($scope.messageText)
      .then(function(response){
        $('.spinner').hide();
        // $location.path('/imageResults');
        $scope.searchResults = response.data;
      });
  }




  $scope.addToWall = function(event){

    var favImage = $scope.interestedImage
    var email = $scope.email;
    var user = $scope.name;
    var text = $scope.imgDesc; 


    var userWallData = {
      favImage: favImage,
      user: user,
      email: email,
      text: text
    };

    $http({
      method:'POST',
      url:'/user',
      data: userWallData
    })
    .then(function(response){
      console.log('Finished',response);
      window.imageWall = response
    });
  
    

  }


}])


