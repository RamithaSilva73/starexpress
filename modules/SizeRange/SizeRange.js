const sizeRangeMssql = require('./SizeRangeMsSql.js')
const validation = require('./SizeRangeValidation.js')
const customError = require('../../utilities/CustomError.js')
const asyncErrorHandler = require('../../utilities/asyncErrorHandler.js');

exports.addsize= asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.SizeRangeValidation(req,res)      
 
  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }
  const output = await sizeRangeMssql.addsize(req.body);
  res.status(200).send(output);
})
