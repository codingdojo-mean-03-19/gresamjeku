const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');

app = express();
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoosee_db',{useNewUrlParser: true});
var AnimalsSchema = new mongoose.Schema({
  kind: { type:String, required:true},
  name: { type:String, required:true}
});

mongoose.model('Animal', AnimalsSchema); 
var Animal = mongoose.model('Animal') 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//homepage
app.get('/', function(req, res) {
  Animal.find({}, function(err,animals){
    if(err) { console.log('Something went wrong!'); }
    else    { console.log('Successfully showed animals!'); }
    res.render('index', { animals: animals });
  });
});
//add new animal
app.get('/mongooses/new', function(req, res){
  res.render('add');
})
//show information about the particular animal
app.get("/mongooses/:id", function (req, res){
  console.log("The requested ID is:", req.params.id);
  Animal.findOne({_id: mongoose.Types.ObjectId(req.params.id)}, function(err,animal){
    if(err){ 
      console.log('Could not find the animal with ID:', req.params.id);
      res.redirect('/');
    }
    else { 
      console.log('Done'); 
      res.render('show', {animal:animal});
    }
  });
});
//edit information of the particular animal
app.get("/mongooses/edit/:id", function(req,res){
  console.log("The requested edit ID is:", req.params.id);
  Animal.findOne({_id: mongoose.Types.ObjectId(req.params.id)}, function(err,animal){
    if(err){ 
      console.log('Could not find the animal with ID:', req.params.id);
      res.redirect('/');
    }
    else { 
      console.log('Done'); 
      res.render('edit', {animal:animal});
    }
  });
});
//route action of edit form
app.post("/update/:id", function(req,res){
  console.log("The requested update ID is:", req.params.id);
  Animal.findOne({_id: mongoose.Types.ObjectId(req.params.id)}, function(err, animal){
    animal.kind = req.body.kind;
    animal.name = req.body.name;
    animal.save(function(err){
      if(err) {
        console.log('Animal has not been updated!');
        for(var key in err.errors){
          req.flash('registration', err.errors[key].message);
        }
        res.redirect('/mongooses/:id')
      }
      else {
        console.log('Update was successful!');
        res.redirect('/');
      }
    });
  });
});
//route action of new animal form
app.post('/mongooses', function(req,res){
  console.log('POST DATA:', req.body);
  var animal = new Animal({kind: req.body.kind, name:req.body.name});
  animal.save(function(err){
    if(err) { 
      console.log('Something went wrong!');
      for(var key in err.errors){
        req.flash('registration', err.errors[key].message);
      }
      res.redirect('/mongooses/new');
    }
    else { 
      console.log('Successfully added quote!');  
      res.redirect('/');
    }
  });
})
//delete the particular animal
app.get('/mongooses/destroy/:id', function(req,res){
  Animal.remove({_id: mongoose.Types.ObjectId(req.params.id)}, function(err){
    if(err){ 
      console.log('Could not delete the animal with ID:', req.params.id);
    }
    else { 
      console.log('Done'); }
      res.redirect('/');
  });
});


app.listen(8000, function() {
  console.log("listening on port 8000");
})