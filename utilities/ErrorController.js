const app = require('../app');
const sqlError = require('./SQLErrorLog')

module.exports = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';   
    
    if (error.serverName==process.env.DBSERVER.toUpperCase()){
        res.status(error.statusCode).json({
            status : error.statusCode,
            message: error.message,
            stackTrace: error.stack,
            error: error 
        })
    }
    else {
        res.status(error.statusCode).json({
            status : error.statusCode,
            message: error.message
        })
    }
 
    const newObj={
        status : error.statusCode,
        message: error.message,
        stackTrace: error.stack,
        error: error
    }
    const jsnFile = JSON.stringify(newObj)
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const SQLErrorLog = require('./SQLErrorLog')
    const NewErrLog = new SQLErrorLog(req.method,fullUrl,req.body,error.statusCode,error.message,error.stack,jsnFile) 
}
