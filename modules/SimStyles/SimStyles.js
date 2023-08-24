const simstylesMssql = require('./SimStylesMsSql');
const oraclestyle = require('../../utilities/checkstyle')

class simstyles 
{
 async addstyle(req, res) {
   try 
   {
      const output = await oraclestyle.checkOracleStyle(req,res)      
      if(output==0)
      {
        res.send("Oracle Style Code Not Exists In Star Database")
      }
      else
      {
        const output = await simstylesMssql.addstyle(req.body);
        res.status(200).send(output);
      }          
   }
   catch (error) {
      res.status(500).json(error);
   }
 } 
}

module.exports = new simstyles();