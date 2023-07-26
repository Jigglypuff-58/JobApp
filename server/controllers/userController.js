const db = require('../models/model.js');
const bcrypt = require('bcrypt');
//login, sign up, log out, 
const userController = {};

userController.verifyUser = async (req, res, next) => {
  console.log('in verifyuser mw')
  // get username and password and query database to verify that username matches hashed password
  const { userName, password } = req.body;
  // do not allow input fields to be empty
  if (typeof userName != 'string' || typeof password != 'string') {
    return next({
      log: 'User entered empty fields',
      message: {err: 'Input fields cannot be empty'}
    })
  }
  const query = `SELECT * FROM user_table WHERE user_table.username = '${userName}'`;

  await db.query(query)
    .then(data => {
      if (data.rows.length === 1) {
        bcrypt
          .compare(password, data.rows[0].password)
          .then(result => {
            if (result === true) {
              res.locals.result = 'verified';
              return next();
            }
            else {
              res.locals.result = 'username or password incorrect';
              res.locals.skip = true;
              return next();
            }
          })
      }
      else {
        res.locals.result = 'username or password incorrect';
        res.locals.skip = true;
        return next();
      }
    })
    .catch(err => next({
      log: 'An error occured searching the database for username',
      message: {err: `${err}`}
    }));
}

userController.createUser = async (req, res, next) => {
  // check to make sure the inputs are of the right type first
  // query database for the username, if it's taken, respond to front end saying its taken
  // if its available, hash their password and store it in database, along with other info in the req body
  const { userName, password, email } = req.body;
  // do not allow input fields to be empty
  if (typeof userName != 'string' || typeof password != 'string') {
    return next({
      log: 'User entered empty fields',
      message: {err: 'Input fields cannot be empty'}
    })
  }
  const query = `SELECT * FROM user_table WHERE user_table.username = '${userName}'`;

  await db.query(query)
    .then(data => {
      if (data.rows.length === 1) {
        res.locals.result = 'unavailable';
        return next();
      }
      else {
        bcrypt 
          .hash(password, 10)
          .then(hashedPw => {
            const insertionQuery = `INSERT INTO user_table (username, password, email) VALUES ('${userName}', '${hashedPw}', '${email}');`;
            db.query(insertionQuery)
              .then(data => {
                res.locals.result = 'successful';
                return next();
              })
              .catch(err => next({
                log: 'An error occured with inserting the user into database',
                message: {err: `${err}`}
              }));
          })
      }
    })
    .catch(err => next({
      log: 'An error occured searching the database for username',
      message: {err: `${err}`}
    }));


}

module.exports = userController;