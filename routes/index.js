var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var fs = require('fs');

var json_f = './app/data.json';
var jsonData = jsonfile.readFileSync(json_f)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'mi6softlab' });
});

/* GET design page. */
router.get('/design', function (req, res, next) {
  res.render('design', {
    title: 'Design',
    content: jsonData.data.design
  });
});

/* GET dev page. */
router.get('/dev', function (req, res, next) {
  res.render('dev', { 
    title: 'Dev',
    content: jsonData.data.dev
  });
});

/* GET blog page. */
router.get('/blog', function (req, res, next) {
  res.render('blog', { 
    title: 'Blog',
    content: jsonData.data.blog 
  });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { 
    title: 'About',
    content: jsonData.data.about
  });
});

module.exports = router;
