

// non ssl


 const app = require('./app');
 const http =require('http')


//non ssl




//ssl code

/* var fs = require('fs');



//var credentials = {key: privateKey, cert: certificate};
//const express = require('express');
//const app = express();


// your express configuration here

var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);





httpServer.listen("5050",()=>{
    console.log('HTTP Server Started at port:'+"5050");
});


//ssl code

