const express = require("express");
const port = 3003;
const app = express();

// Async Function to get a filter  
async function abc(order, cat) {
    apiurl = `https://fakestoreapi.com/products`;
    const apidata = await fetch(apiurl, { method: "get" });
    const data = await apidata.json();
    let arr = [];
    // Sorting and Filtering
    if(order == "asce" || order == "desc"){
        // Sorting according to asce & desc
        data.sort((a,b) => order == "asce" ? a.price - b.price : b.price - a.price);
        let arr = [];
        // filtering 
        data.map((val) => {
            if (cat === "mens" && val.category === "men's clothing") arr.push(val);
            if (cat === "womens" && val.category === "women's clothing") arr.push(val);
            if (cat === "jewelery" && val.category === "jewelery") arr.push(val);
            if (cat === "electronics" && val.category === "electronics") arr.push(val);
        });
        return arr;
    }
}
// Using Get method  
app.get("/", async (req, res)=>{
    console.log(req.query)
    // Calling the function in get method
    let result = await abc(req.query.order, req.query.cat);
    res.json(result)
})

// Listening to the server
app.listen(port, () => {
  console.log("Server Started.");
});


