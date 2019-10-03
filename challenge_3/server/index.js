const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();
const port = 2003;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server listening on port ${port}!`))