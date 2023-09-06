var express = require('express');
var router = express.Router();

/* GET 게시글 page. */
router.get('/', function(req, res, next) {
    res.render('posts.pug', { title: '게시글' });
});

module.exports = router;