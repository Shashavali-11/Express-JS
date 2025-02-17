const express = require("express");
const app = express();
const port = 3000;
const mid = require("./m1.js")
app.use(express.json())

app.get("/",mid.mid1,(req, res)=>{

    res.send("I am from Server.")

})

app.post("/", (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(port, console.log("Server Started..."))