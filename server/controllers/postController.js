const db = require('../models/model.js');
//create post, check post
const postController = {};

postController.createPost = async (req, res, next) => {
  const { job_title, salary, url, message, company_name, user_id, languages } = req.body;

  // Insert into posts_table
  const query = `INSERT INTO posts_table (job_title, salary, url, message, company_name, user_id)
                 VALUES ($1, $2, $3, $4, $5, $6)
                 RETURNING *`;
  const insertPostValues = [job_title, salary, url, message, company_name, user_id];

  try {
    const { rows: insertedPost } = await db.query(query, insertPostValues);
    const postId = insertedPost[0].post_id;

    // Insert into job_languages for each lang id
    const insertJobLanguagesQuery = `INSERT INTO job_languages (post_id, lang_id)
                                     VALUES ($1, $2)`;
    const insertJobLanguagesValues = languages.map((lang_id) => [postId, lang_id]);

    // Execute the insert query for each language
    for (const values of insertJobLanguagesValues) {
      await db.query(insertJobLanguagesQuery, values);
    }

    // What data should be sent back after created post??
    res.locals.post = 'successfully created post!';
    return next();
  } catch (err) {
    console.error('An error occurred:', err);
    return next({
      log: 'Cannot create post',
      message: { err: `${err}` },
    });
  }
};

postController.getPost = async (req, res, next) => {
  //get all posts for front end to display
  const query = `SELECT posts_table.*, job_languages.lang_id, languages.lang_name
    FROM posts_table
    LEFT JOIN job_languages ON posts_table.post_id = job_languages.post_id
    LEFT JOIN languages ON job_languages.lang_id = languages.lang_id;`
  try {
    const { rows } = await db.query(query);
    // Create an object to store the posts and languages array
    const postsWithLanguages = {};

    // for each row of posts
    rows.forEach((row) => {
      const postId = row.post_id;
      //if their is not an object with the post_id yet add it with everything it contained
      if (!postsWithLanguages[postId]) {
        postsWithLanguages[postId] = { ...row, languages: [] };
      }

      const { lang_name } = row;
      //if there are languages in any post add it to the languages array for that unique object
      if (lang_name) {
        postsWithLanguages[postId].languages.push(lang_name);
      }
    });
    //return back unique posts with languages in array
    const result = Object.values(postsWithLanguages);
    res.locals.allPosts = result;
    return next();
  } catch {
    console.error('An error occurred:', err);
    return next({
      log: 'Cannot get posts',
      message: { err: `${err}` },
    });
  }
}

module.exports = postController;