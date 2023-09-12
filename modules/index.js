class Module {
    constructor(app) {
       this.app = app;
    }
   init() {
    const productcontroller = require('./product/product.controller');
    new productcontroller(this.app);

    //const ordercontroller = require('./order/order.controller');
    //new ordercontroller(this.app);

    const stylemastercontroller = require('./stylemaster/stylemaster.controller');
    new stylemastercontroller(this.app);

   const CustomerMasterController=require('./CustomerMaster/CustomerMaster.controller');
   new CustomerMasterController(this.app);
   
   const GarmentTypeController=require('./GarmentTypes/GarmentTypeController');
   new GarmentTypeController(this.app);

   const AddFactoryController = require('./FactoryMaster/FactoryController');
   new AddFactoryController(this.app);

   const AddSpecialOparation=require('./SpecialOperation/SpecialOperationController');
   new AddSpecialOparation(this.app);

   const StyleMasterFileController=require('./StyleMasterFile/StyleMasterController');
   new StyleMasterFileController(this.app);
   




   }
  }
  

 module.exports = Module
 
