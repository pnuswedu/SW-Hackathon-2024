const mysql       = require('mysql');
const dbconfig    = require('../config/database.js');
const connection  = mysql.createConnection(dbconfig);
const crypto      = require('crypto');

exports.member_insert = function (res) {
    let body = res.body;
    let pw = crypto.createHash('sha256').update(body.pw).digest('base64');
    connection.query('INSERT INTO login_info\nvalues (${body.id}, ${pw}, ${body.name}, ${body.phone}, ${body.email}, ${body.class}, ${body.stu_num})', (error) => {
        if (error) throw error;
        res.send("<script>location.href += /success");
    });
}
  
exports.login = function (res) {
    connection.query('SELECT * from login_info', (error, rows) => {
        if (error) throw error;
        // console.log('User info is: ', rows);
        res.send(rows);
    });
}