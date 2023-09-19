const GarmentTypes = require('./GarmentTypes');

const express=require('express');
const router=express.Router();

class GarmentTypeController{
    constructor(app) {
        router.post('/',GarmentTypes.addGarmentTypes);
        app.use('/api/v2/Idesk/GarmentType',router);
    }

}

module.exports=GarmentTypeController;
