'use strict'

const morgan = require('morgan');
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
const fs = require('fs');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const models = require('./models');

// Templating boilerplate setup
app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

// Logging Middleware
app.use(morgan('dev'));

// Body-Parsing options
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Routing
app.use(express.static(path.join(__dirname, './public')));
app.use('/', routes);

// Start the server
models.db.sync()
  .then(function () {
    console.log('All tables created!');
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
  })
  .catch(console.error.bind(console));

