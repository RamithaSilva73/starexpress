const SewWithout = require('./SewWithout');
const express = require('express');
const router = express.Router();

class SewWithoutController {
    constructor(app) {
       
        router.post('/', SewWithout.addSewWithout);
        router.get('/history', SewWithout.getSewWithoutHistory);
        app.use('/api/v1/sewwithout', router);

    }
}
module.exports = SewWithoutController;