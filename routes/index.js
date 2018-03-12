const express = require('express');
const router = express.Router();
const db = require('../models');
const userRouter = require('./user');
const wikiRouter = require('./wiki');

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

router.get('/', (req, res, next) => {
  res.render('layout');
})



module.exports = router;
