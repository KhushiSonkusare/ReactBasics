// import express from 'express'
const express = require("express")
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client'));
app.use(express.json())

// app.get("/", (req, res) =>{
//     //res.send("Hello World");
//     res.sendFile("index.html", {root: __dirname + '/../client/'})
// });
// app.get("/styles.css", (req, res) =>{
//     //res.send("Hello World");
//     res.sendFile("styles.css", {root: __dirname + '/../client/'})
// });
// app.get("/client.js", (req, res) =>{
//     //res.send("Hello World");
//     res.sendFile("client.js", {root: __dirname + '/../client/'})
// });
var data = [
            {id: 1, name: "JSNDSD", price: 5000},
            {id: 2, name: "dhsb", price: 4000},
            {id: 3, name: "fiusjfi", price: 6000}
        ]
    
app.get("/products",(req, res)=>{
    res.json(data)
})
app.post("/newProducts",(req, res)=>{
    const payload = req.body;
    console.log(payload)
    data.push(payload)
    res.send("Successfully added")
})

app.delete("/deleteProduct", (req, res)=>{
    const key = req.body.id;
    data = data.filter(item => item.id != key);
    console.log(data);
    res.send("Deleted")

})

app.delete("/deleteProduct/:id", (req, res)=>{
    const key = req.params.id
    data = data.filter(item => item.id != key);
    console.log(data);
    res.send("Deleted")

})



app.listen(port, ()=>{
    console.log(`Express listening on port ${port}`)
});