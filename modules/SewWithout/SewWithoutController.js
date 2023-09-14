const SewWithout = require('./SewWithout');
const express = require('express');
const router = express.Router();

class SewWithoutController {
    constructor(app) {
       
        router.post('/', SewWithout.addSewWithout);
        app.use('/api/v1/SewWithout', router);

    }
}
module.exports = SewWithoutController;