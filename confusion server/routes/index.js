var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.end(__dirname);
  //res.render(path.join(__dirname,'index'));
});

module.exports = router;
