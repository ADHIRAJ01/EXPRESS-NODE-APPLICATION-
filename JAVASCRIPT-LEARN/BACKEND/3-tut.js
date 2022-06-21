const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
        res.write("welcome to homepage");           //RENDERING FILES 
        // res.read(fs.readFile('1-tut.js')); // -not working 
        if(req.url == '/'){
            readFile('./1-tut.js',(err, data) => {
                console.log(data);
            })
            // res.end();
        }
        res.end();
})

server.listen(5000,() => {
    console.log("server runing");
});

//FIRST HOST CREATED 
// creating and rendering to page  