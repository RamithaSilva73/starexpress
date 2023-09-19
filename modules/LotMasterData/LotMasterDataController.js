const LotMasterData= require('./LotMasterData');
const express = require('express');
const router = express.Router();

class MasterlotDataController {
    constructor(app) {
       
        router.post('/',LotMasterData.addLotMasterData);
        app.use('/api/v2/MasterLotData', router);

    }
}
module.exports = MasterlotDataController;