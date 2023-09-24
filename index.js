
const app = require('./app');

const {exec} = require("node:child_process");


process.on('uncaughtException', err => {

console.log(err.message);
var p='"' + String(err.message).replace('"', '""') + '"'
var ev='eventcreate /id 5 /T Error /L SYSTEM /so STARAPI /d ' +p
        
   exec(ev, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
   })

setTimeout(() => {
   process.exit(1);
}, 3000);

})















const http =require('http')




var httpServer = http.createServer(app);






httpServer.listen("5050",()=>{
    console.log('HTTP Server Started at port:'+"5050");
});

