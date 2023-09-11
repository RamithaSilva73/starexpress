const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const auth=require('./middleware/auth')
const customError = require('./utilities/CustomError')
const globalErrorHandler = require('./utilities/ErrorController')
var cors = require('cors')


async function init() {
 
   app.get('/',(req,res)=>{
      res.send("Middleware ERP API");
   })

   //app.use(bodyparser.json({ limit: '50mb' }));
   //app.use(bodyparser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

   app.use(express.urlencoded({extended: true}));
   app.use(express.json())

   //app.use(cors())
   app.use(cors({origin: '*'}));

   user=require('./authentication/user')
   app.use('/api/v1/login',user)
   
   app.use(auth)

   users=require('./utilities/users')
   app.use('/api/v1/users',users)

   /* app.all('*',(req,res,next)=>{
      // res.status(404).json({
      //    status:'Fail',
      //    message : 'Can Not Find The The URL'
      const err = new customError('Can Not Find The The URL',404)
      next(err)
   }); */

   const approuting = require('./modules');
   const appmodules = new approuting(app);
   appmodules.init();
}
init();
app.use(globalErrorHandler)

module.exports = app;


