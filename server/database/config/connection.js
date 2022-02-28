// Add code below to connect to your database
require('env2')('.env');
const { Pool } = require('pg')

let URL_DATABASE = '';

if (process.env.NODE_ENV === 'test') {
    URL_DATABASE = process.env.DB_URL_TEST
} else {
    URL_DATABASE = process.env.DB_URL
};

if (!URL_DATABASE) {
    throw new Error('DB has an error!')
}

const connection = new Pool({
    connectionString: process.env.DB_URL,
    ssl: false,
});

module.exports = connection;