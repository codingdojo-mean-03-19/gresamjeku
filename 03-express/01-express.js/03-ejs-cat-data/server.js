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

app.get("/cats", function (request, response){
    response.render('cats');
});

app.get("/cat/1", function (request, response){
  var cat = {img: '/images/cat1.jpg', name: 'Oscar', food: 'Seeds', sleep: 'Bed'};
  response.render('details', {cat: cat});
});

app.get("/cat/2", function (request, response){
  var cat = {img: '/images/cat2.jpg', name: 'Max', food: 'Raw Fish', sleep: 'Wardrobe'};
  response.render('details', {cat: cat});
});

app.get("/cat/3", function (request, response){
  var cat = {img: '/images/cat3.jpg', name: 'Sam', food: 'Peas', sleep: 'Computer'};
  response.render('details', {cat: cat});
});

app.get("/cat/4", function (request, response){
  var cat = {img: '/images/cat4.jpg', name: 'Misty', food: 'Carrots', sleep: 'Bed'};
  response.render('details', {cat: cat});
});

app.get("/cat/5", function (request, response){
  var cat = {img: '/images/cat5.jpg', name: 'Coco', food: 'Bread', sleep: 'Sink'};
  response.render('details', {cat: cat});
});

app.get("/cat/6", function (request, response){
  var cat = {img: '/images/cat6.jpg', name: 'Milo', food: 'Cheese', sleep: 'Bags'};
  response.render('details', {cat: cat});
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
