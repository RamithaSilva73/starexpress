const AssetGrnOperation=require('./AssetGrn');

const express=require('express');
const router=express.Router();

class AssetGrnController 
{
    constructor(app)
    {
        //console.log("hello");
        router.post('/',AssetGrnOperation.addNewGRN);
        app.use('/api/v2/GRN',router);
    }
}

module.exports=AssetGrnController;
