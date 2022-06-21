// CROSS ORIGIN RESOURCE SHARING
// INCLUDING DATA FROM DIFFERENT SITES 
//ALLOWING ACCESS FROM LIMITED OR ALL SOURCES TO OUR BACKEND

//SAME ORIGIN POLICY -> should hve same origin , same port , same host

//BROWSERS restrict cross-origin HTTP requests within scripts e.g. - XMLHttpRequest or Fetch

/*
* INSTALL CORS 
    npm i cors -save
THEN CONFIGURE CORS IN APPLICATION
* SIMPLE CORS ENABLING ALL CORS REQUESTS  
    app.use("cors");
* ENABLING CORS FOR SPECIFIC ROUTES 
    app.use(cors("origin":"169.258.25.121"));
* CONFIGURING OPTIONS FOR VARIOUS HEADERS 
*/


//----------FILE PRACTICAL----------------------------------------------------------------
// IN ROUTES FOLDER CREATING NEW ROUTER cors.js

const express = require('express');
const cors = require('cors');
const app = express();

//whitelist stores all sites info trusted and to be applied for cors 
const whitelist = ['http://localhost:3000', 'http://localhost:443' ];

app.use(cors(whitelist));

// var corsOptions = 