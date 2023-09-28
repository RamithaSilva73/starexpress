const stylemasterMssql = require('./stylemaster.mssql');


class stylemaster {
    async getAllstyles(req, res) {
      try {
         const output = await stylemasterMssql.getAllstyles();
         res.send(output);
         
      }
      catch (error) {
      res.status(500).json(error)

      //console.log(error);
    }
 }

 async addstyle(req, res) {
   try {
     const output = await stylemasterMssql.addstyle(req.body);
     res.status(200).send(output);
   }
   catch (error) {
    res.status(500).json(error);
   }
 }

 
 async updatestyle(req, res) {
   try {
     const output = await stylemasterMssql.updatestyle(req.body);
     res.status(200).send(output);
  }
  catch (error) {
  //console.log(error);
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
  }



}
module.exports = new stylemaster();