const db = require('../models/model.js');
const cookieController = {};
const bcrypt = require('bcrypt');

cookieController.setCookie = async (req, res, next) => {
  if(res.locals.skip) {
    return next();
  }
  const { userName } = req.body;
  bcrypt
    .hash(userName, 10)
    .then(hashed => {
      res.cookie('ssid', `${hashed}`, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax'
      })
      const searchQuery = `SELECT username, user_id FROM user_table WHERE username = '${userName}';`;
      db.query(searchQuery)
        .then(data => {
          const addQuery = `DELETE FROM cookie_table WHERE user_id = ${data.rows[0].user_id}; INSERT INTO cookie_table (cookie, user_id) VALUES ('${hashed}', ${data.rows[0].user_id});`;
          db.query(addQuery)
        })
   return next();      
    })
}



// cookieController.deleteCookie = (req, res, next) => {
//   const { userName } = req.body;
//   bcrypt
//     .hash(userName, 10)
//     .then(hashed => {
//       const deletionQuery = `DELETE FROM cookie_table WHERE cookie = '${hashed}';`;
//       db.query(deletionQuery)
//       return next();
//     })
 
// }


module.exports = cookieController;
