// import express from 'express';
// import mysql from 'mysql';
// import dbconfig from './config/database.js';
// import check_word from './check.js';

const express     = require('express');
const sql         = require('./js/sql_func.js');
const register_chk= require('./js/register_chk.js');
const config      = require('./js/config.js');

const app = express();

// configuration =========================
app.set('port', process.env.PORT || 3000); // site is open the n port

app.use(express.json()); // for use POST
app.use(express.urlencoded({extended: true})); // POST data process

config.config(app, __dirname);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + "/register/index.html");
});

app.post('/register_chk', (req, res) => {
  register_chk.register(res);
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + "/login/index.html");
});

app.post('/login_chk', (req, res) => {
  sql.login(res);
});

app.get('/register_chk/success', (req, res) => {
  res.send('/register/success.html');
});

app.get('/users', (req, res) => {
  sql.login(res);
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});