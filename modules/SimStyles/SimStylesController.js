const simstyles = require('./simstyle');
const express = require('express');
const router = express.Router();

class simstylescontroller {
    constructor(app) 
    {
        router.post('/', simstyles.addstyle);
        app.use('/api/v1/simstyles', router);
    }
}
module.exports = simstylescontroller;