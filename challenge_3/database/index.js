const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shopping_cart'
});

connection.connect()

module.exports = {
    connection
}