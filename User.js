var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({  //Defines the schema for the user table on mongoDB
    name: String,
    email: String,
    password: String
});
mongoose.model('User',UserSchema);
module.exports = mongoose.model('User');