const trimconsumptionMSSql = require('./trimconsumption.mssql');
const validation = require('./trimconsumptionValidation')
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.getAlltrimconsumption= asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.trimconsumptionValidationcomp(req,res)      

  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }

  const output = await trimconsumptionMSSql.getAlltrimconsumption(req.body);
  res.status(200).send(output);

})

exports.getPendtrimconsumption= asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.trimconsumptionValidationpend(req,res)      

  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }


  const output = await trimconsumptionMSSql.getPendtrimconsumption(req.body);
  res.status(200).send(output);

})

exports.addtrimconsumption = asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.trimconsumptionValidation(req,res)    
  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }


  const output = await trimconsumptionMSSql.addtrimconsumption(req.body);
  res.status(200).send(output);

})






