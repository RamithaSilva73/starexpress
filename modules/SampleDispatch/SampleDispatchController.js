const SampleDispatch = require('./SampleDispatch');
const express = require('express');
const router = express.Router();

class SampleDispatchController {
    constructor(app) {
      

        router.post('/', SampleDispatch.addSampleDispatchFunction);
        router.get('/history', SampleDispatch.getsampledispatchHistory);
        app.use('/api/v2/sampledispatch', router);
        

    }
}
module.exports = SampleDispatchController;