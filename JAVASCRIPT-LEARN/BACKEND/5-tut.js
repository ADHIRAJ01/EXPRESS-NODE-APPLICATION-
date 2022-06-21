/* EXPRESS MIDDLEWARE  
can we worked under express application 
install express apllicaltion first 
*/
const express = require('express');
const app= express();
const path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    console.log("working");
})

app.listen(5000);