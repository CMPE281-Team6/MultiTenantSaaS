var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
prjdesc : String,
notes : String,
taskdesc : String
});

var regSchema = new Schema({
name : String,
lname : String,
pref :String,
email: String,
pwd: String
});

var loginSchema = new Schema({
username : String,
password : String
});

var forgotpwdschema = new Schema({
email : String    
});

var kanbanschema = new Schema({
    
    
});

var ip   = process.env.IP;



mongoose.connect("mongodb://"+ip+":"+27017+"/test");
module.exports = mongoose.model('users', userSchema); 
module.exports = mongoose.model('users', regSchema); 
module.exports = mongoose.model('users', loginSchema); 


