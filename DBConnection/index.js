const connection = require("./db.js");
// console.log(connection)

// const sql = `create table emp (empid int, ename varchar(25), sal int, join date )`
// const sql = `CREATE TABLE Persons (
//     PersonID int,
//     LastName varchar(255),
//     FirstName varchar(255),
//     Address varchar(255),
//     City varchar(255)
// )`

const sql = `CREATE TABLE emp (
    emp_id SERIAL PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    designation VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    joining_date DATE
);
`


connection.query(sql, (err, result)=>{
    if(err){
        console.log("Error")
    }else console.log("Query Exectued");
});

