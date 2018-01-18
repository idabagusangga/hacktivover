const mongoose = require('mongoose')

let Schema = mongoose.Schema


const answerSchema = new Schema({
  answer: String,
  username: String,
  points: [{
    type: Schema.Types.ObjectId,
    ref: 'UserHack'
  }]
})

const Answer = mongoose.model('Answer', answerSchema)

module.exports = Answer;