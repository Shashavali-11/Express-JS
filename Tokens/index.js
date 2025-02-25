const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("./db.js");
const connection = require("./db.js");

const app = express()

app.use(express.json());

const s_key = "shasha143"

app.get("/", (req, res)=>{
    res.send("Hi shasha.")

})

app.post("/login", (req,res)=>{
    // const {username, password} = req.body;
    const {job} = req.body;
    let qry = `select * from emp where job=?`;
    connection.query(qry,[job], (err, result)=>{
        if(err){
            console.log(err)
            res.send(err);
        }else{

            if(result.length>0){
                let token = jwt.sign({job:job},s_key)
                console.log(token)

                const de = jwt.verify(token, s_key);
                console.log(de)

            }else{
                res.send("Invalid Credentials from User.")
            }
        }

    })

})



app.listen(3000, (err)=>{
    err?console.log(err):console.log("Server Started.")
})