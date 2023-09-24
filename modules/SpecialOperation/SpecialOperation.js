const SpOperation=require('./SpecialOperationMssql');

const validation = require('./SpecialOperationValidation')
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.AddSpecialOperation= asyncErrorHandler(async(req, res,next) => {
    const outVal = await validation.SpecialOparationValidation(req,res)      
  
  
    if(outVal.trim()!=='OK') {
      const err = new customError(outVal,406)
      return next(err) 
    }
  
    const output = await SpOperation.AddSpecialOperation(req.body);
    res.status(200).send(output);
  })
  