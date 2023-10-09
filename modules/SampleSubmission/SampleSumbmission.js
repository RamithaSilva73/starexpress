const samplesubmissionMssql = require('./SampleSumbmissionMsSql.js')
const validation = require('./SampleSumbmissionValidation.js')
const customError = require('../../utilities/CustomError.js')
const asyncErrorHandler = require('../../utilities/asyncErrorHandler.js');

exports.samplesubmission= asyncErrorHandler(async(req, res,next) => {

  const outVal = await validation.SampleSubmissionValidation(req,res)      
 
  if(outVal.trim()!=='OK') {
    const err = new customError(outVal,406)
    return next(err) 
  }
  const output = await samplesubmissionMssql.addsamplesubmission(req.body);
  res.status(200).send(output);
})

