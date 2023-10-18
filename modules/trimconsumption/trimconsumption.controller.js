const trimconsumption = require('./trimconsumption');
const express = require('express');
const router = express.Router();

class trimconsumptioncontroller {
    constructor(app) {
        router.get('/Completed', trimconsumption.getAlltrimconsumption);
        router.post('/', trimconsumption.addtrimconsumption);                 
        router.get('/', trimconsumption.getPendtrimconsumption);
        router.get('/history', trimconsumption.gethistrytrimconsumption);
        
        app.use('/api/v1/trimconsumption', router);

    }
}
module.exports = trimconsumptioncontroller;