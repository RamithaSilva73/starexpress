const simstylesMssql = require('./simstylesMsSql')
const validation = require('./SimStylesValidation')
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addstyle= asyncErrorHandler(async(req, res,next) => {
  const outVal = await validation.SimStylesValidation(req,res)      
  if(outVal==0) {
    const err = new customError('Oracle Style Code Not Exists In Star Database',406)
    return next(err) 
  }


  const output = await simstylesMssql.addstyle(req.body);
  res.status(200).send(output);
})



/* class simstyles 
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
} */
//module.exports = new simstyles();