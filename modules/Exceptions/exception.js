const exceptionMssql = require('./exception.mssql');


class exception {
  
  async getoracleexception(req, res) {
      try {
         const output = await exceptionMssql.getoracleexception();
         res.send(output);
         
      }
      catch (error) {
      res.status(500).json(error)

      //console.log(error);
    }
 }

 async getstarexception(req, res) {
   try {
     const output = await exceptionMssql.getstarexception(req.body);
     res.status(200).send(output);
   }
   catch (error) {
    res.status(500).json(error);
   }
 }

 
 async poststarexception(req, res) {
   try {
     const output = await exceptionMssql.poststarexception(req.body);
     res.status(200).send(output);
  }
  catch (error) {
  //console.log(error);
  res.status(500).json(error)
 }
 }
 

 async postoracleexception(req, res) {
  try {
    const output = await exceptionMssql.postoracleexception(req.body);
    res.status(200).send(output);
 }
 catch (error) {
 //console.log(error);
 res.status(500).json(error)
}
}

async updateoracleexception(req, res) {
  try {
    const output = await exceptionMssql.updateoracleexception(req.body);
    res.status(200).send(output);
 }
 catch (error) {
 //console.log(error);
 res.status(500).json(error)
}
}


async updatstarexception(req, res) {
 try {
   const output = await exceptionMssql.updatstarexception(req.body);
   res.status(200).send(output);
}
catch (error) {
//console.log(error);
res.status(500).json(error)
}
}


}
module.exports = new exception();