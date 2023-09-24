const simstylesMssql = require('./SimStylesMsSql.js')
const validation = require('./SimStylesValidation.js')
const customError = require('../../utilities/CustomError.js')
const asyncErrorHandler = require('../../utilities/asyncErrorHandler.js');

exports.addstyle= asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.SimStylesValidation(req,res)      
 console.log(outVal)
  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
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