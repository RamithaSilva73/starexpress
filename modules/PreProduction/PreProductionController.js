const preprod = require('./PreProduction');
const express = require('express');
const router = express.Router();

class preprodcontroller {
    constructor(app) 
    {
        router.post('/', preprod.addpreprod);
        app.use('/api/v1/preproduction', router);
    }
}
module.exports = preprodcontroller;