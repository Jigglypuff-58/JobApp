const { Pool } = require('pg');

const PG_URI =
  'postgres://jrzopdhb:YKchMCfxFuFbrSa59-bN4t8KdN7aflGf@mahmud.db.elephantsql.com/jrzopdhb';

/* create a new pool using the connection URI */
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('Executed query', text);
    return pool.query(text, params, callback);
  },
};