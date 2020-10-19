const express = require('express')
const mysql = require('mysql')
const app = express()
var connection = mysql.createConnection({
    host: '123.57.56.38',
    user: 'root',
    password: '988209',
    database: 'mydata'
});


module.exports = connection