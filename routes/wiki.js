const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;



router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {

  const page = Page.build({
    title: req.body.title,
    content: req.body.pageContent
    //urlTitle: req.body.urlTitle
  })
  page.save()
  res.send(req.body);
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

module.exports = router;
