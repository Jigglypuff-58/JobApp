const db = require('.Models/model.js');
//login, sign up, log out, 
const userController = {};

userController.verifyuser = (req, res, next) => {
  // get username and password and query database to verify that username matches hashed password
}

userController.createUser = (req, res, next) => {
  // hash user password and store in database with username
}