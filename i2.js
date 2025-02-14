const express = require("express");
const fs = require("fs");
const port = 3003;

const app = express();



// "/" = root ===> js file not loading
app.get("/", (req, res)=>{
  fs.readFile("Task1.js", "utf-8", (err,data)=>{
    if(err) {
      res.send({
        status : 400,
        msg : err.message
      })
    }else {
      // d1 = JSON.parse(data)
      res.send({
        status : 200,
         msg : "Successfully Getted .",
         data : data
      })
    }

  })

}) 


// sweets api -> pathanme - sweets method(get) data -index.json

// /Sweets
app.get("/sweets", (req, res)=>{
  fs.readFile("index.json", "utf-8", (err, data)=>{
    if(err) {
      res.send({
        status : 400,
        msg : err.message
      })
    } else {
      res.send({
        status : 200,
        msg : "Successfully Get.",
        data : JSON.parse(data) 
      })
    }
  })
})

// /sweets/id
app.get("/sweets/:id", (req, res)=>{
  fs.readFile("index.json", "utf-8", (err,data)=>{
    if(err){
      res.send({
        status : 400,
        msg: err.message
    
      })
    }else{

      let d1 = JSON.parse(data);
      // console.log(d1)
      
      var filterdata = d1.sweets.filter((val)=>{
        // if(req.params.id == val.id){
        //   return val.id == req.params.id;
        // }else if(val.id < req.params.id){
        //   return "No Data."
        // }

        return val.id == req.params.id;

      })

      res.send({
        status : 200,
        msg:"Successfully Get",
        data : filterdata
    
      })
    }
  })
  
})





app.listen(port, ()=>{
    console.log("Server Started.")
})


