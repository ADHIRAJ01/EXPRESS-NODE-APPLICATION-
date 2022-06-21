//BUILDING HTTP SERVER

//create http , hostname , port then create server , then listen to server

const http = require('http');
const fs = require('fs');       //taking file system to render files
const hostname = 'localhost';   //declaring url hostname , port 
const path = require('path');
const port = process.env.PORT||3000;        //SET ENVIRONMENT ON WHICH PORT YOU WANT THE SERVER TO LISTEN
const filePath = path.resolve('./demo.html');       //defining path of file

const server = http.createServer((req,res)=>{           //create server
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    if(req.url=='/') {
        fs.createReadStream('demo.html').pipe(res); //render the file
      //  res.end('<h1>WORKING WELL</h1>')       
    }
    else if(req.url=='/about') {                //render for about link
        const data = fs.readFileSync('./demoabout.html');
        res.end(data.toString());
        console.log(req.body);
    }
    else {
        res.statusCode=400;
        res.end(`<h1>ERROR : FILE NOT FOUND ${res.statusCode} </h1>`);
    }
    
    
});

server.listen(port ,hostname , ()=>{                        //listen to server
    console.log(`working fine at ${hostname}:${port}/`);
}); 