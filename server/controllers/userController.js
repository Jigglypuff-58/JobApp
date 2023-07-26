const db = require('../models/model.js');
//login, sign up, log out, 
const userController = {};

userController.verifyuser = (req, res, next) => {
  // get username and password and query database to verify that username matches hashed password
}

userController.createUser = async (req, res, next) => {
  // check to make sure the inputs are of the right type first
  // query database for the username, if it's taken, respond to front end saying its taken
  // if its available, hash their password and store it in database, along with other info in the req body
  const { userName, password, email} = req.body;
  const query = `SELECT * FROM user_table WHERE user_table.username = '${userName}'`;

  const pgResponse = await db.query(query)
    .then(data => {
      res.locals.result = data.rows[0].password;
      console.log(res.locals.result);
      return next();
    })
    .catch(err => next({
      log: 'An error occured',
      message: {err: `${err}`}
    }));


}

module.exports = userController;