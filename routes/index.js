var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var fs = require('fs');

var json_f = './app/data.json';

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'mi6softlab' });
});

router.get('/design', function (req, res, next) {
  var jsonData = jsonfile.readFileSync(json_f)

  //console.log(jsonData.data.design);
  
  res.render('design', { 
    title: 'Design',
    content: jsonData.data.design
  });
});

router.get('/dev', function (req, res, next) {
  res.render('dev', { title: 'Dev' });
});

router.get('/blog', function (req, res, next) {
  res.render('blog', { title: 'Blog' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
