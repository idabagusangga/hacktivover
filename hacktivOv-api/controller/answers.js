const AnswerModel = require('../models/answers')
const QuestionModel = require('../models/questions')
const jwt = require('jsonwebtoken')

class AnswerController {
  static createAnswer (req, res) {
    jwt.verify(req.body.token,process.env.SECRET, (err, decoded)=>{
      console.log(decoded);
      let newAnswers = new AnswerModel ({
        answer: req.body.answer,
        username: decoded.email,
        questionId: req.body.questionId
      })
      newAnswers.save()
      .then(response=>{
        console.log(response);
        console.log(req.body.questionId);
        QuestionModel.findById(req.body.questionId)
        .then(result=>{
          console.log('--------->', result);
          result.answerId.push(response._id)
          result.save()
          .then(resp=>{
            res.status(200).json({
              data: resp
            })
          })
          .catch(err=>{
            console.log(err);
          })
        })
        .catch(err=>{
          console.log('error creating comment', err)
        })
      })
      .catch(err=>{
        res.status(500).json({
          err: err
        })
      })
    })
  }
  static getAllAnswers (req, res) {
    AnswerModel.find()
    .then(result=>{
      res.status(200).json({
        data: result
      })
    })
    .catch(err=>{
      res.status(500).json({
        err: err
      })
    })
  }
}
module.exports = AnswerController;