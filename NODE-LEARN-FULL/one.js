//  (function(exports , require , module , __filename , __dirname) {          //nodejs automatically raps function in this format by default

one = {
    name:'Adhiraj',
    age: 20
}

console.log(one);
//console.log(exports ,  require , module , __filename , __dirname);
//module.exports = one;

 //   })


data = {
    "name": "learn-node-from-start",
    "version": "1.0.0",
    "description": "",
    "main": "async.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node index"
    },
    "author": "ADHIRAJ PRATAP SINGH",
    "license": "ISC"
  }
  
  
 console.log(JSON.stringify(data));
 console.log(data);