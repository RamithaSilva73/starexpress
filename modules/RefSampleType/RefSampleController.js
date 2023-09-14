const RefSampleType= require('./RefSampleType');
const express = require('express');
const router = express.Router();

class RefSampleTypeController {
    constructor(app) {
       
        router.post('/',RefSampleType.addRefSampleType);
        app.use('/api/v1/RefSampleType', router);

    }
}
module.exports = RefSampleTypeController;