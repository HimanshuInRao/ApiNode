let mysql = require("mysql");

let connection = mysql.createConnection({
    host:'localhost',
    database:'examarks-tnr',
    user:'root',
    password:'Himanshuchauhan007',
});

module.exports = connection; 