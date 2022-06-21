//AUTHENTICATING LOGIN + PASSWORD AND THEN SENDING COOKIE THROUGH HEADER
//DOING AUTHENTICATION WITH HTTPS RATHER HTTP


// CRYPTOGRAPHY AND SECURITY 

/*----------------IN CMD CREATING TEMPORARY CERTIFICATE AND PRIVATE KEY --------------------------------
openssl genrsa 1024 > private.key
openssl req -new -key private.key -out cert.csr
openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem
----------------------------------------------------------------------------------------------------*/

//SENDER , RECEIVER =(GETS SECRET KEY) 


//SSL ( secure socet layer)
//TLS ( Transport layer security )


/*
SSL / TLS Handshake 
I need to communicate with you securely (C > S)
Here's my certificate ( public key + certification by CA )  ( C < S )
 Verify server credentials 
 Pre - master secret encrypted with server's public key  ( C>S )
 Generate Generate Session key Session key *********
  ………… Symmetric encyrption from now on     ( C <-> S )
   Message encrypted with Session Key   ( C > S )
   Message encrypted with Session Key   ( Client  < Server  ) 
    Client Server
*/ 


// WE NEED TO GENERATE CERTIFICATE FROM ORGANISATIONS FOR VERIFIED CERTIFICATION 
// WE MAY USE OPENSSL for testing purpose for generating keys 

/*
openssl genrsa 1024 > private.key                   //generate private key  
openssl req -new -key private.key -out cert.csr        // generate certificate 
openssl x509 -req -in cert.csr -signkey private.key -out certificate.pem    //distribute certificate to server side
*/
//---------------------------USING NODE ----------------------------------------------------------------
var https= require("https");
var fs = require("fs");

var options = {
    key: fs.readFileSync(__dirname+'/private.key'),
    cert: fs.readFileSync(__dirname+'/certificate.pem')
};

var secureserver = https.createServer(options , app);
//------------------------------------------------------------

// . . .IN www file in bin

var https = require('https');
var fs = require('fs');

// . . .

app.set('secPort',port+443);

// . . .

/**
 * Create HTTPS server.
 */ 
 
var options = {
  key: fs.readFileSync(__dirname+'/private.key'),
  cert: fs.readFileSync(__dirname+'/certificate.pem')
};

var secureServer = https.createServer(options,app);

/**
 * Listen on provided port, on all network interfaces.
 */

secureServer.listen(app.get('secPort'), () => {
   console.log('Server listening on port ',app.get('secPort'));
});
secureServer.on('error', onError);
secureServer.on('listening', onListening);

// . . .
//----------------------IN APP.JS FILE
// . . .

// Secure traffic only
app.all('*', (req, res, next) => {
  if (req.secure) {
    return next();
  }
  else {
    res.redirect(307, 'https://' + req.hostname + ':' + app.get('secPort') + req.url);
  }
});

// . . .


//NEXT FILEUPLOAD.JS




//------------------------------------------------------------------------------------------------------
//---------------------EXPRESS SETUP-----------------------------------------------------
/*
cmd
go to bin folder inside project 
DOWNLOAD OPENSSL OR USE WEBSITE TO GENERATE SSL CERTIFICATE 



MAKING SECURE CERTIFICCATE THEN PASSING IT WITH SERVER 

ALSO WE NEEED TO REDIRECT ALL INCOMING SERVER REQUEST ON http TO https USING REDIRECT METHOD TO SECURE OUR CREDENTIALS 
*/
