const threadconsumption = require('./threadconsumption');
const express = require('express');
const router = express.Router();

class threadconsumptioncontroller {
    constructor(app) {
        router.get('/Completed',threadconsumption.getAllthreadconsumption);
        router.post('/',threadconsumption.addthreadconsumption);                
        router.get('/',threadconsumption.getPendthreadconsumption);
        router.get('/history', threadconsumption.gethistrythrdconsumption);
        app.use('/api/v1/threadconsumption', router);
    }
}
module.exports = threadconsumptioncontroller;