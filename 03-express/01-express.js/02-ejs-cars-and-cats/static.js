var express = require("express");
console.log("Let's find out what express is", express);

var app = express();
console.log("Let's find out what app is", app);

app.get('/', function(request, response) {
   console.log("The request object", request);
   console.log("The response object", response);
   response.send("<h1>Hello Express</h1>");
})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/cars", function (request, response){
    response.render('cars');
})
app.get("/cats", function (request, response){
    response.render('cats');
})
app.get("/cars/new", function (request, response){
    response.render('form');
})
app.listen(8000, function() {
  console.log("listening on port 8000");
})
