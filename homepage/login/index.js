const mysql      = require('mysql');
const dbconfig   = require('../config/database.js');
const connection = mysql.createConnection(dbconfig);

function login() {
    connection.query('SELECT * from login_info', (error, rows) => {
        if (error) throw error;
        // console.log('User info is: ', rows);
        // res.send(rows);
    });
}
