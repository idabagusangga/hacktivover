var express = require('express');
var router = express.Router();
const AnswerController = require('../controller/answers')

router.post('/add', AnswerController.createAnswer)
router.get('/', AnswerController.getAllAnswers)

module.exports = router;