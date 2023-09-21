const sizerange = require('./SizeRange');
const express = require('express');
const router = express.Router();

class simstylescontroller {
    constructor(app) 
    {
        router.post('/', sizerange.addsize);
        app.use('/api/v2/sizerange', router);
    }
}
module.exports = simstylescontroller;