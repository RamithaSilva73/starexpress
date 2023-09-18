


 const app = require('./app');
 const http =require('http')

var httpServer = http.createServer(app);

httpServer.listen("5050",()=>{
    console.log('HTTP Server Started at port:'+"5050");
});

