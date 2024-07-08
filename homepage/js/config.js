const path = require('path');
const express = require('express');

exports.config = function (app, __dirname) {
    app.use(express.static(path.join(__dirname, 'html'))); //using the folder
    app.use('/register', express.static(path.join(__dirname, 'register')));
    app.use('/login', express.static(path.join(__dirname, 'login')));
    app.use('/pict', express.static(path.join(__dirname, 'pict')));
    app.use('/js', express.static(path.join(__dirname, 'js')));
}
