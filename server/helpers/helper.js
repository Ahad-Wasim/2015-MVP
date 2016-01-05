var bcrypt = require('bcrypt-nodejs');


var encryptPassword = function(req, res, next){

  var email = req.body.email;
  var password = req.body.password;

  // Create a session once the user is found in the database

  // bcrypt.hash(req.body, null, null, function(err, hash) {
  //   // Store hash in your password DB.
  // });
  res.end();
};

var compareHashedPassword = function(req, res){

  var email = req.body.email;
  var password = req.body.password;

  // Create a session if a user is found in the database

  // bcrypt.compare("password", hash, function(err, bool) {
  //   if(err){
  //     return err;
  //   } else if(bool) {
  //     req.session.loggedIn = true;
  //     res.end(); 
  //   } else {
  //     res.redirect('/') // Go back to the home page
  //   }
  // }); 

    
};



var killSession = function(req, res){
  
  req.session.destroy(function(err){
    if(err){
      return err;
    } else {
      res.redirect('/login')
    }
  });

};


module.exports = {
  compare: compareHashedPassword,
  encrypt: encryptPassword,
  logout : killSession
};

