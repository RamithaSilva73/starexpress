const GarmentTypes = require('./GarmentTypes');

const express=require('express');
const router=express.Router();

class GarmentTypeController{
    constructor(app) {
        router.post('/',GarmentTypes.addGarmentTypes);
        router.get('/history',GarmentTypes.getgarmenttypehistory);
        app.use('/api/v1/garmenttype',router);

    }

}

module.exports=GarmentTypeController;
