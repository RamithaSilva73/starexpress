const smv = require('./smv');
const express = require('express');
const router = express.Router();

class smvcontroller {
    constructor(app) {
        router.get('/Completed',smv.getsmvbulletin);
        router.post('/',smv.addsmvrequest);                
        router.get('/',smv.getPendsmvrequest);
        router.get('/history', smv.gethistrysmv);
        app.use('/api/v2/SMVRequest', router);
    }
}
module.exports = smvcontroller;