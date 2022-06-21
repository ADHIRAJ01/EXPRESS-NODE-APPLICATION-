const express = require('express');
const app= express();
const hostname = 'localhost';
const fs=require('fs');
const port = 7000;


app.use(express.static('public'));

app.all('/', (req, res, next) => {
    console.log("app all request");
    res.send("200 REQUEST ")
    next();
});
app.get('/', (req, res, next) => {
    console.log(" APP GET REQUESTS  ");
})
app.delete('/', (req, res, next) => {
    console.log("got relete request");
})

app.listen(port , ()=>{
    console.log(`server working on http://${hostname}:${port}`);
})