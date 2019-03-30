const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.unsubscribe(bodyParser.urlencoded());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(3000, function() {
    console.log("listening on port 3000!");
});

require('./routes/index.js')(app, server);