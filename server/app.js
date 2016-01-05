var express = require('express');
var bodyParser = require('body-parser');


var session = require('express-session');
var cookieParser = require('cookie-parser');


var flickr = require('./models/api.js').flickr;
var helper = require('./helpers/helper.js');
var app = express();


app.use(cookieParser());
app.use(session({
  // Secret hashes the session
  secret:'sssssshhhhhhhh',
  saveUninitialized: true,
  resave:true
}));
app.use(express.static('public'));



var port = process.env.PORT || 3250 ;


app.listen(port, function(){
  console.log('Now listening on localhost:' + port);
});


app.use(bodyParser.json());


app.get('/hello', function(req, res){
  req.session.loggedIn = true;
  req.session.count = req.session.count || 0
  req.session.count++;
  console.log(req.session);
  res.end();
});


// When the user signs up
app.post('/signup', helper.encrypt);

// When the user logs in
app.post('/login', helper.compare);



// Kill the session and redirect the user to the login page.
app.get('/logout', helper.logout);





// MOVE ALL THESE TO A ROUTER FILE WHEN YOU GET THE CHANCE 
app.post('/api/getImages', flickr );
