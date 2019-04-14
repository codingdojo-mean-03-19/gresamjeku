const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/config/database');
require('./server/config/task.routes')(app);



app.listen(port, () => console.log(`express listening on port ${ port }`));