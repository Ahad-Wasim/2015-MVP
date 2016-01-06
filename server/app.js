var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var session = require('express-session');
var cookieParser = require('cookie-parser');


var flickr = require('./models/api.js').flickr;
var helper = require('./helpers/helper.js');
var app = express();


// Listening For the database
mongoose.connect('mongodb://localhost:27017/pic-mix');


// MiddleWare

app.use(cookieParser());

app.use(session({
  // Secret hashes the session
  secret:'sssssshhhhhhhh',
  saveUninitialized: true,
  resave:true
}));
app.use(bodyParser.json());

app.use(express.static('public'));


var port = process.env.PORT || 3500 ;


app.listen(port, function(){
  console.log('Now listening on localhost:' + port);
});




// Routes

// When the user signs up
app.post('/signup', helper.signUpUser);


// When the user logs in
app.post('/login', helper.loginUser);



// Kill the session and redirect the user to the login page.
app.get('/logout', helper.logout);


// MOVE ALL THESE TO A ROUTER FILE WHEN YOU GET THE CHANCE 
app.post('/api/getImages', flickr );

app.post('/user', helper.updateWall )
