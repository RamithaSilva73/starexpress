const Sewsummary1 = require('./Sewsummary');
const express = require('express');
const router = express.Router();

class SewsummaryController {
    constructor(app) {
      

        router.get('/', Sewsummary1.getAllSewsummary);
    
       app.use('/api/v1/Sewsummary', router);
        

    }
}
module.exports = SewsummaryController;

