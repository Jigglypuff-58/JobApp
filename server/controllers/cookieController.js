const db = require('../models/model.js');
const cookieController = {};
const bcrypt = require('bcrypt');

cookieController.setCookie = async (req, res, next) => {
  if(res.locals.skip) {
    return next();
  }
  const { userName } = req.body;
  // let userid;
  
  try{
    const hashed = await bcrypt.hash(userName, 10);
    res.cookie('ssid', `${hashed}`, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax'
    });
    const searchQuery = `SELECT username, user_id FROM user_table WHERE username = '${userName}';`;
    const data = await db.query(searchQuery);
    const addQuery = `DELETE FROM cookie_table WHERE user_id = ${data.rows[0].user_id}; INSERT INTO cookie_table (cookie, user_id) VALUES ('${hashed}', ${data.rows[0].user_id});`;
    db.query(addQuery);
    res.locals.userid = data.rows[0].user_id;
    return next();
  } catch (err) {
    console.error('An error occurred:', err);
    return next({
      log: 'error in cookie controller',
      message: { err: `${err}` },
    });
  }
}
    // .then(hashed => {
    //   res.cookie('ssid', `${hashed}`, {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: 'lax'
    //   })
//       const searchQuery = `SELECT username, user_id FROM user_table WHERE username = '${userName}';`;
//       db.query(searchQuery)
//         .then(data => {
//           const addQuery = `DELETE FROM cookie_table WHERE user_id = ${data.rows[0].user_id}; INSERT INTO cookie_table (cookie, user_id) VALUES ('${hashed}', ${data.rows[0].user_id});`;
//           db.query(addQuery)
//           userid = data.rows[0].user_id;
         
//         })
//          res.locals.userid = userid;
//          console.log('res', res.locals.userid)
//          console.log('userid', userid)
//    return next();      
//     })
// }



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
