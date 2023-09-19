const AddStyleFile = require('./StyleMasterFile');

const express=require('express');
const router=express.Router();

class StyleFileController{
    constructor(app) {
        router.post('/',AddStyleFile.addNewStyle);
        router.get('/history',AddStyleFile.getHistoryStyles);
        app.use('/api/v2/idesk/style',router);
    }
}

module.exports=StyleFileController;
