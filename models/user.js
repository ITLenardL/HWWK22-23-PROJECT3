var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// User Schema
var UserSchema = mongoose.Schema({
  password: {
    type: String,
  },
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    lowercase: true
  },
  name: {
    type: String,
    uppercase: true,
    index: true
  },
  memberType: {
    type: String,
    default: "member"
  },
  gamesOwing: {
    type: Number,
    default: 0
  }
});


var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.getUserByUsername = function (username, callback) {
  var query = { username: username };
  User.findOne(query, callback);
}

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}