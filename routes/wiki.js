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
  });
  page.save()
    .then( () => res.redirect(page.route));
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
});

router.get('/:urlTitle', function (req, res, next) {
  const url = req.params.urlTitle;
  const requestedPage = Page.findOne({
    where: {urlTitle: url}
  })
    .then( requestedPage => res.render('wikipage', {
      requestedPage: requestedPage
    }));
});

module.exports = router;
