const Sewsummary1 = require('./Sewsummary');
const express = require('express');
const router = express.Router();

class SewsummaryController {
    constructor(app) {
      

        router.post('/', Sewsummary1.addSewsummary);
    
       app.use('/api/v1/sewsummary', router);
        

    }
}
module.exports = SewsummaryController;

