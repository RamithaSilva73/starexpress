const threadconsumptionMSSql = require('./threadconsumption.mssql');
const validation = require('./threadconsumptionValidation')
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addthreadconsumption= asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.threadconsumptionValidation(req,res)      

  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }


  const output = await threadconsumptionMSSql.addthreadconsumption(req.body);
  res.status(200).send(output);

})

exports.getAllthreadconsumption= asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.threadconsumptionValidationall(req,res)      

  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }


  const output = await threadconsumptionMSSql.getAllthreadconsumption(req.body);
  res.status(200).send(output);

})

exports.getPendthreadconsumption = asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.threadconsumptionValidationpend(req,res)      

  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }


  const output = await threadconsumptionMSSql.getPendthreadconsumption(req.body);
  res.status(200).send(output);

})

exports.gethistrythrdconsumption=asyncErrorHandler(async(req,res) =>{
  
  const output=await threadconsumptionMSSql.getHistorythred (req.body);
  res.status(200 ).send(output);


})



