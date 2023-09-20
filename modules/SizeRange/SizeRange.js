const simstylesMssql = require('./SizeRangeMsSql.js')
const validation = require('./SizeRangeValidation.js')
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
