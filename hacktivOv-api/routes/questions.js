var express = require('express');
var router = express.Router();
const QuestionController = require('../controller/questions')

/* GET home page. */
router.get('/', QuestionController.getAllQuestions)
router.post('/add', QuestionController.createQuestions)

module.exports = router;
