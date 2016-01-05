var User = require('../models/userModel.js').User;
var _ = require('underscore');
var bcrypt = require('bcrypt-nodejs');
var url = require('url');


var signUpUser = function(req, res, next){

  var fullName = req.body.fullName;
  var email = req.body.email;

  // Only send this to bcrypt. NOT THE DATABASE
  var password = req.body.password;

  User.findOne({ email: email}, function(err, user){
    if(err) console.log(error)

    if(user){
      res.json({ data: 'That username already exits' });
    } else {

      bcrypt.hash(password, null, null, function(err, hash) {
        
        var userInfo = {
          fullName: fullName,
          email: email,
          password: hash
        }

        var user = new User(userInfo);
        user.save(function(err, userData){
          if (err) return console.error(err);
          //console.log('WTF', userData);
          req.session.loggedIn = true;
          req.session.fullName = fullName;
          req.session.email = email;

          // TODO:
          // If time fix this so that mongoose can extract the data back that you really want.
          // Maybe you may have to redirect your route here.
          res.json(userData);
        });

      });
    }
  });

  
};

var loginUser = function(req, res){

  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ email: email }, function(err, user){
    if(err){
      res.json({ error: 'Incorrect Username' })
    } else {
      var hash = user.password;

      // Create a session if a user is found in the database
      bcrypt.compare(password, hash, function(err, bool) {
        if(err){
          return err;
          response.json({error: 'Database query Issues'})
        } else if(bool) {
          console.log("Your logged In");
          req.session.loggedIn = true;
          req.session.fullName = user.fullName;
          req.session.email = user.password;

          var userObject = {
            fullName: user.fullName,
            email: user.email,
          };

          res.json(userObject);
        } else {
          res.json({ error:'Incorrect Password' }) // Go back to the home page
        }
      }); 

    }

  });
   
};



var logout = function(req, res){
  
  console.log("Logging Out");
  req.session.destroy(function(err){
    if(err){
      return err;
      res.end();
    } else {
      res.json({status:true})
    }
  });

};


module.exports = {
  loginUser: loginUser,
  signUpUser: signUpUser,
  logout : logout
};

