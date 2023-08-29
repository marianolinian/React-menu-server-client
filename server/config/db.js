// Import the 'Pool' class from the 'pg' library, which is a popular PostgreSQL client for Node.js.
const pgp = require('pg-promise')();

// Import the 'dotenv' library and call the 'config()' function to read the configuration values from the '.env' file.
require('dotenv').config();

// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_PORT:', process.env.DB_PORT);
// console.log('DB_DATABASE:', process.env.DB_DATABASE);


// Create a new instance of the 'Pool' class with the configuration values for the PostgreSQL database.
// These values are read from the '.env' file using the 'process.env' object.
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
};

const db = pgp(config);

// Export the 'pool' instance, so it can be imported and used in other parts of the application to interact with the PostgreSQL database.
module.exports = db;


