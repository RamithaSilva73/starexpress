const IswSummary= require('./IswSummary');
const express = require('express');
const router = express.Router();

class IswSummaryController {
    constructor(app) {
       
        router.post('/',IswSummary.addIswSummary);
        app.use('/api/v2/IswSummary', router);

    }
}
module.exports = IswSummaryController;