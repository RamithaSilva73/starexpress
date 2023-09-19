const Samplesubmission = require('./SampleSubmissionNew');
const express = require('express');
const router = express.Router();

class SammpleSubmissionController {
    constructor(app) {
       
        router.post('/', Samplesubmission.addSampleSubmission);
        app.use('/api/v2/samplesubmission', router);

    }
}
module.exports = SammpleSubmissionController;