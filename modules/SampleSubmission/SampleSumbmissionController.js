const samplesubmission = require('./SampleSumbmission');
const express = require('express');
const router = express.Router();

class samplesubmissioncontroller {
    constructor(app) 
    {
        router.post('/', samplesubmission.samplesubmission);
        app.use('/api/v2/samplesubmission', router);
    }
}
module.exports = samplesubmissioncontroller;