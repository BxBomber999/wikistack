const express = require('express');
const router = express.Router();
const models = require('../models');
const userRouter = require('./user');
const wikiRouter = require('./wiki');
const Page = models.Page;
const User = models.User;

router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

router.get('/', (req, res, next) => {
  Page.findAll()
    .then( pages => {
      res.render('index', {
        pages: pages
      });
    });
});

module.exports = router;
