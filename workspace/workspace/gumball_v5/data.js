var mongoose = require('mongoose');
var User = require('./user_model.js');
mongoose.connect('connected', function() {
User.find({},function (err, users) {
 console.log();
    
  })
});
