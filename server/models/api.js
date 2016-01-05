var APIKEY = require('./apiKey.js');
var request = require('request');
var _ = require('underscore');
var text = 'You will require text here';
var key = APIKEY.KEY;
var secret = APIKEY.SECRET


var listURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+key+'&text='+text+'&format=json&nojsoncallback=1'

//'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4dae1f4f5e2e1ecf462e82b383da13da&text=bengals&format=json&nojsoncallback=1'

var createIMGSOURCE = function(body){

  return _.map(body.photos.photo, function(object){
    
    var id = object.id, 
    secret = object.secret, 
    server = object.server,
    farm = object.farm,
    size = 'z',
    title = object.title;

    return { 
      src: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`,
      title: title
    }

  });

  
}

var getImages = function(){ 

  request(listURL, function (error, response, body) {
    if(!error && response.statusCode == 200) {
      createIMGSOURCE(JSON.parse(body));
    }
  })

};


module.exports = {
  "flickr": getImages
};
