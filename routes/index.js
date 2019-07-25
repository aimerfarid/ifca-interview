var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IFCA 2.0', menuId:'home' });
});

module.exports = router;
