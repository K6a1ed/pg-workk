const getData = require('../database/queries/getData');

const getUsers = (req, res) => {
    getData()
        .then(data => {
            res.json(data.rows);
        })
};

module.exports = getUsers;