const trimconsumptionMSSql = require('./trimconsumption.mssql');
console.log('4')

class trimconsumption {
    async getAlltrimconsumption(req, res) {
      try {
         const output = await trimconsumptionMSSql.getAlltrimconsumption();
         res.send(output);
         
      }
      catch (error) {
      res.status(500).json(error)

 
    }
 }

 async getPendtrimconsumption(req, res) {
  try {
     const output = await trimconsumptionMSSql.getPendtrimconsumption();
     res.send(output);
     
  }
  catch (error) {
  res.status(500).json(error)


}
}




  async addtrimconsumption(req, res) {
   try {
     const output = await trimconsumptionMSSql.addtrimconsumption(req.body);
     res.status(200).send(output);
   }
   catch (error) {
    res.status(500).json(error);
   }
 }

 
/* async updatestyle(req, res) {
   try {
     const output = await stylemasterMssql.updatestyle(req.body);
     res.status(200).send(output);
  }
  catch (error) {
 
  res.status(500).json(error)
 }
 }
 async deletestyle(req, res) {
    const id = req.params.id;
    try {
     if (!id) {
      res.status(400).send('id is not passed')
      //console.log('id is not passed');
     }
     const output = await stylemasterMssql.deletestyle(id);
     res.status(200).send(output);
    }
    catch (error) {
      res.status(500).json(error)
    }
  } */



}
module.exports = new trimconsumption();