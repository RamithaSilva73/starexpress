const SpecialOperation=require('./SpecialOperation');

const express=require('express');
const router=express.Router();

class SpecialOparationController {
    constructor(app){
        //console.log("hello");
        router.post('/',SpecialOperation.AddSpecialOperation);

        app.use('/api/v1/specialoperation',router);

    }
}

module.exports=SpecialOparationController;
