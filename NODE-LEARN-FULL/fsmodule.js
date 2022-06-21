/*WORKING WITH FILES , READING , WRITING*/

const fs = require('fs');

//READFILE -> takes file name , type of file , callback(return error if error occurred , return data if data is occurred)
//SIMPLE FILE WHILE IT TAKE TIME TO READ DATA LET OTHER PROCESS WORK , ASYNCHRONOUS IN NATURE
fs.readFile('file1.txt','utf8',(err,data) => {
    console.log(err , data);
})


//SYNCHRONOUS FILE LET FILE EXECUTE FIRST
const a = fs.readFileSync('file1.txt');
console.log("a data = "+a.toString());
//});       //read a file with file , type of file , callback function

console.log("WORKING");


//WRITING ON FILE DONE HERE
var data = 'WRITTEN TO THE FILE, IN writeFile first takes file name , second takes data , third callback function';
fs.writeFile("file1.txt",data,(err,data)=>{
  console.log('WRITTEN TO THE FILE, IN writeFile first takes file name , second takes data , third callback function',err , data);
});


console.log("reading done");



//fs.writeFile('file1.txt',"WRITING NEW DATA",'utf-8',()=>{});
//fs.close();