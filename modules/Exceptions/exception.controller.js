const exception = require('./exception');
const express = require('express');
const router = express.Router();

class exceptionController {
    constructor(app) {
        router.get('/oracle', exception.getoracleexception);
        router.get('/star', exception.getstarexception);

        router.post('/star', exception.poststarexception);
        router.post('/oracle', exception.postoracleexception);

        router.put('/oracle', exception.updateoracleexception);
        router.put('/star', exception.updatstarexception);
        
        app.use('/api/v1/exceptions', router);
    }
}
module.exports = exceptionController;