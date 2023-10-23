const simstylesMssql = require('./SimStylesMsSql.js')
const validation = require('./SimStylesValidation')
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addstyle= asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.SimStylesValidation(req,res)      
 
  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }
  const output = await simstylesMssql.addstyle(req.body);
  res.status(200).send(output);
})



exports.getSimstyleHistory=asyncErrorHandler(async(req,res) =>{
  
  const output=await simstylesMssql.gethistorySimStyle(req.body);
  res.status(200).send(output);

})

