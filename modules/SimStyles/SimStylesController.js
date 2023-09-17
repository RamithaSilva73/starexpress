const simstyles = require('./SimStyles');
const express = require('express');
const router = express.Router();

class simstylescontroller {
    constructor(app) 
    {
        router.post('/', simstyles.addstyle);
        app.use('/api/v2/idesk/similarstyle', router);
    }
}
module.exports = simstylescontroller;