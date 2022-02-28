const postData = require('../database/queries/postData');

const addUsers = (req, res) => {
    const { name, location } = req.body;
    postData(name, location)
        .then(() => {
            res.redirect('/')
        })
}

module.exports = addUsers;