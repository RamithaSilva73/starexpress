const AssetInvOperation=require('./AssetInventory');

const express=require('express');
const router=express.Router();

class AssetInvController 
{
    constructor(app)
    {
        router.post('/',AssetInvOperation.getAssetInventory);
        router.get('/history',AssetInvOperation.getHistoryAssetInventory);
        app.use('/api/v1/MIAssets',router); 
    }
}

module.exports=AssetInvController;
