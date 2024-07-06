// import express from 'express';
// import mysql from 'mysql';
// import dbconfig from './config/database.js';
// import check_word from './check.js';

const express    = require('express');
const mysql      = require('mysql');
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);
const check      = require('./check.js');

const app = express();

// configuration =========================
app.set('port', process.env.PORT || 3000); // site is open the n port

app.use(express.json()); // for use POST
app.use(express.urlencoded({extended: true})) // POST data process

app.use(express.static('html')); //using the folder
app.use(express.static('register'));
app.use(express.static('login'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + "/register/index.html");
});

app.post('register_chk', (req, res) => {
  if(check.check_word(res.body.id)) {
    make_alert("ID 입력형식이 잘못되었습니다.");
  }
  else if(check.pw != check.pw_chk) {
    make_alert('비밀번호가 다릅니다.');
  }
  else if(check.check_word(res.body.pw)) {
    make_alert('PW 입력형식이 잘못되었습니다.');
  }
  else if(check.check_special(res.body.pw)) {
    make_alert('공백, -;"'+"'\/\\:+=은 사용할 수 없습니다.");
  }
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + "/login/index.html");
});

app.get('/login_chk', (req, res) => {

  connection.query('SELECT * from login_info', (error, rows) => {
    if (error) throw error;
    // console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});


function go_back(res) {
  res.send('<script>history.back()</script>');
}

function make_alert(res, str) {
  res.send("<script>alert("+ str + ")</script>");
  go_back(res);
}