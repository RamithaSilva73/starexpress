

// non ssl


 const app = require('./app');



//non ssl




//ssl code

/* var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/newpkey.key', 'utf8');
var certificate = fs.readFileSync('sslcert/www_stargarments_lk.crt', 'utf8'); */

//var credentials = {key: privateKey, cert: certificate};
//const express = require('express');
//const app = express();

// your express configuration here

var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);

httpServer.listen("5050",()=>{
    console.log('HTTP Server Started at port:'+"5050");
});
/* httpsServer.listen("8443",()=>{
    console.log('HTTPS Server Started at port:'+"8443");
});
 */

//ssl code

