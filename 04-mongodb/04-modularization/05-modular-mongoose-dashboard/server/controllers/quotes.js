const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoosee_db',{useNewUrlParser: true});
var AnimalsSchema = new mongoose.Schema({
  kind: { type:String, required:true},
  name: { type:String, required:true}
});

mongoose.model('Animal', AnimalsSchema); 
var Animal = mongoose.model('Animal')

module.exports = {
    index: function(req, res) {
    	Animal.find({}, function(err,animals){
            if(err) { console.log('Something went wrong!'); }
            else    { console.log('Successfully showed animals!'); }
            res.render('index', { animals: animals });
            });
    },
    show: function(req, res, id) {
    	Animal.findOne({_id: mongoose.Types.ObjectId(id)}, function(err,animal){
        if(err){ 
            console.log('Could not find the animal with ID:', req.params.id);
            res.redirect('/');
        }
        else { 
            console.log('Done'); 
            res.render('show', {animal:animal});
            }
        });
    },
    edit: function(req, res, id) {
    	Animal.findOne({_id: mongoose.Types.ObjectId(id)}, function(err,animal){
        if(err){ 
            console.log('Could not find the animal with ID:', req.params.id);
            res.redirect('/');
        }
        else { 
            console.log('Done'); 
            res.render('edit', {animal:animal});
        }
        });
    },
    update: function(req,res,id){
      Animal.findOne({_id: mongoose.Types.ObjectId(id)}, function(err, animal){
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
    },
    create: function(req,res){
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
    },
    destroy: function(req,res,id){
      Animal.remove({_id: mongoose.Types.ObjectId(id)}, function(err){
        if(err){ 
            console.log('Could not delete the animal with ID:', req.params.id);
        }
        else { 
            console.log('Done'); }
            res.redirect('/');
        });
    }
};
