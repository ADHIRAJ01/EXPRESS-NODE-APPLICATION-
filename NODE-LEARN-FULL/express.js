//EXPRESS IS FRAMEWORK DESIGNE OVER NODE JS TO PROVIDE FUNCTIONALITIES
/*
1. INSTALL EXPRESS -> npm install express
2. INSTALL express.json -> for parsing data in json format 
*/

const express = require('express');
const app = express();
const fs = require('fs');
const port = 3002;

app.get('/',(req,res)=>{
    console.log("RUNNING FINE");
    res.statusCode=200;
    const data=fs.readFileSync('demo.html');
    res.end(data);
});

app.get('/about',(req,res)=>{
    console.log(req.body);
    console.log("RUNNING FINE");
    res.statusCode=200;
    const data=fs.readFileSync('demoabout.html');
    console.log(req.body);
    res.end(data);
});

app.listen(port,()=>{
    console.log(`SERVER RUNNING AT http://localhost:${port}/`)
});