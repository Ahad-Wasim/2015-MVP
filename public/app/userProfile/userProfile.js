angular.module('user',[])

.controller('userProfileController', ['$scope','$http', function($scope, $http){
  
  $scope.seeProfile = function(){
    var s = window.imageWall.favorites
    
    for(var i = 0;i<s.length;i++){
      var $img = $('<img />').attr({'src': s[i]['image'] })
      var $h2 = $('<h2 />').text(s[i]['text']);

      var $div = $('<div>').append([$img,$h2])
      
      $('.whatToDo').append($div) 
    }
    
  }

  // $scope.seeProfile = function(){
  //   console.log('hello');
  //   $scope.desc = window.imageWall.favorites
  // }

 

}]);
