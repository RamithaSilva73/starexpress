const RefSampleType= require('./RefSampleType');
const express = require('express');
const router = express.Router();

class RefSampleTypeController {
    constructor(app) {
       
        router.post('/',RefSampleType.addRefSampleType);
        router.get('/history',RefSampleType.getrefsampletypeHistory);
        app.use('/api/v1/refsampletype', router);

    }
}
module.exports = RefSampleTypeController;