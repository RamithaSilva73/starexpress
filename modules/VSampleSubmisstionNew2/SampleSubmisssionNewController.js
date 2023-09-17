const Samplesubmission = require('./SampleSubmissionNew');
const express = require('express');
const router = express.Router();

class SammpleSubmissionController {
    constructor(app) {
       
        router.post('/', Samplesubmission.addSampleSubmission);
        app.use('/api/v1/SampleSubmission', router);

    }
}
module.exports = SammpleSubmissionController;