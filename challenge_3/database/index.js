const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'checkout_info'
});

connection.connect()

module.exports = {
    connection
}