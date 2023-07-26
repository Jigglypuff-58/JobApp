const db = require('../models/model.js');

const searchController = {};

searchController.search = async (req, res, next) => {
    const { languages, company, salary } = req.body;

    let query = `
    SELECT posts_table.*, job_languages.lang_id, languages.lang_name
    FROM posts_table
    LEFT JOIN job_languages ON posts_table.post_id = job_languages.post_id
    LEFT JOIN languages ON job_languages.lang_id = languages.lang_id
  `;
    //conditions array will hold potential query searches
    const conditions = [];
    //edge case for capitalization of company input
    let companyCheck;
    if(company){
    companyCheck = company;
    companyCheck = companyCheck.charAt(0).toUpperCase() + companyCheck.slice(1).toLowerCase();
    }
    if (companyCheck) {
        conditions.push(`company_name = '${companyCheck}'`);
    }
    //salary is an array min [0] max [1]
    if (salary.length > 0) {
        conditions.push(`salary >= ${salary[0]} AND salary <= ${salary[1]}`);
    }

    if (languages && languages.length > 0) {
        // Create a subquery to find post_ids associated with the given languages
        const subQuery = `
      SELECT DISTINCT post_id
      FROM job_languages
      WHERE lang_id IN (${languages.join(',')})
    `;
        conditions.push(`posts_table.post_id IN (${subQuery})`);
    }

    if (conditions.length > 0) {
        query += ' WHERE ' + conditions.join(' AND ');
    }

    try {
        const { rows } = await db.query(query);
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
        //return back array of object where unique posts contain languages in array
        const result = Object.values(postsWithLanguages);
        console.log(result);
        res.locals.result = result;
        return next();
    } catch (err) {
        console.error('An error occurred:', err);
        return next({
            log: 'No results',
            message: { err: `${err}` },
        });
    }
};

module.exports = searchController;
