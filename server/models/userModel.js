var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  // Later on add all the extra features to this
  password: String,
  favorites: []
});

var users = mongoose.model('users', UserSchema)

module.exports = {
  User: users
}




