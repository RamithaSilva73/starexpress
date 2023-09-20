const simstyles = require('./SizeRange');
const express = require('express');
const router = express.Router();

class simstylescontroller {
    constructor(app) 
    {
        router.post('/', simstyles.addstyle);
        app.use('/api/v2/similarstyle', router);
    }
}
module.exports = simstylescontroller;