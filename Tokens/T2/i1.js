const express = require("express");
const jwt = require("jsonwebtoken");
const s_key = "Sha123"

const db = require("./db.js")

const app = express();

app.use(express.json());  // To handle req & res we use middle-ware

let details = {
    id : 1,
    name : "Shasha",
    // role : "developer" 
    role : "admin"
}


const token = jwt.sign(details, s_key)
// console.log(token)

app.get("/login", (req, res)=>{

    let user = jwt.decode(req.headers.authorization.split(" ")[1])
    // console.log(user.role)

    if(user.role == "developer"){
        // console.log("HI")

        let sql = `select * from emp where role=?`

        db.query(sql,[user.role] ,(err, data)=>{
            err?res.send(err):data.length>0?res.send(data):res.send("No data available.")
        })

    }
    else if(user.role == "admin"){
        let sql = `select * from emp`
        db.query(sql, (err, data)=>{
            err?res.send(err):data.length>0?res.send(data):res.send("No data available.")
        });
    }
    else{
        res.send("You are not authorized.")
    
    }


})


app.listen(3000, (err)=>{
    err?console.log(err):console.log("Server Started")
})


