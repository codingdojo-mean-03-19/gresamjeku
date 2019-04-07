const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');
const bcrypt = require('bcrypt');

app = express();
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());

app.use(express.static(__dirname + "/static"));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dojosecret_db',{useNewUrlParser: true});

//MESSAGE SCHEMA
var MessageSchema = new mongoose.Schema({
    content: {type:String, required: true, minlength: [10, 'Message should be at least 10 characters long!']},
});
var Message = mongoose.model('Message', MessageSchema);

//USER SCHEMA
var UserSchema = new mongoose.Schema({
  firstName: {type:String, required:true, minlength: [3, "Name must have at least 3 characters"]},
  lastName: {type:String, required:true, minlength: [3, "Name must have at least 3 characters"]},
  email: {type:String, required:true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please write a valid email address"],
  existing_email: "Email already used!"},
  password: {type:String, required:true},
  messages: [MessageSchema]
});
var User = mongoose.model('User', UserSchema); 

//login & register page
app.get('/', function(req,res){
    res.render('login');
});

//route action for register form
app.post('/register', function(req,res){
    console.log('REGISTER POST DATA:', req.body);
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    var user = new User({
        firstName: req.body.fname,
        lastName: req.body.lname,
        email: req.body.email,
        password: hash
    })
    user.save(function(err){
        if(err){ 
            console.log('Unsuccessful register of the user!');
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        }
        else {
            console.log('Successfully registered!');
            req.session.userId = user._id;
            res.redirect('/secret');
        }
    });
});

//route action for login form
app.post('/login', function(req,res){
    console.log('LOGIN POST DATA:', req.body);
    User.findOne({email:req.body.email}, function(err,user){
        if(err) {return render.json('Fields are empty');}
        if(user){
            console.log('Email found, check for password');
            var comparePass = bcrypt.compareSync(req.body.password, user.password);
            if (comparePass){
                req.session.userId = user._id;
                return res.redirect('/secret');
            }
        }
        res.redirect('/');
    });
});

//homepage
app.get('/secret', function(req,res){
    if(req.session.userId){ 
        User.findOne({_id:req.session.userId}, function(err,user){
            res.render('index', {user:user}); 
        })
    }
    else {res.redirect('/'); }
});

app.post('/message', function(req,res){
    var message = new Message({
        content: req.body.message,
        creator: User.findOne({_id:req.session.userId})
    })
    Message.create(req.body, function(err,data){
        if(err){
            console.log('Could not post the message!');
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/secret');
       }
       else {
            User.findOneAndUpdate({_id: req.session.userId}, {$push: {messages: data}}, function(err, data){
                 if(err){
                      // handle the error from trying to update the user
                 }
                 else {
                    console.log('Posted the message!');
                    res.redirect('/secret');
                 }
            })
        }
    })
})
//logout
app.get('/logout', function(req,res){
    req.session.destroy();
    res.redirect('/');
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})