var express = require('express');
var app = express();
let path = require('path');
let mongoose              =  require("mongoose");
let passport              =  require("passport");
let bodyParser            =  require("body-parser");
let LocalStrategy         =  require("passport-local");
let passportLocalMongoose =  require("passport-local-mongoose");
let User                  =  require("./models/User");


mongoose.set('useNewUrlParser', true); 
mongoose.set('useFindAndModify', false); 
mongoose.set('useCreateIndex', true); 
mongoose.set('useUnifiedTopology', true); 
mongoose.connect("mongodb://localhost/auth_demo_app");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



const indexHome  = require('./routes/home');
app.use('/home',indexHome);



const indexDiabetul = require('./routes/diabetul');
app.use('/diabetul',indexDiabetul);

const indexUserProfile = require('./routes/user-profile');
app.use('/userprofile',indexUserProfile);

const indexCheckAnalize = require('./routes/check-anlize');
app.use('/checkanalize',indexCheckAnalize);

const indexInfoDiabetTest = require('./routes/diabet-informatii-test');
app.use('/diabet-informatii-test',indexInfoDiabetTest);

const indexTest = require('./routes/test');
app.use('/test',indexTest);
  
var port = process.env.PORT || 7000; 
app.listen(port, function () { 
    console.log("Server Has Started!"); 
}); 