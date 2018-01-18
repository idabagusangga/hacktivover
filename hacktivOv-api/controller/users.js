const UserModel = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class UserController {
  static createUser (req, res) {
    let newUser = new UserModel ({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    
    newUser.save()
    .then(resp=>{
      res.status(200).json({
        data: resp
      })
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        err: err
      })
    })
  }
  static login (req, res) {
    console.log(req.body);
    UserModel.find({
      email: req.body.email
    })
    .then(result=>{
      console.log(result);
      bcrypt.compare(req.body.password, result[0].password)
      .then(response=>{
        let payload = {
          id: result[0]._id,
          email: result[0].email
        }
        let token = jwt.sign(payload,process.env.SECRET)
        res.status(200).json({
          token: token
        })
      })
      .catch(err=>{
        console.log(err);
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
}

module.exports = UserController;