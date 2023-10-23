const AssetGrnOperation=require('./AssetGrn');

const express=require('express');
const router=express.Router();

class AssetGrnController 
{
    constructor(app)
    {
        //console.log("hello");
        router.post('/',AssetGrnOperation.addNewGRN);
        router.get('/history',AssetGrnOperation.gethistoryassetgrn);
        app.use('/api/v1/GRN',router);
    }
}

module.exports=AssetGrnController;
