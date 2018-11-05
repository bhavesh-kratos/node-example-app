var express = require('express');
var router = express.Router();
var controller = require('../controllers/users.controller');

/* GET register users */
router.get('/register', function(req, res, next) {
    res.render('user-register', { title: 'Express' });
});


/* POST register users */
router.post('/register', controller.register);

/* GET users listing. */
router.get('/', controller.listing);

module.exports = router;
