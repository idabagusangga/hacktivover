const UserModel = require('../models/users')
const QuestionModel = require('../models/questions')
const jwt = require('jsonwebtoken')

class QuestionController {
  static createQuestions (req, res) {
    jwt.verify(req.body.token,process.env.SECRET, (err, decoded)=>{
      let newQuestions = new QuestionModel ({
        ownersId : decoded.id,
        question : req.body.question,
      })
      newQuestions.save()
      .then(response=>{
        res.status(200).json({
          data: response
        })
      })
      .catch(err=>{
        res.status(500).json({
          err: err
        })
      })
    })
  }
  static getAllQuestions (req, res) {
    QuestionModel.find().populate('ownersId').populate('answerId')
    .then(response=>{
      res.status(200).json({
        data: response
      })
    })
    .catch(err=>{
      res.status(500).json({
        err: err
      })
    })
  }
}
module.exports = QuestionController;