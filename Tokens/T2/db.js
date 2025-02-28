const mysql = require("mysql2");
require("dotenv").config()

const connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    port : process.env.DB_PORT
})

connection.connect((err, info)=>{
    err?console.log(err):console.log("Database Connected.");
})

module.exports = connection;