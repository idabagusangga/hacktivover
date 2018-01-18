const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

let Schema = mongoose.Schema

const questionSchema = new Schema({
  ownersId: [{
    type: Schema.Types.ObjectId,
    ref: 'UserHack'
  }],
  question: String,
  points: [{
    type: Schema.Types.ObjectId,
    ref: 'UserHack'
  }],
  answerId: [{
    type: Schema.Types.ObjectId,
    ref: 'Answer'
  }]
})

const Question = mongoose.model('Question', questionSchema)

module.exports = Question;