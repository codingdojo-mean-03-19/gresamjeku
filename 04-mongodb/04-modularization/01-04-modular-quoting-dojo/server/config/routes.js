const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes_db');
var QuotesSchema = new mongoose.Schema({
    name:  { type:String, required:true},
    quote: { type:String, required:true},
   });

var Quote = mongoose.model('Quote', QuotesSchema); 

module.exports = function(app){
    app.get('/', function (req, res) {
        res.render('index');
    });
    
    app.get('/result', function(req, res) {
      Quote.find({}, function(err,quotes){
        if(err) {console.log('Something wen wrong!'); }
        else {console.log('Successfully showed quotes!'); }
        res.render('result',{quotes: quotes});
      });
    });
    
    app.post('/quotes', function(req, res){
      console.log('POST DATA:', req.body);
      var quote = new Quote({name: req.body.name, quote: req.body.quote});
      quote.save(function(err){
        if(err) { 
          console.log('Something went wrong!');
          for(var key in err.errors){
            req.flash('registration', err.errors[key].message);
          }
          res.redirect('/');
        }
        else { 
          console.log('Successfully added quote!');  
          res.redirect('/result');
        }
      })
    });
}