const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();
const port = 2003;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.post('/user', (req, res) => {
    console.log(req.body);
    // upon receiving request from client, server needs to do something
    // this is where the server asks the database to query itself
    
    const queryString = `INSERT INTO user(name, email, password) VALUES ("${req.body.name}", "${req.body.email}", "${req.body.password}")`;
    db.query(queryString, function (error, results) {
        if (error) {
            res.status(500).send();
        } else {
            console.log('Posted info to the database!');
            res.status(200).send();
        }
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))

// INSERT INTO tbl_temp2 (fld_id)
//   SELECT tbl_temp1.fld_order_id
//   FROM tbl_temp1 WHERE tbl_temp1.fld_order_id > 100;