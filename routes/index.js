var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'mi6softlab' });
});

router.get('/design', function(req, res, next){
  res.render('design', { title: 'Design' });
});

router.get('/dev', function(req, res, next){
  res.render('dev', { title: 'Dev' });
});

router.get('/blog', function(req, res, next){
  res.render('blog', { title: 'Blog' });
});

router.get('/about', function(req, res, next){
  res.render('about', { title: 'About' });
});

module.exports = router;
