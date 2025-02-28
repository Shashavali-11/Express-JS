const express = require("express");
const app = express();
const multer = require("multer"); 
const path = require("path");
const fs = require("fs");
const connection = require("./db.js")

app.use(express.json())

//  If folder not present create it.
{

    const folder_path = path.join(__dirname+"/uploads")
    
    const exists = fs.existsSync(folder_path);
    if(!exists){
        fs.mkdirSync(folder_path, {recursive:true})
    }

}

// Store the files which are comming from request.
{
    const my_storage = multer.diskStorage({
        destination : (req, file, cb)=>{
            cb(null, "./uploads")
        },
        filename:(req, file, cb)=>{
            cb(null, Date.now()+file.originalname)   
        }
    
    })
    
    const upload = multer({storage:my_storage}) 

}

//  Handling the request from user
{
    
    app.post("/upload",upload.single("file"), (req, res)=>{
    
        if(req.file.mimetype == "image/png" && req.file.size <= 5*1024*1024){
            
            console.log("Valid Format.");
            console.log(req.file)
            // res.send(req.file)
            res.send("Valid Format.")
    
        }else{
            
            console.log("Invalid Format.");
            res.send("Invalid Format.")
        }
    
    
    })


}









// Connect to Server
app.listen(3000, (err)=>{
    err?console.log(err):console.log("Server Connected...");
})