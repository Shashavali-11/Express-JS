const mysql = require("mysql2");

const connection = mysql.createConnection({

    host : "localhost",
    user : "root",
    password : "root",
    database : "23r"

})

connection.connect((err)=>{
    err?console.log(err):console.log("Database Connected.")
})

module.exports = connection;