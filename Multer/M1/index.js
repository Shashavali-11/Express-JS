const express = require("express");
const multer = require("multer")
const path = require("path")
const fs = require("fs");

const app = express();

app.use(express.json());

const folder_path = path.join(__dirname+"/uploads")
// console.log(folder_path)

const exists = fs.existsSync(folder_path);
// console.log(exists)

if(!exists){
    fs.mkdirSync(folder_path, {recursive:true});
    
}
// console.log(folder_path)



// Where to store file (Multer Code)
const my_storage = multer.diskStorage({
    
    // destination : "./uploads",
    destination : function(req, file, cb){
        cb(null, "./uploads")
    },

    filename : function(req, file, cb){
        cb(null, file.originalname)

    }
})
// console.log(storage)

// Telling to multer how to use stored files
const upload = multer({storage:my_storage})   //{key }

//  Integrate with 
app.post("/upload", upload.single("file"), (req, res)=>{

    // console.log(req.body)

    res.send("File uploaded successfully.")

})



app.listen(3000, (err)=>{
    err?console.log(err):console.log("Server Created...")
})
