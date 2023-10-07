const AssetInvOperation=require('./AssetInventory');

const express=require('express');
const router=express.Router();

class AssetInvController 
{
    constructor(app)
    {
       // console.log("hello");
        router.get('/',AssetInvOperation.getAssetInventory);
        app.use('/api/v2/MIAssets',router);
    }
}

module.exports=AssetInvController;