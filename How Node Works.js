// Express.js Day-1;

const fs = require("fs");
const { nextTick } = require("process");



setTimeout(()=>{
    console.log("SetTimeOut.")
}, 0)

fs.readFile("./index.txt", "utf-8", (err, data)=>{
    if(err) throw err
    else console.log("I/O System : " ,data)
})


setImmediate(()=>{
    console.log("SetImmediate.")
})

function hello(){

    return new Promise((res, rej)=>{
        if(true){
            res("Promise")
        }else {
            rej("Reject.");
        }
    }) 
}

hello().then((val)=>{
    console.log(val)
})

nextTick(()=>{
    console.log("Next Tick.")
})


console.log("Normal Shasha");