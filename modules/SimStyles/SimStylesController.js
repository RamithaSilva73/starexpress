const simstyles = require('./SimStyles');
const express = require('express');
const router = express.Router();

class simstylescontroller {
    constructor(app) 
    {
        router.post('/', simstyles.addstyle);
        app.use('/api/v1/idesk/similarstyle', router);
    }
}
module.exports = simstylescontroller;