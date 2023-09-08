const trimconsumption = require('./trimconsumption');
const express = require('express');
const router = express.Router();

class trimconsumptioncontroller {
    constructor(app) {
        router.get('/', trimconsumption.getAlltrimconsumption);
        router.post('/', trimconsumption.addtrimconsumption);                 
        router.get('/pending', trimconsumption.getPendtrimconsumption);
        
     //   router.put('/', stylemaster.updatestyle);
     //   router.delete('/:id', stylemaster.deletestyle);
        app.use('/api/v1/trimconsumption', router);

    }
}
module.exports = trimconsumptioncontroller;