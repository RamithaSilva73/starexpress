const SampleDispatch = require('./SampleDispatch');
const express = require('express');
const router = express.Router();

class SampleDispatchController {
    constructor(app) {
      
        router.post('/', SampleDispatch.addSampleDispatchFunction);
    
       app.use('/api/v1/SampleDispatch', router);
        

    }
}
module.exports = SampleDispatchController;