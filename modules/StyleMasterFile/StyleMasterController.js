const AddStyleFile = require('./StyleMasterFile');

const express=require('express');
const router=express.Router();

class StyleFileController{
    constructor(app) {
        router.post('/',AddStyleFile.addNewStyle);

        router.get('/style',AddStyleFile.getHistoryStyles);
        app.use('/api/v2/style',router);

    }
}

module.exports=StyleFileController;
