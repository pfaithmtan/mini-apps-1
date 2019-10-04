const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index');
const controller = require('../database/dbMethods');

const app = express();
const port = 2003;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.post('/user', controller.postInfo);

app.listen(port, () => console.log(`Server listening on port ${port}!`))

// INSERT INTO tbl_temp2 (fld_id)
//   SELECT tbl_temp1.fld_order_id
//   FROM tbl_temp1 WHERE tbl_temp1.fld_order_id > 100;