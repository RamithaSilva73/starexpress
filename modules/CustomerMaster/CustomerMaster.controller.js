const CustomerOperation=require('./CustomerMaster');

const express=require('express');
const router=express.Router();

class CustomerMasterController 
{
    constructor(app)
    {
        //console.log("hello");
        router.post('/',CustomerOperation.addNewCustomer);
        app.use('/api/v2/Customer',router);
    }
}

module.exports=CustomerMasterController;
