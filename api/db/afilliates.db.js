const mysql = require('mysql2');
require('dotenv').config();


const afilliatesdb = mysql.createConnection({
    host: process.env.MY_HOST,
    user: process.env.MY_USER,
    password: process.env.MY_PASSWORD,
    database: process.env.MY_DATABASE,
    connectionLimit:10

});

module.exports = afilliatesdb;