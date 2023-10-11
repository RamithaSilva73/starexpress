const LotMasterData= require('./LotMasterData');
const express = require('express');
const router = express.Router();

class MasterlotDataController {
    constructor(app) {
       
        router.post('/',LotMasterData.addLotMasterData);
        router.get('/history',LotMasterData.getlotmasterdataHistory);
        app.use('/api/v1/masterlotdata', router);

    }
}
module.exports = MasterlotDataController;