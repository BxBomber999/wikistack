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

// Templating boilerplate setup
app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

// Routing
app.use(express.static(path.join(__dirname, './public')));
app.use('/', routes);

// Logging Middleware
app.use(morgan('dev'));

// Body-Parsing options
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Start the server
const server = app.listen(3000, (req, res, next) => {
  console.log('Server Listening on port 3000');
});

