const smvMSSql = require('./smv.mssql');
const validation = require('./smvValidation')
const customError = require('./../../utilities/CustomError')
const asyncErrorHandler = require('./../../utilities/asyncErrorHandler');

exports.addsmvrequest = asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.smvrequestValidation(req,res)      

  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }


  const output = await smvMSSql.addsmvrequest(req.body);
  res.status(200).send(output);

})

exports.getsmvbulletin = asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.smvbulletinValidation(req,res)      

  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }


  const output = await smvMSSql.getsmvbulletin(req.body);
  res.status(200).send(output);

})

exports.getPendsmvrequest = asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.smvrequestpendValidation(req,res)      

  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }


  const output = await smvMSSql.getPendsmvrequest(req.body);
  res.status(200).send(output);

})

exports.gethistrysmv=asyncErrorHandler(async(req,res) =>{
  
  const output=await smvMSSql.getHistorysmv (req.body);
  res.status(200 ).send(output);


})