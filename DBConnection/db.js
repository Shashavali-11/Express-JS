const mysql = require("mysql2");

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "23r",
    port : "3307"

});

connection.connect((err)=>{
    if(err){
        console.log("Error")
    }
    else console.log("Connected Successfully.")
});

module.exports=connection;