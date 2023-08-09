const orderMssql = require('./order.mssql');
class order {
    async getAllOrders(req, res) {
      try {
         const output = await productMssql.getAllOrders();
         res.send(output);
         
      }
      catch (error) {
      console.log(error);
    }
 }

 async addOrder(req, res) {
   try {
     const output = await productMssql.addOrder(req.body);
     res.send(output);
   }
   catch (error) {
    console.log(error);
   }
 }

 
 async updateOrder(req, res) {
   try {
     const output = await productMssql.updateOrder(req.body);
     res.send(output);
  }
  catch (error) {
  console.log(error);
 }
 }

 async deleteOrder(req, res) {
    const id = req.params.id;
    try {
     if (!id) {
      console.log('id is not passed');
     }
     const output = await productMssql.deleteOrder(id);
     res.send(output);
    }
    catch (error) {
     console.log(error);
    }
  }

}

module.exports = new order();