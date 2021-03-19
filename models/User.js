const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test-bogdan:Thtlfrctyuy99@test.rckks.mongodb.net/diabetApp?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const userSchema = new mongoose.Schema({
    first_name: String,
    last_name:String,
    email:String,
    password:String
});
userSchema.plugin(passportLocalMongoose);

const User =  new mongoose.model("User",userSchema);

module.exports = User;
