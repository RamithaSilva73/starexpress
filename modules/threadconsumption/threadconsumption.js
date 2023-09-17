const threadconsumptionMSSql = require('./threadconsumption.mssql');
class threadconsumption {
    async getAllthreadconsumption(req, res) {
      try {
        console.log(123)
         const output = await threadconsumptionMSSql.getAllthreadconsumption();
         res.send(output);   
      }
      catch (error) {
      res.status(500).json(error)     
    }
 }

 async getPendthreadconsumption(req, res) {
  try {
     const output = await threadconsumptionMSSql.getPendthreadconsumption();
     res.send(output);     
  }
  catch (error) {
  res.status(500).json(error)
}
}
  async addthreadconsumption(req, res) {
   try {
     const output = await threadconsumptionMSSql.addthreadconsumption(req.body);
     res.status(200).send(output);
   }
   catch (error) {
    res.status(500).json(error);
   }
 }

}
module.exports = new threadconsumption();