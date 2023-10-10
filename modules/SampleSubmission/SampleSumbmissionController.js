const samplesubmission = require('./SampleSumbmission');
const express = require('express');
const router = express.Router();

class samplesubmissioncontroller {
    constructor(app) 
    {
        router.post('/', samplesubmission.samplesubmission);
        router.get('/history', samplesubmission.samplesubmission);

        app.use('/api/v2/samplesubmission', router);
    }
}
module.exports = samplesubmissioncontroller;