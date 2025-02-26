const express = require("express");
let app = express()
// console.log(app)

let jwt = require("jsonwebtoken");
const s_key = "Sha123"

let db = require("./db.js");

app.use(express.json())
// console.log(app.use(express.json()))

let user_data = {
    id : 1,
    name : "Shasha",
    role : "Full_Stack_Developer"
}

let token = jwt.sign(user_data, s_key)
console.log(token)

// let decode = jwt.verify(token, s_key)
// console.log(decode)



app.get("/signup", (req, res)=>{
    
    let user = jwt.decode(req.headers.authorization.split(" ")[1])
    // console.log(user.role)

    if(user.role == "Full_Stack_Developer"){
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
    err?console.log(err):console.log("Server Created...");
})


























































































// // Create a token using user registration and the if the users role is developer then it should display all the developers.
// // If the users role is admin then it should display all the users.

// const express = require("express");
// const jwt = require("jsonwebtoken")
// const app = express();
// const db = require("./db.js");

// app.use(express.json());
// s_key = "Sha123"

// // Root
// app.get("/", (req,res)=>{

//     res.send("Hi Shasha")

// })

// app.get("/developer", (req, res)=>{

//     console.log(req)
    


// })




// // app.get("/developer", (req,res)=>{
// //     const {role} = req.body;
// //     const qry = `select * from emp where role=?`;
// //     db.query(qry,[role],(err, result)=>{
// //         if(err){
// //             console.log(err);
// //             res.send(err);
// //         }else{
// //             if(result.length > 0){
// //                 let token = jwt.sign({role : role}, s_key)
// //                 console.log(token);
// //                 const decode = jwt.verify(token, s_key);
// //                 console.log(decode)
// //                 res.send(decode)
// //             }else{
// //                 console.log("Invalid Credentials.");
// //                 res.send("Invalid Credentials.")
// //             }

// //         }
        
// //     })

// // })






// app.listen(3000, (err)=>{
//     err?console.log(err):console.log("Server Started.")
// })