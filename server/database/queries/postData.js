// Add code below to insert user info to your database

const connection = require('../config/connection');

const addUsers = (name, location) => {
    return connection.query({
        text: 'INSERT INTO users (name, location) VALUES ($1, $2);',
        values: [name, location]
    });
};

module.exports = addUsers;
