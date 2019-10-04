const db = require('./index');

const controllers = {
    postInfo: (req, res) => {        
        const queryString = `INSERT INTO user(name, email, password) VALUES ("${req.body.name}", "${req.body.email}", "${req.body.password}")`;
        db.query(queryString, function (error, results) {
            if (error) {
                res.status(500).send();
            } else {
                console.log('Posted info to the database!');
                res.status(200).send();
            }
        });
    }
};

module.exports = controllers;
