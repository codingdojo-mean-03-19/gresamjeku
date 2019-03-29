var express = require("express");
var session = require('express-session');
var app = express();

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function (request, response){
  if(request.session.count){ request.session.count++;}
  else { request.session.count = 1;}
  response.render('index', {count: request.session.count});
});

app.get('/add_2_counts', function(request, response){
  request.session.count++;
  response.redirect('/');
});

app.get('/reset_counts', function(request,response){
  request.session.destroy();
  response.redirect('/');
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})
