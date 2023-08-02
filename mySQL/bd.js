const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '15902332',
    database: 'serpro',
    ssl: false
});


module.exports = connection




