const IswSummary= require('./IswSummary');
const express = require('express');
const router = express.Router();

class IswSummaryController {
    constructor(app) {
        router.post('/',IswSummary.addIswSummary);
        router.get('/history',IswSummary.getiswsummaryhistory);
        app.use('/api/v1/iswsummary', router);
    }
}
module.exports = IswSummaryController;