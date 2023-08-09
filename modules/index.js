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

   }
  }
  

 module.exports = Module
 
