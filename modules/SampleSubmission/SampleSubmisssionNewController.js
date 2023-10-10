const Samplesubmission = require('./SampleSubmissionNew');
const express = require('express');
const router = express.Router();

class SammpleSubmissionController {
    constructor(app) {
       
        router.post('/', Samplesubmission.addSampleSubmission);
        router.get('/history', Samplesubmission.getsamplesubmissionHistory);
        app.use('/api/v1/samplesubmission', router);

    }
}
module.exports = SammpleSubmissionController;