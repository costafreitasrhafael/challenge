const express = require('express');
const routes = require('./routes');
var cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }


require('./database');

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(routes);

app.listen(3333);