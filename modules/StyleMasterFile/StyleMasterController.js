const AddStyleFile = require('./StyleMasterFile');

const express=require('express');
const router=express.Router();

class StyleFileController{
    constructor(app) {
        router.post('/',AddStyleFile.addNewStyle);
        app.use('/api/v1/idesk/style',router);
    }

}

module.exports=StyleFileController;