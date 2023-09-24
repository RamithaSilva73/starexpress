//const IswSummaryController = require('./IswSummary/IswSummaryController');

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
   

   const StyleMasterFileControllerOld=require('./StyleMaster/StyleMaster.Controller');
   new StyleMasterFileControllerOld(this.app);
   

    const trimconsumptioncontroller = require('./trimconsumption/trimconsumption.controller');
    new trimconsumptioncontroller(this.app);

    const threadconsumptioncontroller = require('./threadconsumption/threadconsumption.controller');
    new threadconsumptioncontroller(this.app);

    const similarstylecontroller = require('./SimStyles/SimStylesController');
    new similarstylecontroller(this.app);

    const RefSampleTypeController =require('./RefSampleType/RefSampleController');
    new RefSampleTypeController(this.app);

    const IswSummaryController =require('./IswSummary/IswSummaryController');
    new IswSummaryController(this.app);


    const LotMasterDataController=require('./LotMasterData/LotMasterDataController');
    new LotMasterDataController(this.app);

    const SewWithoutController = require('./SewWithout/SewWithoutController');
    new SewWithoutController(this.app);

    const SammpleSubmissionController =require('./VSampleSubmisstionNew2/SampleSubmisssionNewController');
    new SammpleSubmissionController(this.app);
    
    const SampleDispatchController =require('./SampleDispatch/SampleDispatchController');
    new SampleDispatchController(this.app)

    const SewsummaryController=require('./SewSummary/Sewsummary.controller');
    new SewsummaryController(this.app)
  
    const SampleSubmissionController =require('./VSampleSubmisstionNew2/SampleSubmisssionNewController');
    new SampleSubmissionController(this.app);

    const SizeRangeController =require('./SizeRange/SizeRangeController');
    new SizeRangeController(this.app);

    const PreProdutionController =require('./PreProduction/PreProductionController');
    new PreProdutionController(this.app);

    


   }  


}
  
  module.exports = Module
 
