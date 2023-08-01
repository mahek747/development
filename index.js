const express = require("express");
const app = express();
const port = process.env.port || 1823;

app.get("/",(req, res) =>{
    res.send("server");
});

const start = async () =>{
    try{
        app.listen(port, () =>{
           console.log(`${port}server is running`);
        })
    }
    catch(error){
        console.log(error);
    }
}