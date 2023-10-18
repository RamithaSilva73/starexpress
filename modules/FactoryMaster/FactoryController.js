//const FactoryMaster = require('./FactoryMaster');
const StarFactory = require('./FactoryMaster');
const express=require('express');
const router=express.Router();

class AddFactoryController{

    constructor(app){
        router.post('/',StarFactory.addFactory);
       // router.get('/',StarFactory.getAllFactory);
       router.get('/history',StarFactory.getfactoryhistory);
       app.use('/api/v1/factory',router);

    }


}
module.exports= AddFactoryController;
