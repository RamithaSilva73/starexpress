class Module {
    constructor(app) 
    {
       this.app = app;
    }
   
   init()
   
   {
 
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
   
    const trimconsumptioncontroller = require('./trimconsumption/trimconsumption.controller');
    new trimconsumptioncontroller(this.app);

    const threadconsumptioncontroller = require('./threadconsumption/threadconsumption.controller');
    new threadconsumptioncontroller(this.app);

    const similarstylecontroller = require('./SimStyles/SimStylesController');
    new similarstylecontroller(this.app);



   }
  }

  module.exports = Module
 
