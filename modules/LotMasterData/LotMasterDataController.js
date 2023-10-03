const LotMasterData= require('./LotMasterData');
const express = require('express');
const router = express.Router();

class MasterlotDataController {
    constructor(app) {
       
        router.post('/',LotMasterData.addLotMasterData);
        router.get('/',LotMasterData.getlotmasterHistory);
        app.use('/api/v2/masterlotdata', router);

    }
}
module.exports = MasterlotDataController;