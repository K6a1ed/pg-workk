// Add code below to get users info from your database

const connection = require('../config/connection');

const getData = () => {
    const sql = {
        text: 'SELECT * FROM users;',
    };

    return connection.query(sql)
};

module.exports = getData;
