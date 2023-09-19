const SpecialOperation=require('./SpecialOperation');

const express=require('express');
const router=express.Router();

class SpecialOparationController {
    constructor(app){
        //console.log("hello");
        router.post('/',SpecialOperation.addSpecialOperation);
        app.use('/api/v2/specialoperation',router);
    }
}

module.exports=SpecialOparationController;
