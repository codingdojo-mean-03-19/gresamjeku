var Quote = require('../models/quote.js');

module.exports = {
    get_quotes: function(req, res) {
    	Quote.find({}, function(err,quotes){
            if(err) {console.log('Something wen wrong!'); }
            else {console.log('Successfully showed quotes!'); }
            res.render('result',{quotes: quotes});
          });
    },
    post_quotes: function(req, res){
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
    }
}