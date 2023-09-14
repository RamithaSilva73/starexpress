//const IswSummaryController = require('./IswSummary/IswSummaryController');

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

    const SewsummaryController = require('./SewSummary/Sewsummary.controller');
    new SewsummaryController(this.app); 

    const SewWithoutController = require('./SewWithout/SewWithoutController');
    new SewWithoutController(this.app);
    
    const RefSampleTypeController =require('./RefSampleType/RefSampleController');
    new RefSampleTypeController(this.app);

    const IswSummaryController =require('./IswSummary/IswSummaryController');
    new IswSummaryController(this.app);

    const SammpleSubmissionController =require('./VSampleSubmisstionNew2/SampleSubmisssionNewController');
    new SammpleSubmissionController(this.app);

    const LotMasterDataController=require('./LotMasterData/LotMasterDataController');
    new LotMasterDataController(this.app);

    const SewsummaryController = require('./SewSummary/Sewsummary.controller');
    new SewsummaryController(this.app); 

    const SewWithoutController = require('./SewWithout/SewWithoutController');
    new SewWithoutController(this.app);

    const RefSampleTypeController =require('./RefSampleType/RefSampleController');
    new RefSampleTypeController(this.app);

    const IswSummaryController =require('./IswSummary/IswSummaryController');
    new IswSummaryController(this.app);

    const SammpleSubmissionController =require('./VSampleSubmisstionNew2/SampleSubmisssionNewController');
    new SammpleSubmissionController(this.app);
    
    const LotMasterDataController=require('./LotMasterData/LotMasterDataController');
    new LotMasterDataController(this.app);
    
   }
}
  

 module.exports = Module
 
