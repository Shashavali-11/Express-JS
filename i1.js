const express = require("express");
port = 3000;

const app = express();

// console.log(app)

app.use(express.json())

app.get("/body", (req,res)=>{
    res.send({
        msg:req.body
    })
})

// Class 
app.put("/:id",  (req, res)=>{

    res.send({
        msg:"HI This is Express.",

        // msg:req.query

        msg1:req.params

    })
})

// Pratice
app.get("/:id",  (req, res)=>{
    console.log(req.query)

    res.send({
        // msg:"HI This is Express."

        // msg:req.query

        msg:req.params

    })
})








app.listen(port, ()=>{
    console.log("Server Started");
})