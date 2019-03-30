var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.get('/', function(req, res) {
    res.render('index');
})

app.get("/result", function (req, res){
    res.render('result', {user: req.session.user});
})

app.post('/result', function (req, res){
    console.log("POST DATA \n\n", req.body)
    req.session.user = req.body;
    console.log(req.session.user);
    res.redirect('/result');
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})
