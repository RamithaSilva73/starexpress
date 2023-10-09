const preprod = require('./PreProduction');
const express = require('express');
const router = express.Router();

class preprodcontroller {
    constructor(app) 
    {
        router.post('/', preprod.addpreprod);
        router.get('/history', preprod.getpreproductionHistory);
        app.use('/api/v1/preproduction', router);
    }

}
module.exports = preprodcontroller;