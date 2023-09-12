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

    const trimconsumptioncontroller = require('./trimconsumption/trimconsumption.controller');
    new trimconsumptioncontroller(this.app);

    const threadconsumptioncontroller = require('./threadconsumption/threadconsumption.controller');
    new threadconsumptioncontroller(this.app);
   }
  }
  

 module.exports = Module
 
