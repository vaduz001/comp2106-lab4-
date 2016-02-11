var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stuff' });
});


router.get('/German', function(req, res, next) {
  res.render('German', { myName: 'German' });
});

router.get('/Olga', function(req, res, next) {
    res.render('Olga', { myName: 'Olga' });
});

router.get('/Juja', function(req, res, next) {
    res.render('Juja', { myName: 'Juja' });
});

router.get('/Vadim', function(req, res, next) {
    res.render('Vadim', { myName: 'Vadim' });
});
module.exports = router;
