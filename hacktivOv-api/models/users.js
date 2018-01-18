const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

let Schema = mongoose.Schema

const userSchema = new Schema({
  username:String,
  email:String,
  password:String
})

userSchema.pre('save', function(callback){
  let plainPassword = this.password
  bcrypt.hash(plainPassword,10)
  .then(hash=>{
    this.password = hash
    callback()
  })
  .catch(callback)
})


const UserHack = mongoose.model('UserHack', userSchema)

module.exports = UserHack