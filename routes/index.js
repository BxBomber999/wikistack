const express = require('express');
const router = express.Router();

const client = require('../db');

console.log('Entered Routes');

router.get('/', (req, res, next) => {
  console.log('Hello World');
});

module.exports = router
