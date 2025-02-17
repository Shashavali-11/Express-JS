const express = require("express");
const fs = require("fs");
// const port = 3003;

const app = express();
app.use(express.json())


app.get("/", (req, res)=>{

    // fetch("https://openrouter.ai/api/v1/chat/completions", {
    //     method: "POST",
    //     headers: {
    //       "Authorization": "Bearer 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",
    //       "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
    //       "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       "model": "google/gemini-2.0-pro-exp-02-05:free",
    //       "messages": [
    //         {"role": "user", "content": req.body.msg}
    //       ],
    //       "top_p": 1,
    //       "repetition_penalty": 1
    //     })
    // })


    fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
          "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "qwen/qwen-vl-plus:free",
          "messages": [
            {"role": "user", "content": req.query.msg}
          ],
          "top_p": 1,
          "temperature": 1,
          "repetition_penalty": 1
        })
      })
    .then((val)=>{
        return val.json()
    }).then((val)=>{
        res.send(val)
    })
      

})


app.listen(3000, ()=>{
    console.log("Server Started.");
})