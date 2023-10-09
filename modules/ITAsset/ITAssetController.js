const ITAsset = require('./ITAsset');
const express = require('express');
const router = express.Router();

class ITAssetcontroller {
    constructor(app) 
    {
        router.get('/', ITAsset.getITAsset);
        app.use('/api/v1/similarstyle', router);
    }
}
module.exports = ITAssetcontroller;