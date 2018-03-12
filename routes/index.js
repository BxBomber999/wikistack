const express = require('express');
const router = express.Router();
const db = require('../models');

db.User.create({
  name: 'Jeff Gore',
  email: 'jgore00@gmail.com'
});

router.get('/', (req, res, next) => {
  console.log('Hello World');
  next();
});

module.exports = router;
