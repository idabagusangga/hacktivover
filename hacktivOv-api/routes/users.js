var express = require('express');
var router = express.Router();
const UserController = require('../controller/users')

/* GET users listing. */
router.post('/register', UserController.createUser)
router.post('/login', UserController.login)

module.exports = router;
