var express = require('express');
var bodyParser = require('body-parser');
var flickr = require('./models/api.js');
var app = express();


app.use(express.static('../public'));


var port = process.env.PORT || 3250 ;

app.listen(port, function(){
  console.log('Now listening on localhost:' + port);
});




app.use(bodyParser.json());


// MOVE ALL THESE TO A ROUTER FILE WHEN YOU GET THE CHANCE 
// app.post('/api/getImages', function(req, res, next){

// });
